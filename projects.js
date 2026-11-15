// Every project on the page lives here. To add one, copy an entry and edit it.
//
//   name      Title shown on the card.
//   kind      One of: "web", "youtube", "extension", "app", "tool".
//   running   true if it is still online or still maintained, false if it has shut down.
//   featured  true gives the project a large tile at the top (optional).
//   image     File name inside ./images, plus its pixel size. Leave out if there is no picture.
//   text      The description.
//   links     Buttons under the description: { label, url }.

const KINDS = {
  web: "Websites",
  youtube: "YouTube",
  extension: "Extensions",
  app: "Apps",
  tool: "Bots and tools"
};

const SOURCE = "View source code";
const ARCHIVE = "Visit archive";

const PROJECTS = [
  {
    name: "Straight From MG",
    kind: "youtube",
    running: true,
    featured: true,
    image: ["sfmg.webp", 915, 926],
    text: "My main YouTube channel, where I've been posting semi-regularly for over 6 years. I mainly post statistical videos about YouTube and other social media platforms, and occasionally I run interactive streams such as Faking Your Sub Counts, Emoji Wars, and many others.",
    links: [{ label: "Visit channel", url: "https://youtube.com/@sfmg" }]
  },
  {
    name: "Livecountsedit",
    kind: "web",
    running: true,
    featured: true,
    image: ["lcedit.webp", 1400, 532],
    text: "The largest website in the world for fake live counters for YouTube and other platforms. After RandomPerson3465 discontinued his website, I took what was there and vastly improved and added onto it. I programmed over 90% of the current website myself, including the famous 'Social Blade' and 'Top 50' style counters.",
    links: [
      { label: "Visit website", url: "https://lcedit.com" },
      { label: SOURCE, url: "https://github.com/livecountsedit/livecountsedit.github.io" }
    ]
  },
  {
    name: "Return YouTube Subscribers",
    kind: "extension",
    running: true,
    featured: true,
    image: ["ryts.webp", 595, 228],
    text: "Back in September of 2019, YouTube abbreviated all subscriber counts across their website and API. This extension uses axern.space's API (with permission) to get an estimated subscriber count for YouTube channels, then displays it where the abbreviated count would be.",
    links: [
      { label: "Install extension", url: "https://ryts.mgcounts.com" },
      { label: SOURCE, url: "https://github.com/returnyoutubesubscribers/returnyoutubesubscribers.github.io" }
    ]
  },
  {
    name: "Bluesky Tracker",
    kind: "web",
    running: true,
    featured: true,
    image: ["bsky.webp", 1400, 473],
    text: "After Elon Musk bought Twitter in October of 2022, many people moved to Bluesky. I saw this as an amazing opportunity to make a website that tracks the growth of the platform and its users. The website gets over 5,000 daily users according to Cloudflare and is well known within the platform. I also made a Bluesky bot that tracks milestones for some of its users. The first load is slow because I rely on free hosting for it.",
    links: [
      { label: "Visit website", url: "https://bsky-tracker.xyz" },
      { label: SOURCE, url: "https://github.com/mgcountss/bsky-tracker" }
    ]
  },
  {
    name: "Discord Server Tags",
    kind: "web",
    running: true,
    image: ["tags.webp", 1265, 865],
    text: "In May of 2025, Discord released a feature called 'tags.' I spotted this golden opportunity and made a website as soon as I could to track the tags across servers. It grew to the largest site of its kind, surpassing even more well-known Discord-related sites.",
    links: [
      { label: "Visit website", url: "https://tags.mgcounts.com/" },
      { label: "View original source code", url: "https://github.com/mgcountss/discord-tag-list" }
    ]
  },
  {
    name: "Audio Lab",
    kind: "web",
    running: true,
    image: ["audiolab.webp", 1264, 852],
    text: "A sound editor that runs entirely in your browser. Upload an MP3, WAV, or OGG file and change its speed, pitch, volume, and pan, shape it with bass and treble EQ, then add reverb, echo, distortion, and fades.",
    links: [
      { label: "Open Audio Lab", url: "https://audiolab.mgcounts.com/" },
      { label: SOURCE, url: "https://github.com/mgcountss/audiolab" }
    ]
  },
  {
    name: "#TeamWater Tracker",
    kind: "youtube",
    running: true,
    image: ["teamwater.webp", 1400, 788],
    text: "#TeamWater is a fundraiser by MrBeast with a goal of raising 40 million dollars to give people clean water. This 24/7 live stream tracked its progress toward that goal.",
    links: [
      { label: "Watch the stream", url: "https://www.youtube.com/watch?v=r7G3pY2Cb0c" },
      { label: SOURCE, url: "https://github.com/mgcountss/teamwater-stream" }
    ]
  },
  {
    name: "Faking Your Sub Counts",
    kind: "youtube",
    running: true,
    image: ["fysc.webp", 1289, 733],
    text: "A series of interactive streams on my YouTube channel. Viewers add their channel through live chat, then use commands such as '!upload' and '!comment' to gain fake subscribers. It's a fairly well-known stream in the community, and I made a live YouTube simulation website and a dashboard to go with it.",
    links: [
      { label: "Watch the timelapse", url: "https://www.youtube.com/watch?v=IPMd0zeD0hQ" },
      { label: ARCHIVE, url: "https://web.archive.org/web/20231225001023/https://fysc.mgcounts.com/" },
      { label: SOURCE, url: "https://github.com/mgcountss/fysc" }
    ]
  },
  {
    name: "Emoji Wars",
    kind: "youtube",
    running: true,
    image: ["emojiwars.webp", 1280, 720],
    text: "Emoji Wars was the first interactive live stream I ever saw. It was originally hosted on BattleTV back in 2019, before I knew how to code. Once I learned to program decently, it was of course my first interactive live stream. You spam emojis in chat and it counts the most used ones. All the source code is available on GitHub.",
    links: [
      { label: "Watch the timelapse", url: "https://www.youtube.com/watch?v=zvEg9D0Ef40" },
      { label: SOURCE, url: "https://github.com/mgcountss/emoji-wars" }
    ]
  },
  {
    name: "The YouTube List",
    kind: "web",
    running: false,
    image: ["list.webp", 457, 426],
    text: "A friend by the name of ANTUBER suggested a list that tracks every single YouTube channel it's able to find. I thought it was a great idea, so I built it. It was a huge success and was used by many people; at its peak it had over 2 million channels in its database. It became slow from constant searches and sorts on the bad hardware it ran on, so it had to shut down.",
    links: [
      { label: ARCHIVE, url: "https://web.archive.org/web/20230823184732/https://list.mgcounts.com/" },
      { label: SOURCE, url: "https://github.com/mgcountss/The-YouTube-List" }
    ]
  },
  {
    name: "Real Life (LED) Sub Counter",
    kind: "tool",
    running: true,
    image: ["led.webp", 1279, 959],
    text: "After seeing a video of a real-life sub counter, I didn't think it would be very difficult to make one myself, so I did. It uses a Raspberry Pi 4 and 117 WS8211 LED lights (about 3 strings). I arranged the lights into a custom board and programmed a web UI to control it.",
    links: [
      { label: "Watch the live stream demo", url: "https://www.youtube.com/live/0VSuOBo1Dy8" },
      { label: SOURCE, url: "https://github.com/mgcountss/led-sub-count" }
    ]
  },
  {
    name: "Minecraft Bedrock Sub Counter",
    kind: "tool",
    running: true,
    image: ["minecraft.webp", 557, 539],
    text: "To my knowledge, this is the first ever Minecraft Bedrock sub counter. It displays a channel's subscriber count, which can update live, and its profile picture.",
    links: [
      { label: "Watch the demo", url: "https://www.youtube.com/watch?v=nmT3zv-Mnjg" },
      { label: SOURCE, url: "https://github.com/mgcountss/minecraft-bedrock-sub-counter" }
    ]
  },
  {
    name: "Personal Finance Tracker",
    kind: "app",
    running: true,
    image: ["finance.webp", 1400, 633],
    text: "An advanced finance tracker that keeps track of your financial state: transactions, budgets, subscriptions, report generation, and more.",
    links: []
  },
  {
    name: "70&Sunny",
    kind: "app",
    running: true,
    image: ["sunny.webp", 1085, 955],
    text: "A Mother's Day gift for my mom with the sole purpose of showing her warm weather near her. It was an app as well as a website. Enter your location and it displays nearby places with the weather you chose.",
    links: []
  },
  {
    name: "RockPaperScissors",
    kind: "app",
    running: true,
    image: ["rps.webp", 1149, 601],
    text: "A while ago I wanted to learn other programming languages, so I made a Rock Paper Scissors game in C#. It's very limited right now, but it has a UI and I plan to update it someday.",
    links: [{ label: SOURCE, url: "https://github.com/mgcountss/RockPaperScissors" }]
  },
  {
    name: "2026 Midterm Map",
    kind: "web",
    running: false,
    image: ["midterm.webp", 1400, 875],
    text: "A bias-adjusted forecast of the 2026 U.S. midterms with a winner named in every Senate, governor, and competitive House race. You can switch between ten versions of the map, from raw polls to early-vote data to my final call, and see how each poll correction changes the result.",
    links: [{ label: SOURCE, url: "https://github.com/mgcountss/midterm-ai-prediction" }]
  },
  {
    name: "New Year's Live Feed",
    kind: "web",
    running: false,
    image: ["newyears.webp", 1268, 932],
    text: "A live wall of every New Year's 2026 countdown stream on YouTube. It searched for new streams every few seconds, sorted them by viewer count, tagged them automatically, and kept a viewer history for each one.",
    links: [{ label: SOURCE, url: "https://github.com/mgcountss/ny-stream-tracker" }]
  },
  {
    name: "Election Tracker",
    kind: "web",
    running: false,
    image: ["election.webp", 1400, 861],
    text: "For the 2024 elections, I made a bot to scrape data from a variety of sources and display it in a nice way, so people could see live vote counts, graphs of the votes, and which candidates were winning. Alongside the website I made a Discord bot that broadcast live updates, and a YouTube live stream.",
    links: [
      { label: ARCHIVE, url: "https://web.archive.org/web/20241105201938/https://election.mgcounts.com/" },
      { label: SOURCE, url: "https://github.com/mgcountss/elections_old" },
      { label: "View Discord bot code", url: "https://github.com/mgcountss/2024-election-discord-bot" }
    ]
  },
  {
    name: "Terra",
    kind: "app",
    running: false,
    image: ["terra.webp", 830, 1800],
    text: "Terra was a little passion project of mine that ran from around June to November 2024, released on both the App Store and Google Play. 'Terra aims to redefine social media by embracing the beauty of the world through promoting a unique perspective which excludes photos containing people to highlight the beauty in the rest of the world.' The app was not as successful as I hoped and its costs were too high, so I had to discontinue it, but it taught me a lot about app development and marketing.",
    links: [{ label: ARCHIVE, url: "https://web.archive.org/web/2024/https://terra.photos/" }]
  },
  {
    name: "Riffusion Tracker",
    kind: "web",
    running: false,
    image: ["riffusion.webp", 1400, 875],
    text: "A simple website for tracking live counts on the AI music platform Riffusion. Search for any user or song to see its play counts, or browse the top 40 songs.",
    links: [
      { label: "Visit website", url: "https://riffusion.mgcounts.com/" },
      { label: SOURCE, url: "https://github.com/mgcountss/Riffusion-Tracker" }
    ]
  },
  {
    name: "YouTube Comment Analysis",
    kind: "web",
    running: false,
    image: ["comments.webp", 1400, 875],
    text: "A breakdown of every comment and reply on a YouTube channel: totals, a day-by-day activity chart, the top commenters, and a page for each commenter showing their first and last comments and the likes and replies they received.",
    links: [
      { label: "Visit website", url: "https://comments.mgcounts.com/" },
      { label: SOURCE, url: "https://github.com/mgcountss/comment-stats" }
    ]
  },
  {
    name: "TruthSocial Live Count",
    kind: "web",
    running: false,
    text: "A live counter for Truth Social. It follows an account's followers and the favorites, reblogs, and replies on a post, with averages per second, minute, and hour, and progress toward the next goal.",
    links: [
      { label: "Visit website", url: "https://truthsocial.mgcounts.com/" },
      { label: SOURCE, url: "https://github.com/mgcountss/truthsocial" }
    ]
  },
  {
    name: "MGCounts",
    kind: "web",
    running: false,
    image: ["mgcounts.webp", 1067, 883],
    text: "MGCounts was my original website and one of the reasons I got into programming in the first place. It displayed subscriber and follower counts for a variety of social media platforms. It was well known in its niche, but I discontinued it in 2022 because, despite that, few people actually used it.",
    links: [
      { label: ARCHIVE, url: "https://web.archive.org/web/20221004093813/https://mgcounts.com/" },
      { label: "View V7 source code", url: "https://github.com/mgcountss/mgcounts-v7" },
      { label: "View V6 source code", url: "https://github.com/mgcountss/MGCounts-V6" }
    ]
  },
  {
    name: "Vidre (VidShare)",
    kind: "web",
    running: false,
    image: ["vidre.webp", 756, 797],
    text: "I originally had the idea for a new YouTube back in 2020 and made the site on Awardspace in about an hour. It was all manual, with channels and videos submitted through a Google Form. Years later I realized I could make it automatic, and I did. It has been created and killed many times since. At its peak it had videos, custom thumbnails, top lists, analytics, live streaming, and more. In 2022 I officially changed the name from VidShare to Vidre. Soon after, it became inactive and I killed it.",
    links: [{ label: ARCHIVE, url: "https://web.archive.org/web/20220630031417/https://vidre.net/" }]
  },
  {
    name: "MGBot (YouTube ChatBot)",
    kind: "tool",
    running: false,
    image: ["mgbot.webp", 1400, 637],
    text: "When I first started watching 24/7 streams, the main chatbots were NightBot and Streamlabs. I thought they were cool, so I made my own version. MGBot is a fully customizable YouTube chatbot with many features, such as a currency system, counting, chat logs, moderation, giveaways, and more.",
    links: [
      { label: ARCHIVE, url: "https://web.archive.org/web/20240322003355/https://chatbot.mgcounts.com/" },
      { label: SOURCE, url: "https://github.com/mgcountss/ChatBot" }
    ]
  },
  {
    name: "YABCounts",
    kind: "web",
    running: false,
    image: ["yab.webp", 1400, 650],
    text: "YABCounts was a little website, similar to MGCounts and BGTrack, that let you track subscriber and follower counts on a variety of social media platforms. Its crown jewel was the ability to estimate the live subscriber count of YouTube channels, since the real ones were abbreviated.",
    links: [{ label: ARCHIVE, url: "https://web.archive.org/web/20240416224300/https://yabcounts.com/" }]
  },
  {
    name: "Loop Tracker",
    kind: "web",
    running: false,
    image: ["loop.webp", 1400, 699],
    text: "Loop Tracker was a simple program I made to track stats on a Vine clone known as Loop. It did quite well until the Loop platform shut down.",
    links: [
      { label: ARCHIVE, url: "https://web.archive.org/web/20240416031509/https://loop.mgcounts.com/" },
      { label: SOURCE, url: "https://github.com/mgcountss/loop-tracker" }
    ]
  },
  {
    name: "BitView Counter",
    kind: "web",
    running: false,
    image: ["bitview.webp", 1400, 1048],
    text: "BitView was a semi-popular old-school YouTube clone. I made a counter for it that displays a channel's followers and a video's view count, along with a few more stats.",
    links: [
      { label: ARCHIVE, url: "https://web.archive.org/web/20230702183019/https://bitview.mgcounts.com/stats?cid=SFMG" },
      { label: SOURCE, url: "https://github.com/mgcountss/bitview-counter" }
    ]
  },
  {
    name: "BGTrack",
    kind: "web",
    running: false,
    image: ["bgtrack.webp", 1400, 989],
    text: "BGTrack was a popular service for tracking statistics on the Roblox clone Polytoria. I made a live counter and analytics tool that worked for users, games, guilds, and items. I programmed it for free for a user known as Electric. Eventually it shut down.",
    links: [{ label: ARCHIVE, url: "https://web.archive.org/web/20230104031414/https://bgtrack.net/" }]
  },
  {
    name: "Global Cookie Clicker",
    kind: "web",
    running: false,
    image: ["gcc.webp", 1277, 719],
    text: "I love the game Cookie Clicker, and I also love playing with other people. There was no way to play Cookie Clicker with other people, so I made a website that let you do exactly that.",
    links: [{ label: "Watch the archived live demo", url: "https://www.youtube.com/watch?v=QR3yyrwK4u8" }]
  },
  {
    name: "ChatterCC",
    kind: "web",
    running: false,
    image: ["chatter.webp", 1237, 622],
    text: "ChatterCC was a website a friend and I came up with one night during practice. In late 2021 we began programming it. It was a chat app like Discord, but all the chats other than DMs were global. Eventually we stopped working on it and it was never finished.",
    links: []
  },
  {
    name: "#TeamSeas Bot",
    kind: "tool",
    running: false,
    image: ["teamseas.webp", 531, 829],
    text: "A simple Twitter bot I made to track the total raised and the top donors for MrBeast's #TeamSeas campaign. It was a fun little project and I learned a lot about Twitter bots.",
    links: [{ label: "Visit the inactive bot", url: "https://x.com/TeamSeasBot" }]
  },
  {
    name: "YouTube Subscriber History",
    kind: "tool",
    running: false,
    image: ["history.webp", 977, 749],
    text: "Making subscriber count history videos can be an extremely tedious task, so I wrote a simple(ish) Node.js program to automate the process.",
    links: [{ label: SOURCE, url: "https://github.com/mgcountss/YouTube-Subscriber-History" }]
  },
  {
    name: "MEE6 XP Viewer",
    kind: "extension",
    running: false,
    image: ["mee6.webp", 798, 823],
    text: "A browser extension for the MEE6 Discord bot's leaderboard pages. MEE6 abbreviates XP totals, so this shows each user's full number of XP instead, and can keep the counts updating automatically.",
    links: [{ label: SOURCE, url: "https://github.com/mgcountss/MEE6-XP-Viewer" }]
  },
  {
    name: "ViewStats Game Solver",
    kind: "tool",
    running: false,
    image: ["viewstats.webp", 1227, 457],
    text: "ViewStats has a game where you guess which YouTube video has more views. This script looks up the real view counts and picks the right answer every round. Paste it into the console and watch it climb the leaderboard.",
    links: [{ label: SOURCE, url: "https://github.com/mgcountss/viewstats-game-cheat" }]
  },
  {
    name: "YouTube Dislike Fixer",
    kind: "extension",
    running: false,
    text: "When YouTube hid dislike counts in late 2021, this extension put the number back on the dislike button for the short window while YouTube's API still reported it.",
    links: [{ label: SOURCE, url: "https://github.com/mgcountss/YT-Dislike-Fixer" }]
  }
];
