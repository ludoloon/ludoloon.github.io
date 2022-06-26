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

// Current idea: sort by variables with Free & Paid as separate tables
const music_JSON = 
[
	{
        "title": "Tabletop Jazz Cafe",
		"url": "tabletop-jazz-cafe",
		"cover": "tabletop-jazz-cafe.png",
        "summary": "Chill at a cafe, drink coffee and play games! Perfect for any situaiton that needs a jazz vibe.",
		"embed": "https://www.youtube.com/embed/CRv4Qs0vwTA",
		"tags": [ "Relaxing", "Smooth", "Groovy", "Cute", "Jazz", "Visual Novel", "RPG", "Board Game", "Casual"],
		"details": 
			{"bpm": 65,
			 "cost": "Free",
			 "loop": "Loopable",
			 "stems": "No-Stems"},
        "stores":
			{"unity": "https://assetstore.unity.com/packages/slug/224462",
			"itch": "https://ludoloonstudio.itch.io/tabletop-jazz-cafe"},
		"streaming":
			{"youtube": "https://www.youtube.com/watch?v=CRv4Qs0vwTA"},
	},
	{
        "title": "Starting Line",
		"url": "starting-line",
		"cover": "starting-line.png",
        "summary": "High-speed racing music heavily inspired by classic games like R4 and Gran Turismo.",
		"embed": "https://www.youtube.com/embed/LaXHIgOH9cE",
		"tags": ["Energetic", "Upbeat", "Driving", "Fast", "Racing", "Simulation", "Action", "Rhythm"],
		"details": 
			{"bpm": 140,
			 "cost": "Free",
			 "loop": "Loopable",
			 "stems": "No-Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/223471",
			"itch": "https://ludoloonstudio.itch.io/starting-line"},
		"streaming":
			{"youtube": "https://youtu.be/LaXHIgOH9cE",
			"newgrounds": "https://www.newgrounds.com/audio/listen/1139719"},
	},
	{
        "title": "Stuck",
		"url": "stuck",
		"cover": "stuck.png",
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
			{"youtube": "https://youtu.be/D5oAisdVEW4",
			"newgrounds": "https://www.newgrounds.com/audio/listen/1138613"},
	},
	{
        "title": "Puzzled Mind",
		"url": "puzzled-mind",
		"cover": "puzzled-mind.png",
        "summary": "Moody music for solving a puzzle.",
		"embed": "https://www.youtube.com/embed/iaoRYHZfWFQ",
		"tags": ["Chill", "Downtempo", "Groovy", "Puzzle", "Simulation", "Casual", "Exploration", "Sci-Fi"],
		"details": 
			{"bpm": 87,
			 "cost": "Free",
			 "loop": "Loopable",
			 "stems": "No-Stems"},
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/222465",
			"itch": "https://ludoloonstudio.itch.io/puzzled-mind"},
		"streaming":
			{"youtube": "https://youtu.be/iaoRYHZfWFQ",
			"newgrounds": "https://www.newgrounds.com/audio/listen/1138191"},
	},
	{
        "title": "On the Farm",
		"url": "on-the-farm",
		"cover": "on-the-farm.png",
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
			{"youtube": "https://youtu.be/0ZP9I0KOp7M",
			"newgrounds": "https://www.newgrounds.com/audio/listen/1137021"},
	},
/* --- ROGUELIKE ADVENTURE MUSIC PACK --- */
	{
		"title": "Castle",
		"url": "roguelike-adventure-castle",
		"cover": "roguelike-adventure.png",
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
		"url": "roguelike-adventure-cave",
		"cover": "roguelike-adventure.png",
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
		"url": "roguelike-adventure-desert",
		"cover": "roguelike-adventure.png",
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
		"url": "roguelike-adventure-dungeon",
		"cover": "roguelike-adventure.png",
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
		"url": "roguelike-adventure-forest",
		"cover": "roguelike-adventure.png",
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
		"url": "roguelike-adventure",
		"cover": "roguelike-adventure.png",
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
		"url": "roguelike-adventure-hills-valleys",
		"cover": "roguelike-adventure.png",
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
		"url": "roguelike-adventure-ruins",
		"cover": "roguelike-adventure.png",
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
		"url": "roguelike-adventure-sewers",
		"cover": "roguelike-adventure.png",
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
		"url": "roguelike-adventure-title",
		"cover": "roguelike-adventure.png",
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
		"url": "roguelike-adventure-town",
		"cover": "roguelike-adventure.png",
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
		"url": "roguelike-adventure-winter",
		"cover": "roguelike-adventure.png",
		"blog": "roguelike-adventure",
		"summary": "Track from the Roguelike Adventure Music Pack. Click title link for more.",
		"embed": "https://bandcamp.com/EmbeddedPlayer/album=1675597268/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/track=961952819/transparent=true/",
		"tags": ["Adventure", "Uplifting", "Chill", "Relaxing", "Exploration", "Upbeat", "World"],
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
		"url": "roguelike-adventure-game-over",
		"cover": "roguelike-adventure.png",
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
		"url": "save-pause-menu",
		"cover": "save-pause-menu.png",
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
			{"youtube": "https://www.youtube.com/watch?v=PlfbXKOpOms"},
	},
	{
        "title": "Mysterious Fog",
		"url": "mysterious-fog",
		"cover": "mysterious-fog.png",
		"blog": "mysterious-fog",
        "summary": "Perfect for any game that needs some spooky, mysterious or nostalgic ambience.",
		"embed": "https://www.youtube.com/embed/-niUrXn13Qw",
		"tags": ["Mysterious", "RPG", "Fantasy", "Simulation", "Survival", "Atmospheric", "Creepy", "Suspense"],
		"details":
			{"bpm": "-",
			 "cost": "Free",
			 "loop": "Loopable",
			 "stems": "No-Stems"},         
		"stores":
			{"unity": "https://assetstore.unity.com/packages/slug/213501",
			"itch": "https://ludoloonstudio.itch.io/mysterious-fog",
			"godot": "https://godotmarketplace.com/shop/mysterious-fog-royalty-free/",
			},
		"streaming":
			{"youtube": "https://www.youtube.com/watch?v=-niUrXn13Qw",},
	},
]
