let portfolio = [
  {
    "name": "Straight From MG",
    "description": "My main YouTube channel where I've been posting semi-regularly for over 6 years! I mainly post statistical videos in regards to YouTube and other social media platforms. But occasionally I stream interactive streams such as Faking Your Sub Counts, Emoji Wars, and many others.",
    "images": ["./images/sfmg.png"],
    "links": [{ "link_url": "https://youtube.com/@sfmg", "link_title": "Visit Channel" }],
    "active": true
  },
  {
    "name": "Livecountsedit",
    "description": "This is the largest website for fake YouTube (and other platforms)'s live counters in the world! After RandomPerson3465 discontinued his website, I decided to take what was there and vastly improve and add onto it. I specifically programmed over 90% of the current website by myself including the famous 'Social Blade' and 'Top 50' style counters.",
    "images": ["./images/lcedit.png"],
    "links": [{ "link_url": "https://lcedit.com", "link_title": "Visit Website" }, { "link_url": "https://github.com/livecountsedit/livecountsedit.github.io", "link_title": "View Source Code/Download" }],
    "active": true
  },
  {
    "name": "Return YouTube Subscribers",
    "description": "Back in September of 2019, YouTube abbreviated all subscriber counts across their website and API. This extension uses axern.space's API (with permission) to get an estimated subscriber count of YouTube channels, then it displays them where the abbreviated counts would be.",
    "images": ["./images/ryts.png"],
    "links": [{ "link_url": "https://ryts.mgcounts.com", "link_title": "Install Extension" }, { "link_url": "https://github.com/returnyoutubesubscribers/returnyoutubesubscribers.github.io", "link_title": "View Source Code/Download" }],
    "active": true
  },
  {
    "name": "Bluesky Tracker",
    "description": "After Elon Musk bought Twitter back in October of 2022, he made a lot of perceived negative changes to the platform. This led many to move to the Bluesky platform. I saw this as an amazing opportunity to make a website that tracks the growth of the platform and its users. The website gets over 5,000 daily users according to Cloudflare and is well-known within the platform. In addition, I also made a bsky bot to track milestones of some of its users which has also grown dynamically. *The website is insanely slow for its initial load because I rely on free hosting for it.",
    "images": ["./images/bsky.png"],
    "links": [{ "link_url": "https://bsky-tracker.xyz", "link_title": "Visit Website" }],
    "active": true
  },
  {
    "name": "Terra",
    "description": "Terra was a little passion project of mine which ran from ~June 2024 - ~November 2024. It was an app which was released on both the App Store and Google Play Store. 'Terra aims to redefine social media by embracing the beauty of the world through promoting a unique perspective which excludes photos containing people to highlight the beauty in the rest of the world.' Unfortunately, the app was not as successful and its costs were too much so I had to discontinue it but it taught me a lot about app development and marketing.",
    "images": ["./images/terra.png"],
    "links": [{ "link_url": "https://terra.photos", "link_title": "Visit Website" }],
    "active": false
  },
  {
    "name": "The YouTube List",
    "description": "A friend by the name of ANTUBER suggested an idea of a list that tracks every single YouTube channel that it's able to find and displays them in a list. I thought it was a great idea so I created it. It was a huge success and was used by many people. At its peak, it had over 2 million different channels in its database. Unfortunately, it became slow due to constant searches and sorts as well as the bad hardware it was run on so it unfortunately had to shut down.",
    "images": ["./images/list.png"],
    "links": [{ "link_url": "https://web.archive.org/web/20230823184732/https://list.mgcounts.com/", "link_title": "Visit Archive" }, { "link_url": "https://github.com/mgcountss/The-YouTube-List", "link_title": "View Source Code/Download" }],
    "active": true
  },
  {
    "name": "MGCounts",
    "description": "MGCounts was my original website and one of the reasons I got into programming in the first place. It was a website that displayed the subscriber/follower counts of a variety of social media platforms. It was well-known in its niche and was used by many people. It was discontinued in 2022 because despite it being well-known, few actually used it.",
    "images": ["./images/mgcounts.png"],
    "links": [{ "link_url": "https://web.archive.org/web/20221004093813/https://mgcounts.com/", "link_title": "Visit Archive" }],
    "active": false
  },
  {
    "name": "Faking Your Sub Counts",
    "description": "Faking Your Sub Counts is a series of interactive streams that I do on my YouTube channel. The premise was that users would add their channel via live chat and from there they could use commands in chat such as '!upload', '!comment', etc to gain fake subscribers. It's a fairly well-known stream in the community and I made a live YouTube simulation website as well as a dashboard to complement it.",
    "images": ["./images/fysc.png"],
    "links": [{ "link_url": "https://www.youtube.com/watch?v=IPMd0zeD0hQ", "link_title": "FYSC Timelapse" }, { "link_url": "https://web.archive.org/web/20231225001023/https://fysc.mgcounts.com/", "link_title": "Visit Archive" }],
    "active": true
  },
  {
    "name": "Emoji Wars",
    "description": "Emoji Wars was the first interactive live stream that I ever saw. It was originally hosted on BattleTV back in 2019, this was before I knew how to code. Once I learned how to program decently, this of course was my first interactive live stream. You spam emojis in chat and it counts the most used emojis! Best of all, all the source code is available on GitHub!",
    "images": ["./images/emojiwars.png"],
    "links": [{ "link_url": "https://www.youtube.com/watch?v=zvEg9D0Ef40", "link_title": "Emoiji Wars Timelapse" }, { "link_url": "https://github.com/mgcountss/emoji-wars", "link_title": "View Source Code/Download" }],
    "active": true
  },
  {
    "name": "Vidre (VidShare)",
    "description": "I originally had the idea for a new YouTube back in 2020, I made the site using Awardspace in about an hour. It was all manual and channels/videos were submitted via a Google Form. Years later I realized that I could make it automatic and I did. It has been created and killed many times since then. At its peak, it had videos, custom thumbnails, top lists, analytics, live streaming, and more. In 2022 I officially changed the name from VidShare to Vidre. Soon however, it became inactive and I killed it.",
    "images": ["./images/vidre.png"],
    "links": [{ "link_url": "https://web.archive.org/web/20220630031417/https://vidre.net/", "link_title": "Visit Archive" }],
    "active": false
  },
  {
    "name": "MGBot (YouTube ChatBot)",
    "description": "When I first started watching 24/7 streams I saw that the main chatbots used were NightBot and Streamlab's. I thought they were cool so I created my own version of them. MGBot is a fully customizable YouTube ChatBot many features such as a currency system, counting, chat logs, moderation, giveaways, and more!",
    "images": ["./images/mgbot.png"],
    "links": [{ "link_url": "https://web.archive.org/web/20240322003355/https://chatbot.mgcounts.com/", "link_title": "Visit Archive" }],
    "active": false
  },
  {
    "name": "YABCounts",
    "description": "YABCounts was a little website (similar to MGCounts & BGTrack) which allowed you to track the subscriber/follower counts of a variety of social media platforms. Its crown jewel was the ability estimate the live subscriber count of YouTube channels (since they were abbreviated).",
    "images": ["./images/yab.png"],
    "links": [{ "link_url": "https://web.archive.org/web/20240416224300/https://yabcounts.com/", "link_title": "Visit Archive" }],
    "active": false
  },
  {
    "name": "Minecraft Bedrock Sub Counter",
    "description": "To my knowledge, this is the first ever Minecraft Bedrock sub counter. It displays the subscriber count (which can update live) and the profile picture!",
    "images": ["./images/minecraft.png"],
    "links": [{ "link_url": "https://www.youtube.com/watch?v=nmT3zv-Mnjg", "link_title": "Demo Video" }, { "link_url": "https://github.com/mgcountss/minecraft-bedrock-sub-counter", "link_title": "View Source Code/Download" }],
    "active": true
  },
  {
    "name": "BitView Counter",
    "description": "BitView was a semi-popular old-school YouTube clone. I created a counter for it that can display a channel's followers and as well as a video's view count with a few more stats.",
    "images": ["./images/bitview.png"],
    "links": [{ "link_url": "https://web.archive.org/web/20230702183019/https://bitview.mgcounts.com/stats?cid=SFMG", "link_title": "Visit Archive" }],
    "active": false
  },
  {
    "name": "BGTrack",
    "description": "BGTrack was a popular service which was used to track statistics for the Roblox *clone* Polytoria. I created a live counter/analytic tool which worked for Users, Games, Guilds, and Items. It was programmed for free for a user known as Electric. Eventually, it unfortunately shut down.",
    "images": ["./images/bgtrack.png"],
    "links": [{ "link_url": "https://web.archive.org/web/20230104031414/https://bgtrack.net/", "link_title": "Visit Archive" }],
    "active": false
  },
  {
    "name": "RockPaperScissors",
    "description": "A while ago I wanted to learn other programming languages so I decided to create a Rock Paper Scissors game in C#. Currently, it is very limited but has a UI and I am planning on eventually updating it someday.",
    "images": ["./images/rps.png"],
    "links": [{ "link_url": "https://github.com/mgcountss/RockPaperScissors", "link_title": "View Source Code/Download" }],
    "active": true
  },
  {
    "name": "Global Cookie Clicker",
    "description": "I love the game Cookie Clicker, I also love planning with other people. Unfortunately, there was no way to play Cookie Clicker with other people. So I created a website that allowed you to play Cookie Clicker with other people!",
    "images": ["./images/gcc.png"],
    "links": [{ "link_url": "https://www.youtube.com/watch?v=QR3yyrwK4u8", "link_title": "(Archived) Live Demo" }],
    "active": false
  },
  {
    "name": "ChatterCC",
    "description": "ChatterCC was a website that a friend and I conceptualized one night during our practice. In late 2021 we began working on programming it. It was a chat app (like Discord) but here all the chats (other than DMS) were global. Eventually, we stopped working on it and it was never finished.",
    "images": ["./images/chatter.png"],
    "links": [],
    "active": false
  },
  {
    "name": "#TeamSeas Bot",
    "description": "A simple Twitter bot I made to track the total and top donators to the #TeamSeas campaign by MrBeast. It was a fun little project and I learned a lot about Twitter bots.",
    "images": ["./images/teamseas.png"],
    "links": [{ "link_url": "https://x.com/TeamSeasBot", "link_title": "Visit the (inactive) bot!" }],
    "active": false
  },
  {
    "name": "YouTube Subscriber History",
    "description": "Making subscriber count history videos can be an extremely tedious task. So I a simple(ish) node.js program to automate the process!",
    "images": ["./images/history.png"],
    "links": [{ "link_url": "https://github.com/mgcountss/YouTube-Subscriber-History", "link_title": "View Source Code/Download" }],
    "active": false
  },
  {
    "name": "Real Life (LED) Sub Counter",
    "description": "After seeing a video of a real-life sub counter, I didn't think it would be very difficult to make one myself, so I did! It uses a Raspberry Pi 4 and 117 (~3 strings) LED WS8211 lights. I arranged the lights into a custom board and even programmed a web UI to control it!",
    "images": ["./images/led.png"],
    "links": [{ "link_url": "https://www.youtube.com/live/0VSuOBo1Dy8", "link_title": "View Live Stream Demo" }, { "link_url": "https://github.com/mgcountss/led-sub-count", "link_title": "View Source Code/Download" }],
    "active": true
  },
  {
    "name": "Loop Tracker",
    "description": "Loop Tracker was a simple program I made to track the stats on a Vine clone known as Loop. It did quite well until the Loop platform shutdown.",
    "images": ["./images/loop.png"],
    "links": [{ "link_url": "https://web.archive.org/web/20240416031509/https://loop.mgcounts.com/", "link_title": "Visit Archive" }],
    "active": false
  },
  {
    "name": "Election Tracker",
    "description": "For the 2024 elections, I made a bot to scrape data from a variety of sources and display it in a nice way. This was of course, made for the intention of allowing users to see the live vote counts, graphs of the votes, and which candidates were winning. In addition to the website, I also made a Discord bot which broadcasted live updates and a YouTube live stream.",
    "images": ["./images/election.png"],
    "links": [{ "link_url": "https://web.archive.org/web/20241105201938/https://election.mgcounts.com/", "link_title": "Visit Archive" }],
    "active": false
  },
  {
    "name": "Discord Server Tags",
    "description": "In May of 2025, Discord released a feature called 'tags.' I spotted this golden oppertunity and made a website as soon as I could to track the tags accross servers. It grew to the largest site of its kind surpassing the likes of even more well-known Discord-related sites.",
    "images": ["./images/tags.png"],
    "links": [{ "link_url": "https://tags.mgcounts.com/", "link_title": "Visit Site" }],
    "active": true
  },
  {
    "name": "Personal Finance Tracker",
    "description": "This advanced finance tracker keeps track of various aspects of one's financal state such as transactions, budgets, subscriptions, report generation, etc.",
    "images": ["./images/finance.png"],
    "links": [],
    "active": true
  },
  {
    "name": "70&Sunny",
    "description": "A Mother's day gift for my mom with the sole purpose of showing her warm weather near her. It was an app as well as a website. Enter your location and it displays nearby locations with the chosen weather.",
    "images": ["./images/sunny.png"],
    "links": [],
    "active": true
  },
  {
    "name": "#TeamWater Tracker",
    "description": "#TeamWater is a fundraiser by MrBeast with a goal to raise 40 million dollars to give clean water. This 24/7 live stream tracked its progress toward its goal.",
    "images": ["./images/teamwater.png"],
    "links": [{ "link_url": "https://www.youtube.com/watch?v=r7G3pY2Cb0c", "link_title": "Watch Live" }],
    "active": true
  },
]  

portfolio = portfolio.sort(item => { return item.active ? -1 : 1 })
