const words = ["AJ", "MG", "SFMG", "MGCOUNTS", "STRAIGHTFROMMG"]
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const thing = { "1": 1, "2": 2, "3": 3, "4": 1, "5": 2, "6": 3, "7": 1, "8": 2, "9": 3, "10": 1, "11": 2, "12": 3, "13": 1, "14": 2 }
let index = 0;

function updateTitle() {
    let length = words[index].length
    let skip = (14 - length) / 2
    let i = skip;
    let ii = 0;
    let iii = 0;
    let done = [];
    while (length > ii) {
        document.querySelector(`.digit${i + 1}`).classList.remove("animate" + thing[i + 1]);
        let value = alphabet.slice(alphabet.indexOf(words[index][iii]), alphabet.length) + " " + alphabet.slice(0, alphabet.indexOf(words[index][iii]));
        value = value.split("").join(" ");
        value = value.replace('   ', ' ');
        document.querySelector(`.digit${i + 1}`).classList.remove("hidden");
        document.querySelector(`.digit${i + 1}`).innerHTML = value;
        document.querySelector(`.digit${i + 1}`).classList.add("animate" + thing[i + 1]);
        i++;
        ii++;
        iii++;
        done.push(i)
    }
    let notDone = [];
    for (let i = 1; i < 15; i++) {
        if (!done.includes(i)) {
            notDone.push(i);
        }
    }
    for (let i = 0; i < notDone.length; i++) {
        document.querySelector(`.digit${notDone[i]}`).classList.remove("animate" + thing[notDone[i]]);
        document.querySelector(`.digit${notDone[i]}`).classList.add("hidden");
    }
    index++;
    if (index === words.length) {
        index = 0;
    }
}

updateTitle();
setInterval(updateTitle, 3000);

const openModal = (image) => {
    let modal = document.getElementById('expandedImg');
    let modalImg = document.getElementById('img_expanded');
    modal.style.display = 'block';
    modalImg.src = image;
};

const closeModal = () => {
    let modal = document.getElementById('expandedImg');
    modal.style.display = 'none';
}

document.body.addEventListener('click', (event) => {
    if (!event.target.matches('.project-image')) {
        closeModal();
    }
});

programs.forEach((program) => {
    let a = document.createElement("a");
    a.href = program.href;
    a.target = "_blank";

    let img = document.createElement("img");
    img.src = program.img.src;
    img.alt = program.img.alt;
    img.width = 40;
    img.height = 40;
    a.appendChild(img);
    document.getElementById("programs").appendChild(a);
});

portfolio.forEach((project) => {
    let div = document.createElement('div');
    div.classList.add('project');
    let title = document.createElement('h2');
    title.textContent = project.name;
    div.appendChild(title);
    let description = document.createElement('p');
    description.textContent = project.description;
    div.appendChild(description);
    let imgGrid = document.createElement('div');
    imgGrid.classList.add('img-grid');
    project.images.forEach((image) => {
        let img = document.createElement('img');
        img.classList.add('project-image');
        img.src = image;
        img.alt = project.name;
        img.style.width = '27vw';
        img.style.height = '250px';
        img.onclick = () => {
            openModal(image);
        };
        imgGrid.appendChild(img);
    });
    div.appendChild(imgGrid);
    let hr = document.createElement('hr');
    hr.classList.add('extra-space');
    div.appendChild(hr);
    project.links.forEach((link) => {
        let a = document.createElement('a');
        let button = document.createElement('button');
        button.classList.add('button');
        button.textContent = link.link_title;
        a.href = link.link_url;
        a.target = '_blank';
        a.appendChild(button);
        div.appendChild(a);
    });
    document.getElementById('portfolio').appendChild(div);
});

document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.template-card').forEach((item, index) => {
    item.addEventListener('click', () => {
        window.location.href = `/templates/template${index + 1}.html`;
    });
});