const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Rolling-letter odometer ---------- */

const NAMES = ["MGCOUNTS", "AJ", "SFMG", "STRAIGHTFROMMG"];
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const odometer = document.getElementById("odometer");
let nameIndex = 0;

function showName(word, animate) {
    odometer.style.setProperty("--cells", word.length);
    odometer.replaceChildren();

    [...word].forEach((letter, i) => {
        const cell = document.createElement("span");
        cell.className = "cell";
        const reel = document.createElement("span");
        reel.className = "reel";

        // Each reel spins through a run of the alphabet and stops on its letter.
        const spins = animate ? 7 + (i % 3) * 3 : 0;
        const stop = ALPHABET.indexOf(letter);
        for (let s = spins; s >= 0; s--) {
            const glyph = document.createElement("span");
            glyph.textContent = ALPHABET[(stop - s + 260) % 26];
            reel.appendChild(glyph);
        }
        cell.appendChild(reel);
        odometer.appendChild(cell);

        if (animate) {
            reel.style.transitionDuration = 900 + i * 110 + "ms";
            requestAnimationFrame(() => requestAnimationFrame(() => {
                reel.style.transform = `translateY(-${spins}em)`;
            }));
        }
    });
}

showName(NAMES[0], !reduceMotion);
if (!reduceMotion) {
    setInterval(() => {
        if (document.hidden) return;
        nameIndex = (nameIndex + 1) % NAMES.length;
        showName(NAMES[nameIndex], true);
    }, 4200);
}

/* ---------- Tally ---------- */

const totals = {
    total: PROJECTS.length,
    running: PROJECTS.filter((p) => p.running).length,
    retired: PROJECTS.filter((p) => !p.running).length
};

document.querySelectorAll("#tally [data-count]").forEach((el) => {
    const target = totals[el.dataset.count];
    if (reduceMotion) {
        el.textContent = target;
        return;
    }
    const start = performance.now();
    const duration = 1400;
    const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
        if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
});

/* ---------- Project cards ---------- */

const grid = document.getElementById("grid");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewer-img");
const viewerTitle = document.getElementById("viewer-title");

function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
}

function buildCard(project) {
    const card = el("article", "card" + (project.featured ? " featured" : ""));
    card.dataset.kind = project.kind;
    card.dataset.running = project.running;

    if (project.image) {
        const [file, width, height] = project.image;
        const ratio = width / height;
        const frame = el("button", "frame");
        frame.type = "button";
        frame.setAttribute("aria-label", `Enlarge the picture of ${project.name}`);
        // Screenshots close to the frame's shape fill it; odd shapes are shown whole.
        if (ratio < 1.3 || ratio > 2.1) frame.classList.add("whole");

        const img = el("img");
        img.src = `./images/${file}`;
        img.alt = `Screenshot of ${project.name}`;
        img.width = width;
        img.height = height;
        img.loading = "lazy";
        img.decoding = "async";
        img.addEventListener("error", () => {
            frame.replaceWith(buildPlaceholder(project));
        });
        frame.appendChild(img);
        frame.addEventListener("click", () => {
            viewerImg.src = img.src;
            viewerImg.alt = img.alt;
            viewerTitle.textContent = project.name;
            viewer.showModal();
        });
        card.appendChild(frame);
    } else {
        card.appendChild(buildPlaceholder(project));
    }

    const meta = el("p", "meta");
    meta.appendChild(el("span", project.running ? "status on" : "status off", project.running ? "Running" : "Retired"));
    meta.appendChild(el("span", "kind", KIND_SINGULAR[project.kind]));
    card.appendChild(meta);

    card.appendChild(el("h3", "", project.name));
    card.appendChild(el("p", "text", project.text));

    if (project.links.length) {
        const links = el("p", "links");
        project.links.forEach((link) => {
            const a = el("a", "", link.label);
            a.href = link.url;
            a.target = "_blank";
            a.rel = "noopener";
            links.appendChild(a);
        });
        card.appendChild(links);
    }
    return card;
}

// Used when a project has no picture, or its picture fails to load.
function buildPlaceholder(project) {
    const box = el("div", "frame placeholder");
    box.appendChild(el("span", "", project.name));
    return box;
}

const KIND_SINGULAR = {
    web: "Website",
    youtube: "YouTube",
    extension: "Extension",
    app: "App",
    tool: "Bot or tool"
};

const ordered = [...PROJECTS].sort((a, b) => Number(b.running) - Number(a.running));
const cards = ordered.map((project) => {
    const card = buildCard(project);
    grid.appendChild(card);
    return card;
});

/* ---------- Filters ---------- */

const filter = { status: "all", kind: "all" };
const resultCount = document.getElementById("result-count");
const empty = document.getElementById("empty");

function matches(project, status, kind) {
    const statusOk = status === "all" || (status === "running") === project.running;
    const kindOk = kind === "all" || project.kind === kind;
    return statusOk && kindOk;
}

function buildChips(container, key, options) {
    options.forEach(([value, label]) => {
        const chip = el("button", "chip");
        chip.type = "button";
        chip.dataset.value = value;
        chip.append(label + " ", el("span", "n"));
        chip.addEventListener("click", () => {
            filter[key] = value;
            applyFilter();
        });
        container.appendChild(chip);
    });
}

function applyFilter() {
    let shown = 0;
    cards.forEach((card, i) => {
        const visible = matches(ordered[i], filter.status, filter.kind);
        card.hidden = !visible;
        if (visible) shown++;
    });

    // Each chip's number says how many projects you would see by choosing it.
    document.querySelectorAll("#status-filter .chip").forEach((chip) => {
        chip.setAttribute("aria-pressed", chip.dataset.value === filter.status);
        chip.querySelector(".n").textContent = PROJECTS.filter((p) => matches(p, chip.dataset.value, filter.kind)).length;
    });
    document.querySelectorAll("#kind-filter .chip").forEach((chip) => {
        chip.setAttribute("aria-pressed", chip.dataset.value === filter.kind);
        chip.querySelector(".n").textContent = PROJECTS.filter((p) => matches(p, filter.status, chip.dataset.value)).length;
    });

    const filtered = filter.status !== "all" || filter.kind !== "all";
    resultCount.textContent = filtered ? `Showing ${shown} of ${PROJECTS.length}` : `${PROJECTS.length} in total`;
    empty.hidden = shown > 0;
}

buildChips(document.getElementById("status-filter"), "status", [
    ["all", "All"],
    ["running", "Running"],
    ["retired", "Retired"]
]);
buildChips(document.getElementById("kind-filter"), "kind", [["all", "Every type"], ...Object.entries(KINDS)]);

document.getElementById("reset").addEventListener("click", () => {
    filter.status = "all";
    filter.kind = "all";
    applyFilter();
});

applyFilter();

/* ---------- Picture viewer ---------- */

// Clicking the dark area around the picture closes it.
viewer.addEventListener("click", (event) => {
    if (event.target === viewer) viewer.close();
});
