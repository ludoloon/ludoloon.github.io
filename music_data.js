/* EXAMPLE ENTRY
 * {
	"title": "Song Title",
	"url": "anchor-name",
	"blog": "",
	"summary": "Brief summary.",
	"embed": "https://www.youtube.com/embed/",
	"tags": ["3-4 mood tags", "3 genre tags", "3-4 game genres"],
	"stores":
		{"unity": "https://assetstore.unity.com/packages/slug/",
		"itch": "https://ludoloonstudio.itch.io/",
		"youtube": "",
		"bandcamp": "",
		"gamedevmarket": "",
		"godot": "",
		"newgrounds": "",
		"spotify": ""},
    },
*/

/* temporary place to put the data for the current music pack I'm work on 
const temp_tracks =
[

]
*/

const works_packs =
[
	{
        "title": "Groovy Platformer Music Pack",
		"date": new Date(2025, 8, 4),
		"url": "groovy-platformer-music-pack",
		"cover": "groovy-platformer-music-pack.webp",
        "summary": "Music pack inspired by the original 16-bit Sonic the Hedgehog style.",
		"embed": "https://www.youtube.com/embed/r12EWSRDxF4",
		"tags": ["Music Pack", "Groovy", "Funky", "Adventure", "Action", "Platformer", "Casual", "Exploration"],
		"details": 
			{"cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
        "stores":
			{"itch": "https://ludoloonstudio.itch.io/groovy-platformer-music-pack",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/groovy-platformer-music-pack",
			},
	},
	{
        "title": "Mind Games",
		"date": new Date(2022, 9, 4),
		"url": "mind-games",
		"cover": "mind-games.webp",
		"blog": "mind-games",
        "summary": "Jazzy, groovy music pack designed for puzzle & platformer games. ",
		"embed": "https://www.youtube.com/embed/videoseries?list=PLL06MmY4OQnZwpgJoRqxro9dDkZu1IsBZ",
		"tags": ["Music Pack", "Jazz", "Blues", "Chill", "Groovy", "Puzzle", "Platformer", "Casual", "Exploration"],
		"details": 
			{"cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
        "stores":
			{"unity": "https://assetstore.unity.com/packages/slug/234292",
			"itch": "https://ludoloonstudio.itch.io/mind-games",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/mind-games",
			"spotify": "https://open.spotify.com/album/6sPrNlKqCSjM6FENq9uaRN",
			},
	},
	{
        "title": "Roguelike Adventure Music Pack",
		"date": new Date(2022, 2, 22),
		"url": "roguelike-adventure",
		"cover": "roguelike-adventure.webp",
		"blog": "roguelike-adventure",
        "summary": "Music for all types of classic RPG & Action Adventure locations! Ready to go, easy to customize. ",
		"embed": "https://www.youtube.com/embed/videoseries?list=PLL06MmY4OQnbZhDoKYUFZCEu5WgvtxPIg",
		"tags": [ "Music Pack" ],
		"details": 
			{"cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
        "stores":
			{"unity": "https://assetstore.unity.com/packages/slug/216619",
			"itch": "https://ludoloonstudio.itch.io/roguelike-adventure-music-pack",
			"gamedevmarket": "https://www.gamedevmarket.net/asset/roguelike-adventure-music-pack/",
			"godot": "https://godotmarketplace.com/shop/roguelike-adventure-music-pack/",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/roguelike-adventure-music-pack"},
	},
]

const works_credits =
[
	{
		"title": "PathOptimizer",
		"date": new Date(2025, 5, 4),
		"frontpage": false,
		"url": "path-optimizer",
		"cover": "path-optimizer.webp",
        "summary": 'Draw one seamless path, conquer every tile, and become the ultimate PathOptimizer. Uses <a href="../music#puzzled-mind">Music from Mind Games</a>.',
		"tags": [ ],
        "link": "https://pathoptimizer.carrd.co/",
	},
	{
		"title": "Drone AI Demo",
		"date": new Date(2024, 12, 15),
		"frontpage": false,
		"url": "drone-ai-demo",
		"cover": "drone-ai-demo.webp",
        "summary": 'Showcase of an AI agent trained to pilot a drone through complex obstacle courses and complete designated missions. Uses <a href="../music#starting-line">Starting Line</a>.',
		"tags": [ ],
        "link": "https://true-bots.itch.io/drone-agent",
	},
	{
		"title": "Omakase (お任せ)",
		"date": new Date(2024, 10, 7),
		"frontpage": false,
		"url": "omakase",
		"cover": "omakase.webp",
        "summary": 'Omakase is a relaxing cooking and creation game. Uses my track <a href="../music#tabletop-jazz-cafe">Tabletop Jazz Cafe</a>.',
		"tags": [ ],
        "link": "https://store.steampowered.com/app/3259260/Omakase/?beta=0",
	},
	{
		"title": "Farm by Day, Fight by Night",
		"date": new Date(2024, 8, 12),
		"frontpage": false,
		"url": "farm-by-day-fight-by-night",
		"cover": "farm-by-day-fight-by-night.webp",
        "summary": 'Plant your crops. Defend your farm. Battle monsters and collect rare seeds in farm by day, fight by night!. Uses my track <a href="../music#on-the-farm">On The Farm</a>.',
		"tags": [ ],
        "link": "https://trident-dev-indie.itch.io/farm-by-day-fight-by-night",
	},
	{
		"title": "Closing at 2",
		"date": new Date(2023, 11, 8),
		"frontpage": false,
		"url": "closing-at-2",
		"cover": "closing-at-2.webp",
        "summary": 'Late night horrors of being a bartender. Amazing use of my track <a href="../music#tabletop-jazz-cafe">Tabletop Jazz Cafe</a>. Super creative vibe setting skills from <a href="https://natsrey.itch.io/">Natalie Reyes</a>.',
		"tags": [ ],
        "link": "https://natsrey.itch.io/closing-at-2",
	},
	{
		"title": "Skyline Surge",
		"date": new Date(2023, 7, 8),
		"frontpage": false,
		"url": "skyline-surge",
		"cover": "skyline-surge.webp",
        "summary": 'Another mobile racing game! Used my track <a href="../music#starting-line">Starting Line.</a>',
		"tags": [ ],
        "link": "https://play.google.com/store/apps/details?id=com.mellowfoxstudios.SkylineSurge",
	},
	{
		"title": "Formula Car Race 2023",
		"date": new Date(2023, 6, 8),
		"frontpage": false,
		"url": "fcr2023",
		"cover": "fcr2023.webp",
        "summary": 'Hit the track on the all-new FCR2023! Used my track <a href="../music#starting-line">Starting Line.</a>',
		"tags": [ ],
        "link": "https://play.google.com/store/apps/details?id=ro.danandreicojocaru.fcr2023&hl=en_US",
	},
	{
        "title": "Resoraki",
		"date": new Date(2023, 2, 23),
		"frontpage": false,
		"url": "resoraki",
		"cover": "resoraki.webp",
        "summary": 'Get behind the wheel of a toy car and race! Used my track <a href="../music#starting-line">Starting Line.</a>',
		"tags": [ ],
        "link": "https://store.steampowered.com/app/2303180/Resoraki_The_racing/",
	},
	{
        "title": "Speakeasy Tycoon",
		"date": new Date(2022, 6, 12),
		"frontpage": false,
		"url": "speakeasy-tycoon",
		"cover": "speakeasy-tycoon.webp",
        "summary": 'A game jam project about running speakeasies that used my track <a href="../music#tabletop-jazz-cafe">Tabletop Jazz Cafe.</a>',
		"tags": [ ],
        "link": "https://axelancer.itch.io/speakeasy-tycoon",
	},
	{
        "title": "Clean Cell",
		"date": new Date(2022, 5, 6),
		"frontpage": false,
		"url": "clean-cell",
		"cover": "clean-cell.webp",
        "summary": 'Clean Cell is a small hyper arcade game for Score Space Jam #19. My track <a href="../music#starting-line">Starting Line</a> was used.',
		"tags": [ ],
        "link": "https://klooonal.itch.io/clean-cell",
	},
]

const works_projects =
[
	//Wacky Workbench (Past) Remix
	{
		"title": "Wacky Workbench (Past) Remix",
		"date": new Date(2025, 3, 8),
		"url": "wacky-workbench-remix",
		"cover": "wacky-workbench-remix.webp",
		"summary": 'Made a remix to get hype for VGMcon 2025!',
		"embed": "https://www.youtube.com/embed/2f8vjmreMso",
		"tags": ["VGM", "Remix", "EDM", "Groovy", "Sonic"],
		"streaming":
			{"youtube": "https://www.youtube.com/watch?v=2f8vjmreMso",
			"newgrounds": "https://www.newgrounds.com/audio/listen/1416688",
			//"archive.org": "https://archive.org/details/the-eery-silence-of-dying-qhd",
			},
	},
	//Rice Lake Frolf Course Remaster
	{
		"title": "Rice Lake Frolf Course Remaster",
		"date": new Date(2024, 6, 23),
		"url": "rice-lake-frolf-course-remaster",
		"blog": "rice-lake-frolf-course-remaster",
		"cover": "rice-lake-frolf-course-remaster.webp",
		"summary": "Play on my hometown frolf course circa 2013! <br>Work in progress, but here's the prototype if you wanna try it out in its current form. <em>(<a href='/music/#brainstorm'>Trailer Music - Brainstorm</a>)</em>",
		"embed": "https://www.youtube.com/embed/zhd8xJ7nvao",
		"tags": ["Sports", "Casual", "Game", "Multiplayer", "Godot"],
		"stores":
			{
			"itch": "https://ludoloonstudio.itch.io/rice-lake-frolf-course-remaster",
			},
		"streaming":
			{"youtube": "https://youtu.be/zhd8xJ7nvao",
			//"archive.org": "https://archive.org/details/the-eery-silence-of-dying-qhd",
			//"youtube": "https://youtu.be/CRGwM00b1jA",
			//"newgrounds": "https://www.newgrounds.com/audio/listen/1260516",
			},
	},
	//LudoLoon Yacht Dice
	{
		"title": "LudoLoon Yacht Dice",
		"date": new Date(2024, 4, 31),
		"url": "yacht-dice",
		"blog": "yacht-dice",
		"cover": "yacht-dice.webp",
		"summary": 'Got back into game development using Godot and created a clone of the classic dice game!',
		"embed": "https://www.youtube.com/embed/UH_1O8NOiS4",
		"tags": ["Dice", "Casual", "Game", "Multiplayer", "Godot"],
		"stores":
			{
			"itch": "https://ludoloonstudio.itch.io/yacht-dice",
			},
		"streaming":
			{"youtube": "https://youtu.be/UH_1O8NOiS4",
			//"archive.org": "https://archive.org/details/the-eery-silence-of-dying-qhd",
			//"youtube": "https://youtu.be/CRGwM00b1jA",
			//"newgrounds": "https://www.newgrounds.com/audio/listen/1260516",
			},
	},
	//PS2 Graveyards
	{
		"title": "PS2 Graveyards",
		"date": new Date(2024, 3, 16),
		"url": "ps2-graveyards",
		"blog": "ps2-graveyards",
		"cover": "ps2-graveyards.webp",
		"summary": 'An album I created as an ode to the bygone era of spooky, nostalgic Playstation 2 graveyards.',
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=2584251597/size=large/bgcol=333333/linkcol=2edb35/artwork=small/transparent=true/",
		"tags": ["Techno", "Ambient", "Eery", "Spooky", "Apocalyptic", "Nostalgic"],
		/*"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/222465",
			"unity": "https://assetstore.unity.com/packages/slug/234292",
			"itch": "https://ludoloonstudio.itch.io/puzzled-mind",
			"itch": "https://ludoloonstudio.itch.io/mind-games",
			},*/
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/ps2-graveyards",
			"spotify": "https://open.spotify.com/intl-es/album/4cy3Dh3S5AOQO6TIqXdrnE",
			//"archive.org": "https://archive.org/details/the-eery-silence-of-dying-qhd",
			//"youtube": "https://youtu.be/CRGwM00b1jA",
			//"newgrounds": "https://www.newgrounds.com/audio/listen/1260516",
			},
	},
	//Ludo Air - The Eery Silence of Dying
	{
		"title": "The Eery Silence of Dying",
		"date": new Date(2023, 10, 3),
		"url": "the-eery-silence-of-dying",
		"cover": "the-eery-silence-of-dying.webp",
		"summary": 'On June 14, 2023, Minneapolis was covered in smoke from Canadian wildfires. I recorded this music video with flight sim using live time & weather, which was later submitted to <a href="https://screamitoffscreen.com">Scream It Off Screen</a>.',
		"blog": "ludoair/minneapolis-canadian-smoke/",
		"embed": "https://www.youtube.com/embed/CRGwM00b1jA",
		"tags": ["Ambient", "Drone", "Eery", "Spooky", "Apocalyptic", "Cinematic"],
		"details": 
			{"bpm": 120,
			 "cost": "Free",
			 "loop": "Loopable",
			 "stems": "No-Stems"},
		/*"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/222465",
			"unity": "https://assetstore.unity.com/packages/slug/234292",
			"itch": "https://ludoloonstudio.itch.io/puzzled-mind",
			"itch": "https://ludoloonstudio.itch.io/mind-games",
			},*/
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/track/the-eery-silence-of-dying",
			"archive.org": "https://archive.org/details/the-eery-silence-of-dying-qhd",
			"youtube": "https://youtu.be/CRGwM00b1jA",
			"newgrounds": "https://www.newgrounds.com/audio/listen/1260516",
			},
	},
	//Ludo Air - Hometown Nostalgia
	{
		"title": "Hometown Nostalgia",
		"date": new Date(2023, 4, 4),
		"url": "hometown-nostalgia",
		"cover": "hometown-nostalgia.webp",
		"summary": "A spooky trip back home in the fog on flight sim with some video game music vibes.",
		"blog": "ludoair/spooky-home-tour/",
		"embed": "https://www.youtube.com/embed/Wt3SJZtzJ44",
		"tags": ["Chill", "Pop", "Groovy", "Simulation", "Casual", "Exploration", "Nostalgic"],
		"details": 
			{"bpm": 120,
			 "cost": "Free",
			 "loop": "Loopable",
			 "stems": "No-Stems"},
		/*"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/222465",
			"unity": "https://assetstore.unity.com/packages/slug/234292",
			"itch": "https://ludoloonstudio.itch.io/puzzled-mind",
			"itch": "https://ludoloonstudio.itch.io/mind-games",
			},*/
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/track/hometown-nostalgia",
			"archive.org": "https://archive.org/details/hometown-nostalgia",
			"youtube": "https://youtu.be/Wt3SJZtzJ44",
			"newgrounds": "https://www.newgrounds.com/audio/listen/1212024",
			},
	},
	{
        "title": "Bastard Tower",
		"date": new Date(2023,1,19),
		"url": "bastard-tower",
		"cover": "bastard-tower.webp",
		"blog": "jam-bastard-tower",
        "summary": 'I made music for <a href="https://infinitegamesds.itch.io/bastard-tower" target="_blank">Bastard Tower</a> as part of the <a href="https://itch.io/jam/brackeys-9" target="_blank">Brackeys Jam 2023.1</a>',
		"embed": "https://www.youtube.com/embed/videoseries?list=PLL06MmY4OQnYtvftCVq8shyXwRQ2x7dPf",
		"tags": [ "Game Jam", "Custom Music", "Project" ],
		"streaming":
			{"itch": "https://infinitegamesds.itch.io/bastard-tower",
			"youtube": "https://www.youtube.com/watch?v=iQwCwBoPAns&list=PLL06MmY4OQnYtvftCVq8shyXwRQ2x7dPf&index=1",
			"newgrounds": "https://www.newgrounds.com/playlists/view/b98e3ee40c8725cdb35f76b57d5b641a",
			},
	},
	{
        "title": "Giggly's Dare",
		"date": new Date(2022, 6, 19),
		"url": "gigglys-dare",
		"cover": "gigglys-dare.webp",
		"blog": "jam-gigglys-dare",
        "summary": 'I made music for this game as part of the <a href="https://itch.io/jam/gmtk-jam-2022" target="_blank">Game Makers Toolkit Jam.</a>',
		"embed": "https://www.youtube.com/embed/videoseries?list=PLL06MmY4OQnYiPEjGcOkcVH-INNMR0h5S",
		"tags": [ "Game Jam", "Custom Music", "Project" ],
		"streaming":
			{"itch": "https://infinitegamesds.itch.io/gigglys-dare",
			"youtube": "https://www.youtube.com/watch?v=z4a4quZ7xGE&list=PLL06MmY4OQnYiPEjGcOkcVH-INNMR0h5S&index=1",
			},
	},
	{
        "title": "Flight Sim Portraits",
		"date": new Date(2022, 0, 20),
		"url": "flight-sim-portraits",
		"cover": "flight-sim-portraits.webp",
		"blog": "flight-sim-portraits",
        "summary": "Dedicated to honing in on matching music to visual media.",
		"embed": "https://www.youtube.com/embed/videoseries?list=PLL06MmY4OQnZJtHTVJ4IlCetgx6wgS_b6",
		"tags": [ ],
		"streaming":
			{"youtube": "https://www.youtube.com/watch?v=C9JiT63OVHw&list=PLL06MmY4OQnZJtHTVJ4IlCetgx6wgS_b6",
			},
	},
]

// Current idea: sort by variables with Free & Paid as separate tables
const music_JSON = 
[
//GROOVY PLATFORMER MUSIC PACK
//Boss Battle
	{
		"title": "Boss Battle",
		"date": new Date(2025, 8, 4),
		"url": "groovy-platformer-boss-battle",
		"cover": "groovy-platformer-music-pack.webp",
		"frontpage": false,
        "summary": "Music pack inspired by the original 16-bit Sonic the Hedgehog style.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=4231033004/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=2904492706/transparent=true/",
		"tags": ["Groovy", "Funky", "Adventure", "Action", "Platformer", "Casual", "Exploration"],
		"details": 
			{"bpm": 120,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"itch": "https://ludoloonstudio.itch.io/groovy-platformer-music-pack",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/groovy-platformer-music-pack",
			},
	},
//Final Zone
	{
		"title": "Final Zone",
		"date": new Date(2025, 8, 4),
		"url": "groovy-platformer-final-zone",
		"cover": "groovy-platformer-music-pack.webp",
		"frontpage": false,
        "summary": "Music pack inspired by the original 16-bit Sonic the Hedgehog style.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=4231033004/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=1098956354/transparent=true/",
		"tags": ["Groovy", "Funky", "Adventure", "Action", "Platformer", "Casual", "Exploration"],
		"details": 
			{"bpm": 120,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"itch": "https://ludoloonstudio.itch.io/groovy-platformer-music-pack",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/groovy-platformer-music-pack",
			},
	},
//Special Stage
	{
		"title": "Special Stage",
		"date": new Date(2025, 8, 4),
		"url": "groovy-platformer-special-stage",
		"cover": "groovy-platformer-music-pack.webp",
		"frontpage": false,
        "summary": "Music pack inspired by the original 16-bit Sonic the Hedgehog style.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=4231033004/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=1835085938/transparent=true/",
		"tags": ["Groovy", "Funky", "Adventure", "Action", "Platformer", "Casual", "Exploration"],
		"details": 
			{"bpm": 130,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"itch": "https://ludoloonstudio.itch.io/groovy-platformer-music-pack",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/groovy-platformer-music-pack",
			},
	},
//Industry
	{
		"title": "Industry",
		"date": new Date(2025, 8, 4),
		"url": "groovy-platformer-industry",
		"cover": "groovy-platformer-music-pack.webp",
		"frontpage": false,
        "summary": "Music pack inspired by the original 16-bit Sonic the Hedgehog style.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=4231033004/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=1068210308/transparent=true/",
		"tags": ["Groovy", "Funky", "Adventure", "Action", "Platformer", "Casual", "Exploration"],
		"details": 
			{"bpm": 120,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"itch": "https://ludoloonstudio.itch.io/groovy-platformer-music-pack",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/groovy-platformer-music-pack",
			},
	},
//Night Sky
	{
		"title": "Night Sky",
		"date": new Date(2025, 8, 4),
		"url": "groovy-platformer-night-sky",
		"cover": "groovy-platformer-music-pack.webp",
		"frontpage": false,
        "summary": "Music pack inspired by the original 16-bit Sonic the Hedgehog style.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=4231033004/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=1779547841/transparent=true/",
		"tags": ["Groovy", "Funky", "Adventure", "Action", "Platformer", "Casual", "Exploration"],
		"details": 
			{"bpm": 126,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"itch": "https://ludoloonstudio.itch.io/groovy-platformer-music-pack",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/groovy-platformer-music-pack",
			},
	},
//Exploring
	{
		"title": "Exploring",
		"date": new Date(2025, 8, 4),
		"url": "groovy-platformer-exploring",
		"cover": "groovy-platformer-music-pack.webp",
		"frontpage": false,
        "summary": "Music pack inspired by the original 16-bit Sonic the Hedgehog style.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=4231033004/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=3186569011/transparent=true/",
		"tags": ["Groovy", "Funky", "Adventure", "Action", "Platformer", "Casual", "Exploration"],
		"details": 
			{"bpm": 124,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"itch": "https://ludoloonstudio.itch.io/groovy-platformer-music-pack",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/groovy-platformer-music-pack",
			},
	},
//Swingtown
	{
		"title": "Swingtown",
		"date": new Date(2025, 8, 4),
		"url": "groovy-platformer-swingtown",
		"cover": "groovy-platformer-music-pack.webp",
		"frontpage": false,
        "summary": "Music pack inspired by the original 16-bit Sonic the Hedgehog style.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=4231033004/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=3746934119/transparent=true/",
		"tags": ["Groovy", "Funky", "Adventure", "Action", "Platformer", "Casual", "Exploration"],
		"details": 
			{"bpm": 100,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"itch": "https://ludoloonstudio.itch.io/groovy-platformer-music-pack",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/groovy-platformer-music-pack",
			},
	},
//Underground
	{
		"title": "Underground",
		"date": new Date(2025, 8, 4),
		"url": "groovy-platformer-underground",
		"cover": "groovy-platformer-music-pack.webp",
		"frontpage": false,
        "summary": "Music pack inspired by the original 16-bit Sonic the Hedgehog style.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=4231033004/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=2130182206/transparent=true/",
		"tags": ["Groovy", "Funky", "Adventure", "Action", "Platformer", "Casual", "Exploration"],
		"details": 
			{"bpm": 134,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"itch": "https://ludoloonstudio.itch.io/groovy-platformer-music-pack",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/groovy-platformer-music-pack",
			},
	},
//Verdant Valley
	{
		"title": "Verdant Valley",
		"date": new Date(2025, 8, 4),
		"url": "groovy-platformer-verdant-valley",
		"cover": "groovy-platformer-music-pack.webp",
		"frontpage": false,
        "summary": "Music pack inspired by the original 16-bit Sonic the Hedgehog style.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=4231033004/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=477623225/transparent=true/",
		"tags": ["Groovy", "Funky", "Adventure", "Action", "Platformer", "Casual", "Exploration"],
		"details": 
			{"bpm": 150,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"itch": "https://ludoloonstudio.itch.io/groovy-platformer-music-pack",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/groovy-platformer-music-pack",
			},
	},
//Title
	{
		"title": "Title",
		"date": new Date(2025, 8, 4),
		"url": "groovy-platformer-title",
		"cover": "groovy-platformer-music-pack.webp",
		"frontpage": false,
        "summary": "Music pack inspired by the original 16-bit Sonic the Hedgehog style.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=4231033004/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=202486268/transparent=true/",
		"tags": ["Groovy", "Funky", "Adventure", "Action", "Platformer", "Casual", "Exploration"],
		"details": 
			{"bpm": 130,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"itch": "https://ludoloonstudio.itch.io/groovy-platformer-music-pack",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/groovy-platformer-music-pack",
			},
	},
//Getaway Driver
	{
        "title": "Getaway Driver",
		"date": new Date(2025, 2, 8),
		"url": "getaway-driver",
		"cover": "getaway-driver.webp",
        "summary": "Hit the gas man!",
		"embed": "https://www.youtube.com/embed/-pchfPcfPSA",
		"tags": ["Action", "Blues", "Casual", "Driving", "Exploration", "Rock", "Retro"],
		"details": 
			{"bpm": 105,
			 "cost": "Free",
			 "loop": "Loopable",
			 "stems": "No-Stems"},
		"stores":
			{"itch": "https://ludoloonstudio.itch.io/getaway-driver-free-music"
			},
		"streaming":
			{"youtube": "https://www.youtube.com/watch?v=-pchfPcfPSA",
			"newgrounds": "https://www.newgrounds.com/audio/listen/project/6505026",
			},
	},
//Smooth Night
	{
        "title": "Smooth Night",
		"date": new Date(2025, 1, 27),
		"url": "smooth-night",
		"cover": "smooth-night.webp",
        "summary": "Goin' out on the town for date night.",
		"embed": "https://www.youtube.com/embed/pHshL826roY",
		"tags": ["Calm", "Chill", "Casual", "Groovy", "Jazz", "Moody", "Relaxing", "Smooth", "Visual Novel"],
		"details": 
			{"bpm": 115,
			 "cost": "Free",
			 "loop": "Loopable",
			 "stems": "No-Stems"},
		"stores":
			{"itch": "https://ludoloonstudio.itch.io/smooth-night-free-music"
			},
		"streaming":
			{"youtube": "https://www.youtube.com/watch?v=pHshL826roY",
			"newgrounds": "https://www.newgrounds.com/audio/listen/project/6458415",
			},
	},
//Happy Wheels
	{
        "title": "Happy Wheels",
		"date": new Date(2025, 1, 20),
		"url": "happy-wheels",
		"cover": "happy-wheels.webp",
		"frontpage": false,
        "summary": "Someone should really supervise these middle schoolers lol",
		"embed": "https://www.youtube.com/embed/kLPMZPBwLh4",
		"tags": ["Action", "Rock", "Energetic", "Fast", "Hard", "Sports", "Upbeat"],
		"details": 
			{"bpm": 120,
			 "cost": "Free",
			 "loop": "Loopable",
			 "stems": "No-Stems"},
		"stores":
			{"itch": "https://ludoloonstudio.itch.io/happy-wheels-free-music"
			},
		"streaming":
			{"youtube": "https://www.youtube.com/watch?v=kLPMZPBwLh4",
			"newgrounds": "https://www.newgrounds.com/audio/listen/1402022",
			},
	},
//Lo-Fi Horror
	{
        "title": "Lo-fi Horror",
		"date": new Date(2025, 1, 11),
		"url": "lo-fi-horror",
		"cover": "lo-fi-horror.webp",
        "summary": "Let the static guide you.",
		"embed": "https://www.youtube.com/embed/z0XzMUw3tG8",
		"tags": ["Ambient", "Atmospheric", "Creepy", "Dark", "Moody", "Mysterious", "Spooky", "Survival", "Suspense"],
		"details": 
			{"bpm": 75,
			 "cost": "Free",
			 "loop": "Loopable",
			 "stems": "No-Stems"},
		"stores":
			{"itch": "https://ludoloonstudio.itch.io/lo-fi-horror-free-music"
			},
		"streaming":
			{"youtube": "https://www.youtube.com/watch?v=z0XzMUw3tG8",
			"newgrounds": "https://www.newgrounds.com/audio/listen/1400413",
			},
	},
//Solitaire
	{
        "title": "Solitaire",
		"date": new Date(2025, 1, 6),
		"url": "solitaire",
		"cover": "solitaire.webp",
        "summary": "Groovin' by yourself ain't so bad.",
		"embed": "https://www.youtube.com/embed/tVNcFsNMvis",
		"tags": ["Groovy", "Casual", "Chill", "Board Game", "Downtempo", "Calm", "Moody", "Smooth", "Relaxing"],
		"details": 
			{"bpm": 74,
			 "cost": "Free",
			 "loop": "Loopable",
			 "stems": "No-Stems"},
		"stores":
			{"itch": "https://ludoloonstudio.itch.io/solitaire-free-music"
			},
		"streaming":
			{"youtube": "https://www.youtube.com/watch?v=tVNcFsNMvis",
			"newgrounds": "https://www.newgrounds.com/audio/listen/1399017",
			},
	},
//16-bit Fishing
	{
        "title": "16-bit Fishing",
		"date": new Date(2025, 1, 1),
		"url": "16-bit-fishing",
		"cover": "16-bit-fishing.webp",
        "summary": "Ride around the lake while vibin' out to some classic tunes. If the fish don't bite at least the bass will.",
		"embed": "https://www.youtube.com/embed/zhaZ0z6hOzo",
		"tags": ["16-bit", "Exploration", "Chill", "Fishing", "Groovy", "Casual", "Sports", "Retro"],
		"details": 
			{"bpm": 85,
			 "cost": "Free",
			 "loop": "Loopable",
			 "stems": "No-Stems"},
		"stores":
			{"itch": "https://ludoloonstudio.itch.io/16-bit-fishing"
			},
		"streaming":
			{"youtube": "https://www.youtube.com/watch?v=zhaZ0z6hOzo",
			"newgrounds": "https://www.newgrounds.com/audio/listen/1397693",
			},
	},
// MIND GAMES MUSIC PACK
	{
        "title": "Puzzled Mind",
		"date": new Date(2022, 4, 17),
		"url": "puzzled-mind",
		"cover": "mind-games.webp",
		"blog": "mind-games",
        "summary": "Moody music for solving a puzzle.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=3378943327/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=4094312774/transparent=true/",
		"tags": ["Chill", "Downtempo", "Groovy", "Puzzle", "Simulation", "Casual", "Exploration", "Sci-Fi"],
		"details": 
			{"bpm": 87,
			 "cost": "Free",
			 "loop": "Loopable",
			 "stems": "No-Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/222465",
			"unity": "https://assetstore.unity.com/packages/slug/234292",
			"itch": "https://ludoloonstudio.itch.io/puzzled-mind",
			"itch": "https://ludoloonstudio.itch.io/mind-games",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/mind-games",
			"archive.org": "https://archive.org/details/puzzled-mind",
			"youtube": "https://youtu.be/iaoRYHZfWFQ",
			"youtube": "https://youtu.be/fVPSM9ACMw4",
			"newgrounds": "https://www.newgrounds.com/audio/listen/1138191",
			"spotify": "https://open.spotify.com/track/7iZ0txTd7d5xpTguKsnP9C?si=467238ba301f4bff",
			},
	},
	{
		"title": "Brainstorm",
		"date": new Date(2022, 9, 4),
		"frontpage": false,
		"url": "brainstorm",
		"cover": "mind-games.webp",
		"blog": "mind-games",
		"summary": "Bluesy, Jazz infused Drum & Bass goodness for thinking to.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=3378943327/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=3903993827/transparent=true/",
		"tags": ["Drum & Bass", "Groovy", "Blues", "Driving", "Action", "Jazz", "Puzzle", "Racing", "Smooth", "Upbeat"],
		"details": 
			{"bpm": 180,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/234292",
			"itch": "https://ludoloonstudio.itch.io/mind-games",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/mind-games",
			"youtube": "https://youtu.be/R_YjOFqAm_E",
			"spotify": "https://open.spotify.com/track/53UmWN6SUMQ5pE7F4EiaxR?si=1ce4b8f12866408a",
			},
	},
	{
		"title": "Faulty Memory",
		"date": new Date(2022, 9, 4),
		"frontpage": false,
		"url": "faulty-memory",
		"cover": "mind-games.webp",
		"blog": "mind-games",
		"summary": "Jazzy breakbeats for trying to remember what you don't know.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=3378943327/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=4288280204/transparent=true/",
		"tags": ["Blues", "Jazz", "Casual", "Chill", "Groovy", "Puzzle", "Rhythm", "Moody", "Breakbeat"],
		"details": 
			{"bpm": 93,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/234292",
			"itch": "https://ludoloonstudio.itch.io/mind-games",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/mind-games",
			"youtube": "https://youtu.be/0RGTlupk3ys",
			"spotify": "https://open.spotify.com/track/0WbhLFu4RhittuUNuLG9Gr?si=51e5176eb243403e",
			},
	},
	{
		"title": "Funky Feeling",
		"date": new Date(2022, 9, 4),
		"frontpage": false,
		"url": "funky-feeling",
		"cover": "mind-games.webp",
		"blog": "mind-games",
		"summary": "Some smooth upbeat dance music with a funky lead synth.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=3378943327/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=480806541/transparent=true/",
		"tags": ["Action", "Dance", "Driving", "Energetic", "Groovy", "Jazz", "Moody", "Rhythm", "Smooth", "Upbeat"],
		"details": 
			{"bpm": 120,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/234292",
			"itch": "https://ludoloonstudio.itch.io/mind-games",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/mind-games",
			"youtube": "https://youtu.be/C1Lf1_XmgIA",
			"spotify": "https://open.spotify.com/track/3cR4VdZ9LDOsqlX272LyDg?si=660268ce74794abd",
			},
	},
	{
		"title": "Meditation",
		"date": new Date(2022, 9, 4),
		"frontpage": false,
		"url": "meditation",
		"cover": "mind-games.webp",
		"blog": "mind-games",
		"summary": "A righteous uplifting track that ascends you into a higher state.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=3378943327/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=1500786441/transparent=true/",
		"tags": ["Ambient", "Calm", "Chill", "Downtempo", "Exploration", "Groovy", "Puzzle", "Relaxing", "Uplifting"],
		"details": 
			{"bpm": 87,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/234292",
			"itch": "https://ludoloonstudio.itch.io/mind-games",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/mind-games",
			"youtube": "https://youtu.be/w8cEYGg3CvU",
			"spotify": "https://open.spotify.com/track/1ufEm37TPYJgnDrVkSz9jh?si=4ac37c702ee6451c",
			},
	},
	{
		"title": "Sneaky Thoughts",
		"date": new Date(2022, 9, 4),
		"frontpage": false,
		"url": "sneaky-thoughts",
		"cover": "mind-games.webp",
		"blog": "mind-games",
		"summary": "Deciding how to take the last cookie from the jar without tripping the alarms...",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=3378943327/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=118856529/transparent=true/",
		"tags": ["Blues", "Downtempo", "Exploration", "Groovy", "Jazz", "Mysterious", "Puzzle", "Smooth", "Suspense"],
		"details": 
			{"bpm": 87,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/234292",
			"itch": "https://ludoloonstudio.itch.io/mind-games",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/mind-games",
			"youtube": "https://youtu.be/iUSMIGsK3ko",
			"spotify": "https://open.spotify.com/track/0gS7QPO5j5EkVd4lxmBdZP?si=ad688e140a77473f",
			},
	},
	{
		"title": "Hazy Mood",
		"date": new Date(2022, 9, 4),
		"frontpage": false,
		"url": "hazy-mood",
		"cover": "mind-games.webp",
		"blog": "mind-games",
		"summary": "A moody track for a cloudy, hazy place that leaves you uncertain.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=3378943327/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=1864266772/transparent=true/",
		"tags": ["Ambient", "Blues", "Calm", "Dark", "Downtempo", "Exploration", "Groovy", "Moody", "Mysterious", "Puzzle", "Rhythm"],
		"details": 
			{"bpm": 87,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/234292",
			"itch": "https://ludoloonstudio.itch.io/mind-games",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/mind-games",
			"youtube": "https://youtu.be/vlbhNgqM8V4",
			"spotify": "https://open.spotify.com/track/50pFdBVkUlQ6KtvjZzxNmM?si=2caf4b5063544e23",
			},
	},
	{
		"title": "Clear Headed",
		"date": new Date(2022, 9, 4),
		"frontpage": false,
		"url": "clear-headed",
		"cover": "mind-games.webp",
		"blog": "mind-games",
		"summary": "Like a lo-fi hip-hop beat to study to, but double speed.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=3378943327/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=426614446/transparent=true/",
		"tags": ["Drum & Bass", "Action", "Ambient", "Blues", "Chill", "Driving", "Puzzle", "Racing", "Rhythm", "Smooth"],
		"details": 
			{"bpm": 180,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/234292",
			"itch": "https://ludoloonstudio.itch.io/mind-games",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/mind-games",
			"youtube": "https://youtu.be/wyrLZKva7Rg",
			"spotify": "https://open.spotify.com/track/5Y3coIhy74DS00mDP3NJS9?si=0db9e8bdf5a64172",
			},
	},
	{
		"title": "Dream",
		"date": new Date(2022, 9, 4),
		"frontpage": false,
		"url": "dream",
		"cover": "mind-games.webp",
		"blog": "mind-games",
		"summary": "Imagine the camp theme from psychonauts, but more upbeat and trippier.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=3378943327/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=1465458886/transparent=true/",
		"tags": ["Adventure", "Ambient", "Calm", "Casual", "Exploration", "Fantasy", "Puzzle", "Relaxing", "Sci-Fi", "Upbeat"],
		"details": 
			{"bpm": 90,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/234292",
			"itch": "https://ludoloonstudio.itch.io/mind-games",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/mind-games",
			"youtube": "https://youtu.be/9qoYoi6_KHk",
			"spotify": "https://open.spotify.com/track/5pF0o1tOYn3MltZ7DcPTaf?si=f7b46ce57e2e4d07",
			},
	},
	{
		"title": "Wandering Rumination",
		"date": new Date(2022, 9, 4),
		"frontpage": false,
		"url": "wandering-rumination",
		"cover": "mind-games.webp",
		"blog": "mind-games",
		"summary": "Hip-hop beats holding a torch walking down the haunted hallway of improv jamming.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=3378943327/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=3357688258/transparent=true/",
		"tags": ["Breakbeat", "Action", "Adventure", "Blues", "Dark", "Exploration", "Groovy", "Jazz", "Moody", "Puzzle"],
		"details": 
			{"bpm": 93,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/234292",
			"itch": "https://ludoloonstudio.itch.io/mind-games",
			},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/mind-games",
			"youtube": "https://youtu.be/kx6B6RItgBM",
			"spotify": "https://open.spotify.com/track/44Ycml2RzJWbb0wcwODZ7o?si=9589b3bcd83c41e0",
			},
	},
// --- END OF MIND GAME MUSIC PACK ---
	{
        "title": "Tabletop Jazz Cafe",
		"date": new Date(2022, 5, 7),
		"url": "tabletop-jazz-cafe",
		"cover": "tabletop-jazz-cafe.webp",
        "summary": "Chill at a cafe, drink coffee and play games! Perfect for any situaiton that needs a jazz vibe.",
		"embed": "https://www.youtube.com/embed/CRv4Qs0vwTA",
		"tags": [ "Relaxing", "Smooth", "Chill", "Cute", "Jazz", "Visual Novel", "RPG", "Board Game", "Casual"],
		"details": 
			{"bpm": 65,
			 "cost": "Free",
			 "loop": "Loopable",
			 "stems": "No-Stems"},
        "stores":
			{"unity": "https://assetstore.unity.com/packages/slug/224462",
			"itch": "https://ludoloonstudio.itch.io/tabletop-jazz-cafe"},
		"streaming":
			{"archive.org": "https://archive.org/details/tabletop-jazz-cafe",
			"youtube": "https://www.youtube.com/watch?v=CRv4Qs0vwTA",
			"newgrounds": "https://www.newgrounds.com/audio/listen/1141271",
			},
	},
	{
        "title": "Starting Line",
		"date": new Date(2022, 4, 31),
		"url": "starting-line",
		"cover": "starting-line.webp",
        "summary": "High-speed racing music heavily inspired by classic games like R4 and Gran Turismo.",
		"embed": "https://www.youtube.com/embed/LaXHIgOH9cE",
		"tags": ["Drum & Bass", "Energetic", "Upbeat", "Driving", "Fast", "Racing", "Simulation", "Action", "Rhythm", "Retro"],
		"details": 
			{"bpm": 140,
			 "cost": "Free",
			 "loop": "Loopable",
			 "stems": "No-Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/223471",
			"itch": "https://ludoloonstudio.itch.io/starting-line"},
		"streaming":
			{"archive.org": "https://archive.org/details/starting-line",
			"youtube": "https://youtu.be/LaXHIgOH9cE",
			"newgrounds": "https://www.newgrounds.com/audio/listen/1139719"},
	},
	{
        "title": "Stuck",
		"date": new Date(2022, 4, 24),
		"frontpage": false,
		"url": "stuck",
		"cover": "stuck.webp",
        "summary": "You must leave but you're stuck.",
		"embed": "https://www.youtube.com/embed/D5oAisdVEW4",
		"tags": ["Creepy", "Dark", "Atmospheric", "Exploration", "Survival", "Horror", "Spooky"],
		"details": 
			{"bpm": 120,
			 "cost": "Free",
			 "loop": "Loopable",
			 "stems": "Stems"},        
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/223471",
			"itch": "https://ludoloonstudio.itch.io/stuck-free-music"},
		"streaming":
			{"archive.org": "https://archive.org/details/stuck_202208",
			"youtube": "https://youtu.be/D5oAisdVEW4",
			"newgrounds": "https://www.newgrounds.com/audio/listen/1138613"},
	},
	{
        "title": "On the Farm",
		"date": new Date(2022, 4, 10),
		"url": "on-the-farm",
		"cover": "on-the-farm.webp",
        "summary": "Perfect for chorin' around the farm in the sun!",
		"embed": "https://www.youtube.com/embed/0ZP9I0KOp7M",
		"tags": ["Cute", "Country", "Farming", "Western", "Adventure", "RPG", "Simulation", "Visual Novel", "Exploration"],
		"details": 
			{"bpm": 83,
			 "cost": "Free",
			 "loop": "Loopable",
			 "stems": "No-Stems"},        
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/221746",
			"itch": "https://ludoloonstudio.itch.io/on-the-farm"},
		"streaming":
			{"archive.org": "https://archive.org/details/on-the-farm",
			"youtube": "https://youtu.be/0ZP9I0KOp7M",
			"newgrounds": "https://www.newgrounds.com/audio/listen/1137021"},
	},
/* --- ROGUELIKE ADVENTURE MUSIC PACK --- */
	{
		"title": "Castle",
		"date": new Date(2022, 2, 22),
		"frontpage": false,
		"url": "roguelike-adventure-castle",
		"cover": "roguelike-adventure.webp",
		"blog": "roguelike-adventure",
		"summary": "Track from the Roguelike Adventure Music Pack. Click title link for more.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=1675597268/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=1106935133/transparent=true/",
		"tags": ["Medieval", "Dark", "Organ", "Epic", "Exploration", "Adventure", "Action", "World"],
		"details": 
			{"bpm": 75,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/216619",
		"itch": "https://ludoloonstudio.itch.io/roguelike-adventure-music-pack",
		"gamedevmarket": "https://www.gamedevmarket.net/asset/roguelike-adventure-music-pack/",
		"godot": "https://godotmarketplace.com/shop/roguelike-adventure-music-pack/"},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/roguelike-adventure-music-pack"},
	},
	{
		"title": "Cave",
		"date": new Date(2022, 2, 22),
		"frontpage": false,
		"url": "roguelike-adventure-cave",
		"cover": "roguelike-adventure.webp",
		"blog": "roguelike-adventure",
		"summary": "Track from the Roguelike Adventure Music Pack. Click title link for more.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=1675597268/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=1512431212/transparent=true/",
		"tags": ["Atmospheric", "Dark", "Calm", "Relaxing", "Ambient", "World", "Casual"],
		"details": 
			{"bpm": 60,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/216619",
      "itch": "https://ludoloonstudio.itch.io/roguelike-adventure-music-pack",
      "gamedevmarket": "https://www.gamedevmarket.net/asset/roguelike-adventure-music-pack/",
      "godot": "https://godotmarketplace.com/shop/roguelike-adventure-music-pack/"},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/roguelike-adventure-music-pack"},
	},
	{
		"title": "Desert",
		"date": new Date(2022, 2, 22),
		"frontpage": false,
		"url": "roguelike-adventure-desert",
		"cover": "roguelike-adventure.webp",
		"blog": "roguelike-adventure",
		"summary": "Track from the Roguelike Adventure Music Pack. Click title link for more.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=1675597268/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=3482232275/transparent=true/",
		"tags": ["Adventure", "Upbeat", "Exploration", "RPG", "Fantasy", "World", "Casual"],
		"details": 
			{"bpm": 75,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/216619",
		"itch": "https://ludoloonstudio.itch.io/roguelike-adventure-music-pack",
		"gamedevmarket": "https://www.gamedevmarket.net/asset/roguelike-adventure-music-pack/",
		"godot": "https://godotmarketplace.com/shop/roguelike-adventure-music-pack/"},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/roguelike-adventure-music-pack"},
	},
	{
		"title": "Dungeon",
		"date": new Date(2022, 2, 22),
		"frontpage": false,
		"url": "roguelike-adventure-dungeon",
		"cover": "roguelike-adventure.webp",
		"blog": "roguelike-adventure",
		"summary": "Track from the Roguelike Adventure Music Pack. Click title link for more.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=1675597268/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=233087407/transparent=true/",
		"tags": ["Adventure", "Dark", "Exploration", "RPG", "Fantasy", "World", "Casual"],
		"details": 
			{"bpm": 65,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/216619",
		"itch": "https://ludoloonstudio.itch.io/roguelike-adventure-music-pack",
		"gamedevmarket": "https://www.gamedevmarket.net/asset/roguelike-adventure-music-pack/",
		"godot": "https://godotmarketplace.com/shop/roguelike-adventure-music-pack/"},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/roguelike-adventure-music-pack"},
	},
	{
		"title": "Forest",
		"date": new Date(2022, 2, 22),
		"frontpage": false,
		"url": "roguelike-adventure-forest",
		"cover": "roguelike-adventure.webp",
		"blog": "roguelike-adventure",
		"summary": "Track from the Roguelike Adventure Music Pack. Click title link for more.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=1675597268/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=1462404202/transparent=true/",
		"tags": ["Atmospheric", "Ambient", "Exploration", "RPG", "Fantasy", "World", "Uplifting"],
		"details": 
			{"bpm": 60,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/216619",
		"itch": "https://ludoloonstudio.itch.io/roguelike-adventure-music-pack",
		"gamedevmarket": "https://www.gamedevmarket.net/asset/roguelike-adventure-music-pack/",
		"godot": "https://godotmarketplace.com/shop/roguelike-adventure-music-pack/"},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/roguelike-adventure-music-pack"},
	},
	{
		"title": "Hell",
		"date": new Date(2022, 2, 22),
		"frontpage": false,
		"url": "roguelike-adventure",
		"cover": "roguelike-adventure.webp",
		"blog": "roguelike-adventure-hell",
		"summary": "Track from the Roguelike Adventure Music Pack. Click title link for more.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=1675597268/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=302420925/transparent=true/",
		"tags": ["Dark", "Hard", "Exploration", "RPG", "Fantasy", "World", "Adventure"],
		"details": 
			{"bpm": 85,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/216619",
		"itch": "https://ludoloonstudio.itch.io/roguelike-adventure-music-pack",
		"gamedevmarket": "https://www.gamedevmarket.net/asset/roguelike-adventure-music-pack/",
		"godot": "https://godotmarketplace.com/shop/roguelike-adventure-music-pack/"},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/roguelike-adventure-music-pack"},
	},
	{
		"title": "Hills & Valleys",
		"date": new Date(2022, 2, 22),
		"frontpage": false,
		"url": "roguelike-adventure-hills-valleys",
		"cover": "roguelike-adventure.webp",
		"blog": "roguelike-adventure",
		"summary": "Track from the Roguelike Adventure Music Pack. Click title link for more.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=1675597268/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=1594109640/transparent=true/",
		"tags": ["Adventure", "Uplifting", "Heroic", "Exploration", "RPG", "Fantasy", "World"],
		"details": 
			{"bpm": 80,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/216619",
		"itch": "https://ludoloonstudio.itch.io/roguelike-adventure-music-pack",
		"gamedevmarket": "https://www.gamedevmarket.net/asset/roguelike-adventure-music-pack/",
		"godot": "https://godotmarketplace.com/shop/roguelike-adventure-music-pack/"},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/roguelike-adventure-music-pack"},
	},
	{
		"title": "Ruins",
		"date": new Date(2022, 2, 22),
		"frontpage": false,
		"url": "roguelike-adventure-ruins",
		"cover": "roguelike-adventure.webp",
		"blog": "roguelike-adventure",
		"summary": "Track from the Roguelike Adventure Music Pack. Click title link for more.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=1675597268/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=737961549/transparent=true/",
		"tags": ["Dark", "Atmospheric", "Sad", "Exploration", "RPG", "Lonely", "World"],
		"details": 
			{"bpm": 75,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/216619",
		"itch": "https://ludoloonstudio.itch.io/roguelike-adventure-music-pack",
		"gamedevmarket": "https://www.gamedevmarket.net/asset/roguelike-adventure-music-pack/",
		"godot": "https://godotmarketplace.com/shop/roguelike-adventure-music-pack/"},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/roguelike-adventure-music-pack"},
	},
	{
		"title": "Sewers",
		"date": new Date(2022, 2, 22),
		"frontpage": false,
		"url": "roguelike-adventure-sewers",
		"cover": "roguelike-adventure.webp",
		"blog": "roguelike-adventure",
		"summary": "Track from the Roguelike Adventure Music Pack. Click title link for more.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=1675597268/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=1378331713/transparent=true/",
		"tags": ["Adventure", "Hard", "Mysterious", "Exploration", "RPG", "Fantasy", "World"],
		"details": 
			{"bpm": 60,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/216619",
		"itch": "https://ludoloonstudio.itch.io/roguelike-adventure-music-pack",
		"gamedevmarket": "https://www.gamedevmarket.net/asset/roguelike-adventure-music-pack/",
		"godot": "https://godotmarketplace.com/shop/roguelike-adventure-music-pack/"},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/roguelike-adventure-music-pack"},
	},
	{
		"title": "Title",
		"date": new Date(2022, 2, 22),
		"frontpage": false,
		"url": "roguelike-adventure-title",
		"cover": "roguelike-adventure.webp",
		"blog": "roguelike-adventure",
		"summary": "Track from the Roguelike Adventure Music Pack. Click title link for more.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=1675597268/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=4081719344/transparent=true/",
		"tags": ["Epic", "Orchestral", "Dark", "Emotional", "RPG", "Fantasy", "World"],
		"details":
			{"bpm": 40,
			"cost": "Paid",
			"loop": "Loopable",
			"stems": "Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/216619",
		"itch": "https://ludoloonstudio.itch.io/roguelike-adventure-music-pack",
		"gamedevmarket": "https://www.gamedevmarket.net/asset/roguelike-adventure-music-pack/",
		"godot": "https://godotmarketplace.com/shop/roguelike-adventure-music-pack/"},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/roguelike-adventure-music-pack"},
	},
	{
		"title": "Town",
		"date": new Date(2022, 2, 22),
		"frontpage": false,
		"url": "roguelike-adventure-town",
		"cover": "roguelike-adventure.webp",
		"blog": "roguelike-adventure",
		"summary": "Track from the Roguelike Adventure Music Pack. Click title link for more.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=1675597268/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=1669027407/transparent=true/",
		"tags": ["Adventure", "Uplifting", "Chill", "Relaxing", "Exploration", "Upbeat", "World"],
		"details": 
			{"bpm": 80,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/216619",
		"itch": "https://ludoloonstudio.itch.io/roguelike-adventure-music-pack",
		"gamedevmarket": "https://www.gamedevmarket.net/asset/roguelike-adventure-music-pack/",
		"godot": "https://godotmarketplace.com/shop/roguelike-adventure-music-pack/"},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/roguelike-adventure-music-pack"},
	},
	{
		"title": "Winter",
		"date": new Date(2022, 2, 22),
		"frontpage": false,
		"url": "roguelike-adventure-winter",
		"cover": "roguelike-adventure.webp",
		"blog": "roguelike-adventure",
		"summary": "Track from the Roguelike Adventure Music Pack. Click title link for more.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=1675597268/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=961952819/transparent=true/",
		"tags": ["Adventure", "Uplifting", "Chill", "Relaxing", "Exploration", "Upbeat", "World", "Retro"],
		"details": 
			{"bpm": 60,
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/216619",
		"itch": "https://ludoloonstudio.itch.io/roguelike-adventure-music-pack",
		"gamedevmarket": "https://www.gamedevmarket.net/asset/roguelike-adventure-music-pack/",
		"godot": "https://godotmarketplace.com/shop/roguelike-adventure-music-pack/"},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/roguelike-adventure-music-pack"},
	},
	{
		"title": "Game Over",
		"date": new Date(2022, 2, 22),
		"frontpage": false,
		"url": "roguelike-adventure-game-over",
		"cover": "roguelike-adventure.webp",
		"blog": "roguelike-adventure",
		"summary": "Track from the Roguelike Adventure Music Pack. Click title link for more.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=1675597268/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=2081657571/transparent=true/",
		"tags": ["Dark", "Adventure", "Action", "Menu", "Cue", "World"],
		"details": 
			{"bpm": "SFX",
			 "cost": "Paid",
			 "loop": "Loopable",
			 "stems": "Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/216619",
		"itch": "https://ludoloonstudio.itch.io/roguelike-adventure-music-pack",
		"gamedevmarket": "https://www.gamedevmarket.net/asset/roguelike-adventure-music-pack/",
		"godot": "https://godotmarketplace.com/shop/roguelike-adventure-music-pack/"},
		"streaming":
			{"bandcamp": "https://ludoloonstudio.bandcamp.com/album/roguelike-adventure-music-pack"},
	},
/* --- END PACK ---*/
	{
        "title": "Save/Pause Menu",
		"date": new Date(2022, 1, 22),
		"url": "save-pause-menu",
		"cover": "save-pause-menu.webp",
        "summary": "Perfect for a pause, save or loading menu. Chill, loop background music.",
		"embed": "https://www.youtube.com/embed/PlfbXKOpOms",
		"tags": ["Space", "Atmospheric", "Chill", "Simulation", "Relaxing", "Menu"],
		"details": 
			{"bpm": 60,
			 "cost": "Free",
			 "loop": "Loopable",
			 "stems": "No-Stems"},        
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/214277",
			"itch": "https://ludoloonstudio.itch.io/save-pause-menu"},
		"streaming":
			{"archive.org": "https://archive.org/details/pause-save-menu-3x-loop",
			"youtube": "https://www.youtube.com/watch?v=PlfbXKOpOms"},
	},
	{
        "title": "Mysterious Fog",
		"date": new Date(2022, 1, 15),
		"url": "mysterious-fog",
		"cover": "mysterious-fog.webp",
		"blog": "mysterious-fog",
        "summary": "Perfect for any game that needs some spooky, mysterious or nostalgic ambience.",
		"embed": "https://www.youtube.com/embed/-niUrXn13Qw",
		"tags": ["Mysterious", "RPG", "Fantasy", "Simulation", "Survival", "Atmospheric", "Creepy", "Suspense"],
		"details":
			{"bpm": "-",
			 "cost": "Free",
			 "loop": "Loopable",
			 "stems": "No-Stems"
			},         
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/213501",
			"itch": "https://ludoloonstudio.itch.io/mysterious-fog",
			"godot": "https://godotmarketplace.com/shop/mysterious-fog-royalty-free/",
			},
		"streaming":
			{"archive.org": "https://archive.org/details/mysterious-fog-full-track",
			"youtube": "https://www.youtube.com/watch?v=-niUrXn13Qw",},
	},
]
