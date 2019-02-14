const psychMusic = [
  { 
   "genre": "neoPsychedelia",
   "origination": 1970,
   "id": 1,
   "characteristics": [
   "psychedelic pop", 
   "jangly guitar rock", 
   "heavily distorted",
   "free form jams",
   "recording experiments"
    ]
   },
  { 
   "genre": "stonerRock",
   "origination": 1990,
   "id": 2,
   "characteristics": [
   "slow tempo", 
   "bass heavy sound", 
   "melodic vocals",
   "retro production",
   "groove laden"
    ]
   },
  { 
   "genre": "shoegazing",
   "origination": 1980,
   "id": 3,
   "characteristics": [
   "guitar distortion", 
   "delay effects", 
   "obscured vocals",
   "ethereal layers",
   "reverb"
    ]
   }
];

const bands = [
  {
	"name": "Sparklehorse",
	"origin": "Richmond Virginia",
	"image": "https://i.imgur.com/ciMF4gb.jpg",
	"members": [
		"Mark Linkous",
		"Scott Minor"
	],
	"genreId": 1,
	"active": false,
	"label": "Slow River",
	"sideProjects": [
		"Danger Mouse",
		"Sol Seppy",
		"David Lynch",
		"Angela Faye Martin"
	]
}, {
	"name": "Quest for Fire",
	"origin": "Toronto Canada",
	"image": "https://i.imgur.com/lamtwzr.jpg",
	"members": [
		"Andrew Moszynski",
		"Chad Ross",
		"Mike Maxymuik",
		"Josh Bauman"
	],
	"genreId": 1,
	"active": false,
	"label": "Tee Pee",
	"sideProjects": [
		"The Deadly Snakes",
		"Cursed",
		"Comet Control"
	]
}, {
	"name": "The Dream Syndicate",
	"origin": "Los Angeles California",
	"image": "https://i.imgur.com/7zklXlb.jpg",
	"members": [
		"Steve Wynn",
		"Dennis Duck",
		"Mark Walton",
		"Jason Victor"
	],
	"genreId": 1,
	"active": true,
	"label": "Big Time",
	"sideProjects": [
		"Grave",
		"Continental Drifters",
		"Steve Wynn and the Miracle Three",
		"Gutterball"
	]
}, {
	"name": "Ozric Tentacles",
	"origin": "Somerset England",
	"image": "https://i.imgur.com/ClePm63.jpg",
	"members": [
		"Ed Wynne",
		"Brandi Wynne",
		"Silas Neptune",
		"Balazs Szende"
	],
	"genreId": 1,
	"active": true,
	"label": "Magna Carta",
	"sideProjects": [
		"Eat Static",
		"Nodens Ictus",
		"Here and Now",
		"Invisible System"
	]
}, {
	"name": "Stardeath and the White Dwarfs",
	"origin": "Oklahoma City Oklahoma",
	"image": "https://i.imgur.com/6zAdp1g.jpg",
	"members": [
		"Dennis Coyne",
		"Casey Joseph",
		"Matt Duckworth",
		"Ford Chastain"
	],
	"genreId": 1,
	"active": true,
	"label": "Warner Bros",
	"sideProjects": [
		"The Flaming Lips",
		"New Fumes",
		"Linear Downfall",
		"Spaceface"
	]
}, {
	"name": "The Black Angels",
	"origin": "Austin TX",
	"image": "https://i.imgur.com/TdwPPTe.jpg",
	"members": [
		"Stephanie Bailey",
		"Christian Bland",
		"Alex Maas",
		"Kyle Hunt",
		"Jake Garcia"
	],
	"genreId": 1,
	"active": true,
	"label": "Light in the Attic",
	"sideProjects": [
		"Mien",
		"The Viet Minh",
		"Christian Bland and The Revelators",
		"The UFO Club",
		"Sweet Tea"
	]
}, {
	"name": "Spacemen 3",
	"origin": "Warwickshire England",
	"image": "https://i.imgur.com/2UcOZah.jpg",
	"members": [
		"Peter Kember",
		"Jason Pierce",
		"Tim Morris",
		"Pete Bain",
		"Natty Brooker",
		"Sterling Roswell",
		"Will Carruthers",
		"Jonny Mattock",
		"Mark Refoy"
	],
	"genreId": 1,
	"active": false,
	"label": "Dedicated Records",
	"sideProjects": [
		"Spectrum",
		"Spiritualized",
		"Darkside"
	]
}, {
	"name": "The Teardrops",
	"origin": "Liverpool England",
	"image": "https://i.imgur.com/hk7Fasw.png",
	"members": [
		"Julian Cope",
		"Mick Finkler",
		"Gary Dwyer",
		"Paul Simpson",
		"Ged Quinn",
		"David Balfe",
		"Alan Gill",
		"Alfie Agius",
		"Jeff Hammer",
		"Troy Tate",
		"Ronnie Francois",
		"Ted Emmett",
		"Andy Radek"
	],
	"genreId": 1,
	"active": false,
	"label": "Zoo Records",
	"sideProjects": [
		"Julian Cope",
		"Crucial Three",
		"Big In Japan",
		"Dalek I Love You",
		"The Wild Swans"
	]
}, {
	"name": "Spindrift",
	"origin": "Los Angeles CA",
	"image": "https://i.imgur.com/JdLZXQX.jpg",
	"members": [
		"Kirpatrick Thomas",
		"James Acton",
		"Daniel Allaire",
		"Joe Baluta",
		"Bobby Bones",
		"Becca Davidson",
		"Julie Patterson"
	],
	"genreId": 1,
	"active": true,
	"label": "Tee Pee Records",
	"sideProjects": [
		"Brian Jonestown Massacre",
		"The Warlocks",
		"Crooked Cowboy"
	]
}, {
	"name": "Echo and the Bunnymen",
	"origin": "Liverpool England",
	"image": "https://i.imgur.com/suHhm1z.jpg",
	"members": [
		"Ian McCulloch",
		"Will Sergeant"
	],
	"genreId": 1,
	"active": true,
	"label": "Warner Bros",
	"sideProjects": [
		"Electrafixion",
		"Youth"
	]
}, {
	"name": "The Church",
	"origin": "Sydney Australia",
	"image": "https://i.imgur.com/XoF7K90.jpg",
	"members": [
		"Steve Kilbey",
		"Peter Koppes",
		"Tim Powles",
		"Ian Haug"
	],
	"genreId": 1,
	"active": true,
	"label": "Capitol",
	"sideProjects": [
		"Tactics",
		"The Crystal Set",
		"The Reels",
		"Hex",
		"The Well"
	]
}, {
	"name": "Acid King",
	"origin": "San Francisco California",
	"image": "https://i.imgur.com/3suu7Z6.jpg",
	"members": [
		"Lori S",
		"Rafa Martinez",
		"Bil Bowman"
	],
	"genreId": 2,
	"active": true,
	"label": "Leaf Hound",
	"sideProjects": [
		"Altamont",
		"Black Cobra",
		"Goatsnake",
		"The Obsessed"
	]
}, {
	"name": "Boris",
	"origin": "Tokyo Japan",
	"image": "https://i.imgur.com/fXn3S3p.png",
	"members": [
		"Atsuo",
		"Takeshi",
		"Wata"
	],
	"genreId": 2,
	"active": true,
	"label": "Southern Lord",
	"sideProjects": [
		"Merzbow",
		"Keiji",
		"Haino",
		"Torche",
		"Doomriders"
	]
}, {
	"name": "Dead Meadow",
	"origin": "Washington DC",
	"image": "https://i.imgur.com/EpwysvE.jpg",
	"members": [
		"Jason Simon",
		"Steve Kille",
		"Mark Laughlin"
	],
	"genreId": 2,
	"active": true,
	"label": "Matador",
	"sideProjects": [
		"Old Testament",
		"The Brian Jonestown Massacre"
	]
}, {
	"name": "Acrimony",
	"origin": "Wales United Kingdom",
	"image": "https://i.imgur.com/WJ1a8WH.jpg",
	"members": [
		"Dorian Walters",
		"Stuart OHara",
		"Matthew Lee Davies",
		"Darren Ivey",
		"Paul Bidmead"
	],
	"genreId": 2,
	"active": false,
	"label": "Godhead Records",
	"sideProjects": [
		"Iron Monkey",
		"Black Eye Riot",
		"Dukes of Nothing",
		"Helvis",
		"Lifer",
		"Sigiryia"
	]
}, {
	"name": "Sleep",
	"origin": "San Jose California",
	"image": "https://i.imgur.com/MqVgmXQ.jpg",
	"members": [
		"Al Cisneros",
		"Matt Pike",
		"Jason Roeder"
	],
	"genreId": 2,
	"active": true,
	"label": "Third Man Records",
	"sideProjects": [
		"Om",
		"High on Fire",
		"Neurosis",
		"Shrinebuilder",
		"Asbestosdeath",
		"The Sabians",
		"Kalas"
	]
}, {
	"name": "Orange Goblin",
	"origin": "London England",
	"image": "https://i.imgur.com/H5OqZbW.jpg",
	"members": [
		"Ben Ward",
		"Joe Hoare",
		"Martyn Millard",
		"Chris Turner"
	],
	"genreId": 2,
	"active": true,
	"label": "Sanctuary",
	"sideProjects": [
		"Ravens Creed",
		"Electric Wizard",
		"Capricorns",
		"Dukes of Nothing"
	]
}, {
	"name": "Melvins",
	"origin": "Montesano Washington",
	"image": "https://i.imgur.com/8ieUJbG.jpg",
	"members": [
		"Buzz Osborne",
		"Dale Crover",
		"Steven Shane McDonald",
		"Jeff Pinkus"
	],
	"genreId": 2,
	"active": true,
	"label": "Your Choice",
	"sideProjects": [
		"Altamont",
		"Crystal Fairy",
		"Fantomas",
		"Mudhoney",
		"Clown Alley",
		"Thrones",
		"Big Business",
		"Jello Biafra",
		"Nirvana",
		"Fecal Matter",
		"Tool",
		"Butthole Surfers"
	]
}, {
	"name": "Electric Wizard",
	"origin": "Dorset England",
	"image": "https://i.imgur.com/oZCj9bF.jpg",
	"members": [
		"Jus Oborn",
		"Liz Buckingham",
		"Clayton Burgess",
		"Simon Poole"
	],
	"genreId": 2,
	"active": true,
	"label": "Rise Above",
	"sideProjects": [
		"Ramesses",
		"Sourvein",
		"Iron Monkey",
		"Teeth of Lions",
		"Rule the Divine",
		"Crippled Black Phoenix",
		"With the Dead"
	]
}, {
	"name": "Alcian Blue",
	"origin": "Takoma Park Maryland",
	"image": "https://i.imgur.com/jqHXMuV.jpg",
	"members": [
		"Sam Chintha",
		"Jake Reid",
		"Clark Stacy",
		"Matt Welch",
		"Kim Reid"
	],
	"genreId": 3,
	"active": false,
	"label": "Safranin Sound",
	"sideProjects": [
		"Screen Vinyl Image",
		"Vacuole Eyes",
		"The Antiques",
		"Torsion Fields"
	]
}, {
	"name": "Slowdive",
	"origin": "Berkshire England",
	"image": "https://i.imgur.com/2XfiHH1.png",
	"members": [
		"Nick Chaplin",
		"Rachel Goswell",
		"Neil Halstead",
		"Christian Savill",
		"Simon Scott"
	],
	"genreId": 3,
	"active": true,
	"label": "Dead Oceans",
	"sideProjects": [
		"The Pumpkin Fairies",
		"Eternal",
		"The Colour Mary",
		"The Charlottes",
		"Zurich",
		"Televise",
		"Lowgold",
		"The Sight Below",
		"Monster Movie",
		"Black Hearted Brother",
		"Minor Victories"
	]
}, {
	"name": "Adorable",
	"origin": "Coventry England",
	"image": "https://i.imgur.com/pxuXG7n.gif",
	"members": [
		"Pete Fijalkowski",
		"Robert Dillam",
		"Stephen Williams",
		"Kevin Gritton"
	],
	"genreId": 3,
	"active": false,
	"label": "Creation",
	"sideProjects": [
		"Polak",
		"The Balloon Farm",
		"The Zephyrs",
		"The Bardots",
		"The Candy Thieves"
	]
}, {
	"name": "My Bloody Valentine",
	"origin": "Dublin Ireland",
	"image": "https://i.imgur.com/HXgfaM9.png",
	"members": [
		"Kevin Shields",
		"Colm O Ciosoig",
		"Debbie Googe",
		"Bilinda Butcher"
	],
	"genreId": 3,
	"active": true,
	"label": "Island",
	"sideProjects": [
		"The Complex",
		"A Life in the Day",
		"Primal Scream",
		"Patti Smith"
	]
}, {
	"name": "Bardo Pond",
	"origin": "Philadelphia Pennsylvania",
	"image": "https://i.imgur.com/6v4oa6Z.jpg",
	"members": [
		"John Gibbons",
		"Michael Gibbons",
		"Isobel Sollenberger",
		"Clint Takeda",
		"Jason Kourkounis"
	],
	"genreId": 3,
	"active": true,
	"label": "Matador",
	"sideProjects": [
		"Prairie Dog Flesh",
		"Third Troll",
		"Baikal",
		"Vapour Theories"
	]
}, {
	"name": "The Brian Jonestown Massacre",
	"origin": "San Francisco California",
	"image": "https://i.imgur.com/lHeQWJo.jpg",
	"members": [
		"Anton Newcombe",
		"Collin Hegna",
		"Ricky Maymi",
		"Daniel Allaire",
		"Joel Gion",
		"Rob Campanella",
		"Ryan Van Kriedt"
	],
	"genreId": 3,
	"active": true,
	"label": "Tee Pee",
	"sideProjects": [
		"Black Rebel Motorcycle Club",
		"The Dandy Warhols",
		"The Warlocks",
		"The Lovetones"
	]
}, {
	"name": "Bowery Electric",
	"origin": "New York City New York",
	"image": "https://i.imgur.com/4N1TwA7.jpg",
	"members": [
		"Lawrence Chandler",
		"Martha Schwendener"
	],
	"genreId": 3,
	"active": false,
	"label": "Happy Go Lucky",
	"sideProjects": [
		"Echostar",
		"Happy Families"
	]
}, {
	"name": "Amesoeurs",
	"origin": "Bagnols sur Ceze France",
	"image": "https://i.imgur.com/wIEWPPg.jpg",
	"members": [
		"Neige",
		"Audrey Sylvain",
		"Fursy Teyssier",
		"Winterhalter"
	],
	"genreId": 3,
	"active": false,
	"label": "Profound Lore",
	"sideProjects": [
		"Alcest",
		"Les Discrets",
		"Peste Noire",
		"Empyrium"
	]
}, {
	"name": "Beach Fossils",
	"origin": "Brooklyn New York",
	"image": "https://i.imgur.com/c0T0hkn.jpg",
	"members": [
		"Dustin Payseur",
		"Jack Doyle Smith",
		"Tommy Davidson",
		"Anton Hochheim"
	],
	"genreId": 3,
	"active": true,
	"label": "Captured Tracks",
	"sideProjects": [
		"Heavenly Beat",
		"DIIV",
		"Wild Nothing"
	]
}, {
	"name": "A Place to Bury Strangers",
	"origin": "Brooklyn New York",
	"image": "https://i.imgur.com/GKoMwF5.jpg",
	"members": [
		"Oliver Ackermann",
		"Dion Lunadon",
		"Lia Simone Braswell"
	],
	"genreId": 3,
	"active": true,
	"label": "Dead Oceans",
	"sideProjects": [
		"Skywave",
		"MOFO",
		"My Best Fiend",
		"Black Acid",
		"Ceremony"
	]
}, {
	"name": "Ride",
	"origin": "Oxford England",
	"image": "https://i.imgur.com/B41x1yH.jpg",
	"members": [
		"Andy Bell",
		"Laurence Colbert",
		"Mark Gardener",
		"Steve Queralt"
	],
	"genreId": 3,
	"active": true,
	"label": "Creation",
	"sideProjects": [
		"Oasis",
		"Beady Eye",
		"The Jesus and Mary Chain",
		"Gay Dad",
		"The Animalhouse",
		"Infinite Cassette"
	  ]
  }
];
module.exports = {
  psychMusic,
  bands
};
