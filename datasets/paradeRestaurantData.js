const parades = [
	{
		"name": "Krewe of Little Rascals",
		"location": "Metairie",
		"dayOrNight": "pm",
		"startTime": "12:00pm",
		"date": "2/17/2019",
		"themes": ["children", "cars", "family"],
		"numberOfFloats": 85,
		"id": 1,
		"img": "https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/jefferson/37872354-littlerascals2-jpg0_cc32794e-5056-a36a-08469bbb1ddece75.jpg"

	},
	{
		"name": "Krewe of Excalibur",
		"location": "Metairie",
		"dayOrNight": "pm",
		"startTime": "7:00pm",
		"date": "2/22/2019",
		"themes": ["trucks", "floats", "medieval", "magic"],
		"numberOfFloats": 112,
		"id": 2,
		"img": "https://www.hlimg.com/images/events/738X538/25mardi6502_1546063931e.jpg"
	},
	{
		"name": "Krewe of Babylon",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "5:30pm",
		"date": "2/28/2019",
		"themes": ["kings", "knights", "tradition", "legend"],
		"numberOfFloats": 35,
		"id": 3,
		"img": "https://d23xispzx43ico.cloudfront.net/wp-content/uploads/2015/02/0212-babylon-knights.jpg"
	},
	{
		"name": "Krewe of Caesar",
		"location": "Metairie",
		"dayOrNight": "pm",
		"startTime": "6:30pm",
		"date": "2/23/2019",
		"themes": ["emperors", "romans", "dancers", "trucks", "gods", "monsters"],
		"numberOfFloats": 45,
		"id": 4,
		"img": "https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/jefferson/KA-2340_0c1a3c15-5056-a36a-08d6ab1bc42f2163.jpg"
	},
	{
		"name": "Krewe of Kings",
		"location": "Metairie",
		"dayOrNight": "pm",
		"startTime": "5:30pm",
		"date": "2/24/2019",
		"themes": ["kings", "emperors", "trucks", "floats"],
		"numberOfFloats": 17,
		"id": 5,
		"img": "https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/jefferson/150115-F-BD983-0441_0ea1e79d-5056-a36a-087ea1cace8cf131.jpg"
	},
	{
		"name": "Krewe of Centurions",
		"location": "Metairie",
		"dayOrNight": "pm",
		"startTime": "7:00pm",
		"date": "3/1/2019",
		"themes": ["swords", "centurion", "romans", "army", "marching"],
		"numberOfFloats": 40,
		"id": 6,
		"img": "https://cdn.shopify.com/s/files/1/1266/7435/files/About_the_Krewe_Page_-_0889.jpg?14448064482965298971"
	},
	{
		"name": "Krewe of Hermes",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "5:30pm",
		"date": "3/1/2019",
		"themes": ["greeks", "neon", "horses", "gods"],
		"numberOfFloats": 20,
		"id": 7,
		"img": "https://d23xispzx43ico.cloudfront.net/wp-content/uploads/2011/03/KreweHermes-0011.jpg"
	},
	{
		"name": "Krewe of Isis",
		"location": "Metairie",
		"dayOrNight": "pm",
		"startTime": "6:00pm",
		"date": "3/2/2019",
		"themes": ["egyptians", "gods", "maids", "flip-flops", "nature", "magic", "goddess"],
		"numberOfFloats": 21,
		"id": 8,
		"img": "https://c1.staticflickr.com/1/148/404473157_c4079b62e8_z.jpg?zz=1"
	},
	{
		"name": "Krewe d'Etat",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "6:30pm",
		"date": "3/1/2019",
		"themes": ["horses", "dictator", "skulls", "skeletons"],
		"numberOfFloats": 21,
		"id": 9,
		"img": "https://d23xispzx43ico.cloudfront.net/wp-content/uploads/2017/02/IMG_0479-001.jpg"
	},
	{
		"name": "Krewe of Athena",
		"location": "Metairie",
		"dayOrNight": "pm",
		"startTime": "5:30pm",
		"date": "3/3/2019",
		"themes": ["female-crew", "goddess", "greeks", "justice", "wisdom", "owls"],
		"numberOfFloats": 23,
		"id": 10,
		"img": "https://bloximages.newyork1.vip.townnews.com/theadvocate.com/content/tncms/assets/v3/editorial/8/33/833180f5-7f46-5e55-9687-096b74b0a4fe/5751a6e382308.image.jpg"
	},
	{
		"name": "Krewe of Pandora",
		"location": "Metairie",
		"dayOrNight": "pm",
		"startTime": "6:30pm",
		"date": "3/3/2019",
		"themes": ["greeks", "gods", "goddess", "female-crew", "box"],
		"numberOfFloats": 14,
		"id": 11,
		"img": "https://kreweofpandora.org/resources/Pictures/27750375_10155738078223551_47771076118303541_n.jpg"
	},
	{
		"name": "Krewe of Argus",
		"location": "Metairie",
		"dayOrNight": "am",
		"startTime": "10:00am",
		"date": "3/5/2019",
		"themes": ["greeks", "gods", "goddess", "peacock", "marching", "bands"],
		"numberOfFloats": 40,
		"id": 12,
		"img": "https://bloximages.newyork1.vip.townnews.com/theadvocate.com/content/tncms/assets/v3/editorial/2/2d/22d302a1-b973-5562-a967-6cac9ff9ab4c/575185ecbe630.image.jpg"
	},
	{
		"name": "Krewe of Elks",
		"location": "Metairie",
		"dayOrNight": "pm",
		"startTime": "12:00pm",
		"date": "3/5/2019",
		"themes": ["elks", "trucks", "oldest", "charity"],
		"numberOfFloats": 90,
		"id": 13,
		"img": "http://media.gulflive.com/mississippi-press-news/photo/ocean-springs-elks-parade-2014-096jpg-6222eba1d2a6548e.jpg"
	},
	{
		"name": "Krewe of Jefferson",
		"location": "Metairie",
		"dayOrNight": "pm",
		"startTime": "2:00pm",
		"date": "3/5/2019",
		"themes": ["trucks", "last", "marching", "bands"],
		"numberOfFloats": 75,
		"id": 14,
		"img": "http://kreweofjefferson.com/uploads/3/4/1/6/34162067/1762972_orig.jpg"
	},
	{
		"name": "Krewe of Morpheus",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "7:00pm",
		"date": "3/1/2019",
		"themes": ["greeks", "dreams", "classic", "tradition"],
		"numberOfFloats": 20,
		"id": 15,
		"img": "http://i2.cdn.turner.com/cnn/dam/assets/140301174855-03-carnival-0301---restricted-horizontal-gallery.jpg"
	},
	{
		"name": "Krewe of Tucks",
		"location": "Uptown New Orleans",
		"dayOrNight": "am",
		"startTime": "11:00am",
		"date": "3/2/2019",
		"themes": ["students", "irreverence", "satire", "toilet"],
		"numberOfFloats": 13,
		"id": 16,
		"img": "http://www.mardigrasparadeschedule.com/krewes/tucks/2017/images/Krewe-of-Tucks-2017-08584.jpg"
	},
	{
		"name": "Krewe of Okeanos",
		"location": "Uptown New Orleans",
		"dayOrNight": "am",
		"startTime": "11:00am",
		"date": "3/3/2019",
		"themes": ["greeks", "oceans", "fertility", "masks"],
		"numberOfFloats": 20,
		"id": 17,
		"img": "http://www.mardigrasparadeschedule.com/krewes/okeanos/2017/images/Krewe-of-Okeanos-2017-09733.jpg"
	},
	{
		"name": "Krewe of Oshun",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "6:00pm",
		"date": "2/22/2019",
		"themes": ["goddess", "yoruba", "floats", "peacock", "kings"],
		"numberOfFloats": 15,
		"id": 18,
		"img": "https://expo.advance.net/img/4fd532b169/width960/294_03oshun01.jpeg"

	},
	{
		"name": "Krewe of Cleopatra",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "6:30pm",
		"date": "2/22/2019",
		"themes": ["female-crew", "beauty", "egyptians", "goddess"],
		"numberOfFloats": 19,
		"id": 19,
		"img": "https://i.pinimg.com/736x/d5/b8/0e/d5b80eb63d46f788f9ca5dc8b081027f.jpg"
	},
	{
		"name": "Krewe of Mid-City",
		"location": "Uptown New Orleans",
		"dayOrNight": "am",
		"startTime": "11:45am",
		"date": "3/3/2019",
		"themes": ["children", "animation", "horses", "candy"],
		"numberOfFloats": 20,
		"id": 20,
		"img": "https://latonola.files.wordpress.com/2018/02/img_4883.jpg"
	},
	{
		"name": "Krewe of Pontchartrain",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "1:00pm",
		"date": "2/23/2019",
		"themes": ["floats", "fish", "marching", "aquatic", "bands"],
		"numberOfFloats": 19,
		"id": 21,
		"img": "http://www.mardigrasparadeschedule.com/krewes/pontchartrain/2018/images/2018-Krewe-of-Pontchartrain-00001317.jpg"
	},
	{
		"name": "Krewe of Choctaw",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "2:00pm",
		"date": "2/23/2019",
		"themes": ["mail", "chief", "wagons", "trucks", "marching"],
		"numberOfFloats": 18,
		"id": 22,
		"img": "https://media1.fdncms.com/gambit/imager/u/original/3201159/choctaw_cr_zachbrien.jpg"
	},
	{
		"name": "Krewe of Freret",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "2:30pm",
		"date": "2/23/2019",
		"themes": ["floats", "local", "masks", "youth", "marching"],
		"numberOfFloats": 12,
		"id": 23,
		"img": "http://www.mardigrasparadeschedule.com/krewes/freret/2018/images/2018-Krewe-of-Freret-00001572.jpg"
	},
	{
		"name": "Krewe of Thoth",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "12:00pm",
		"date": "3/3/2019",
		"themes": ["egyptians", "wisdom", "dice", "children"],
		"numberOfFloats": 50,
		"id": 24,
		"img": "http://www.mardigrasparadeschedule.com/krewes/thoth/2018/images/2018-Krewe-of-Thoth-00007439.jpg"
	},
	{
		"name": "Krewe of King Arthur",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "1:00pm",
		"date": "2/24/2019",
		"themes": ["medieval", "kings", "knights", "family", "grails"],
		"numberOfFloats": 55,
		"id": 25,
		"img": "http://www.mardigrasparadeschedule.com/krewes/kingarthur/2017/images/Krewe-of-King-Arthur-2017-04536.jpg"
	},
	{
		"name": "Krewe of Bacchus",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "5:15pm",
		"date": "3/3/2019",
		"themes": ["greeks", "gods", "wine", "animation"],
		"numberOfFloats": 31,
		"id": 26,
		"img": "http://www.mardigrasparadeschedule.com/krewes/bacchus/2018/images/2018-Krewe-of-Bacchus-00007724.jpg"
	},
	{
		"name": "Krewe of Druids",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "6:30pm",
		"date": "2/27/2019",
		"themes": ["celtics", "gods", "nature", "masks", "kings"],
		"numberOfFloats": 25,
		"id": 27,
		"img": "http://www.mardigrasparadeschedule.com/krewes/druids/2017/images/Krewe-of-Druids-2017-05313.jpg"
	},
	{
		"name": "Krewe of Nyx",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "7:00pm",
		"date": "2/27/2019",
		"themes": ["female-crew", "sisters", "greeks", "goddess", "purses"],
		"numberOfFloats": 27,
		"id": 28,
		"img": "https://bloximages.newyork1.vip.townnews.com/theadvocate.com/content/tncms/assets/v3/editorial/9/00/90008282-3711-5e7b-b3f0-557ef69d2eaf/58ae7795b5b8b.image.jpg?resize=1157%2C630"
	},
	{
		"name": "Krewe of Rex",
		"location": "Uptown New Orleans",
		"dayOrNight": "am",
		"startTime": "10:00am",
		"date": "3/5/2019",
		"themes": ["kings", "tradition", "floats"],
		"numberOfFloats": 50,
		"id": 29,
		"img": "https://www.rexorganization.com/assets/images/Home/splash6.jpg"
	},
	{
		"name": "Krewe of Muses",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "6:30pm",
		"date": "2/28/2019",
		"themes": ["greeks", "goddess", "muses", "charity", "cups", "masks"],
		"numberOfFloats": 50,
		"id": 30,
		"img": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Krewe_of_Muses_Logo.gif"
	},
	{
		"name": "Krewe of Zulu",
		"location": "Uptown New Orleans",
		"dayOrNight": "am",
		"startTime": "8:00am",
		"date": "3/5/2019",
		"themes": ["coconut", "warriors", "marching", "floats"],
		"numberOfFloats": 30,
		"id": 31,
		"img": "https://ssl.c.photoshelter.com/img-get2/I0000.AV.u9CH_Tg/fit=1000x750/Zulu-Tramps.jpg"
	}
]


const restaurants = [
	{
	"name": "Acme Oyster House",
	"location": "Metairie",
	"distance_to_parade": ".5 miles",
	"walk_to_parade": "10 minutes",
	"cuisine": ["seafood", "cajun", "creole", "classics"],
	"rating": 4.5,
	"img": "https://www.neworleansonline.com/images/slideshows/listings/2952/05.jpg",
	"website": "https://acmeoyster.com/metairie/"
},
	{
	"name": "Zea Rotisserie & Bar",
	"location": "Metairie",
	"distance_to_parade": "1.7 miles",
	"walk_to_parade": "35 minutes",
	"cuisine": ["eclectic", "beer", "mediterranean", "teas"],
	"rating": 4.5,
	"img": "https://resizer.otstatic.com/v2/photos/wide-huge/24439769.jpg",
	"website": "http://zearestaurants.com/locations/metairie/"
},
	{
	"name": "Bobby Hebert's Cajun Cannon",
	"location": "Metairie",
	"distance_to_parade": "1.3 miles",
	"walk_to_parade": "27 minutes",
	"cuisine": ["sports", "cajun", "creole", "classics", "seafood"],
	"rating": 4.4,
	"img": "https://bobbyheberts.com/wp-content/uploads/2018/02/logo.png",
	"website": "https://bobbyheberts.com/"
},
	{
	"name": "Bonefish Grill",
	"location": "Metairie",
	"distance_to_parade": "2.1 miles",
	"walk_to_parade": "43 minutes",
	"cuisine": ["seafood", "cajun", "creole", "steaks", "modern"],
	"rating": 4.2,
	"img": "https://pbs.twimg.com/profile_images/560831988048072705/24fZjaki_400x400.jpeg",
	"website": "https://www.bonefishgrill.com/locations/la/metairie"
},
	{
	"name": "The Harbor Bar & Grill",
	"location": "Metairie",
	"distance_to_parade": ".7 miles",
	"walk_to_parade": "14 minutes",
	"cuisine": ["american", "burgers", "fries", "chips"],
	"rating": 4.5,
	"img": "https://static1.squarespace.com/static/55551a4ae4b0de248142ee6c/t/5564cb5de4b0aa751611f192/1433901318169/Harbor+Logo+4.png?format=1000w",
	"website": "http://www.theharborbarandgrill.com/"
},
	{
	"name": "Casablanca Restaurant",
	"location": "Metairie",
	"distance_to_parade": ".2 miles",
	"walk_to_parade": "3 minutes",
	"cuisine": ["kosher", "moroccan", "middle-eastern"],
	"rating": 4.3,
	"img": "https://www.crescentcityjewishnews.com/blog/wp-content/uploads/2016/09/IMG_3531-1024x768.jpg",
	"website": "http://kosherneworleans.com/_index.php"
},
	{
	"name": "Andrea's Restaurant",
	"location": "Metairie",
	"distance_to_parade": ".6 miles",
	"walk_to_parade": "13 minutes",
	"cuisine": ["italian", "classic", "spaghetti", "lasagna"],
	"rating": 4.0,
	"img": "https://www.coolinaryneworleans.com/wp-content/uploads/2012/06/Andreas-Restaurant-Catering-resized-logo.jpg",
	"website": "https://www.andreasrestaurant.com/"
},
	{
	"name": "Chef Ron's Gumbo Stop",
	"location": "Metairie",
	"distance_to_parade": "1.5 miles",
	"walk_to_parade": "30 minutes",
	"cuisine": ["seafood", "classic", "creole", "cajun"],
	"rating": 4.7,
	"img": "https://cdn.doordash.com/media/restaurant/cover/ChefRonsGumboStop2309MetairieLA.png",
	"website": "http://www.gumbostop.com/"
},
	{
	"name": "Buffalo Wild Wings",
	"location": "Metairie",
	"distance_to_parade": ".3 miles",
	"walk_to_parade": "5 minutes",
	"cuisine": ["sports", "hamburgers", "chicken", "wings"],
	"rating": 3.7,
	"img": "https://www.blazinrewards.com/Assets/images/BWW-Logo_RGB-OnScreen_WhiteHoriz.png",
	"website": "https://www.buffalowildwings.com/en/food/?utm_source=extendednetwork&utm_medium=organic&utm_campaign=yext&utm_content=menu"
},
	{
	"name": "Manny Randazzo King Cakes",
	"location": "Metairie",
	"distance_to_parade": ".6 miles",
	"walk_to_parade": "12 minutes",
	"cuisine": ["dessert", "king-cakes", "sweets", "pastries"],
	"rating": 4.6,
	"img": "https://image.dynamixse.com/s/crop/1200x500/https://static.whereyat.com/whereyatcom_950580522.jpg",
	"website": "https://randazzokingcake.com/"
},
	{
	"name": "Lula Restaurant Distillery",
	"location": "Uptown New Orleans",
	"distance_to_parade": ".1 miles",
	"walk_to_parade": "3 minutes",
	"cuisine": ["rustic", "chic", "micro", "distillery"],
	"rating": 4.3,
	"img": "https://bloximages.newyork1.vip.townnews.com/theadvocate.com/content/tncms/assets/v3/editorial/f/44/f4467d0d-fff9-5652-8e91-a46598c642a0/5b2bdf49cf76c.image.jpg?resize=400%2C267",
	"website": "http://www.lulanola.com/"
},
	{
	"name": "Cochon Restaurant",
	"location" : "Uptown New Orleans",
	"distance_to_parade": "1.1 miles",
	"walk_to_parade": "22 minutes",
	"cuisine": ["pork", "cajun", "creole", "rotisserie"],
	"rating": 4.6,
	"img": "https://assets3.thrillist.com/v1/image/1849998/size/tmg-venue_carousel_mobile.jpg",
	"website": "https://cochonrestaurant.com/"
},
	{
	"name": "Peche Seafood Grill",
	"location" : "Uptown New Orleans",
	"distance_to_parade": "1.1 miles",
	"walk_to_parade": "22 minutes",
	"cuisine": ["coal", "grill", "raw", "seafood", "rustic"],
	"rating": 4.6,
	"img": "http://globalflare.com/wp-content/uploads/2014/05/new-orleans-best-restaurant-in-america.jpg",
	"website": "https://www.pecherestaurant.com/"
},
	{
	"name": "Galliano",
	 "location" : "Uptown New Orleans",
	"distance_to_parade": "1.3 miles",
	"walk_to_parade": "27 minutes",
	"cuisine": ["cajun", "modern", "seafood"],
	"rating": 4.5,
	"img": "https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,h_800,q_75,w_640/v1/clients/neworleans/NOTMC_38634_8dda8ea1-0059-41a1-9493-785cf058e8f8.jpg",
	"website": "https://gallianorestaurant.com/index.html"
},
	{
	"name": "Magazine Pizza",
	"location" : "Uptown New Orleans",
	"distance_to_parade": "1.0 miles",
	"walk_to_parade": "21 minutes",
	"cuisine": ["pizza", "italian", "creole", "classic"],
	"rating": 4.2,
	"img": "https://cdn.vox-cdn.com/thumbor/_Ky-9pn6hKWqXfmwbFuEfOPNN6A=/0x0:960x640/1200x900/filters:focal(404x244:556x396)/cdn.vox-cdn.com/uploads/chorus_image/image/57453545/16508442_10154987720602389_3272299060910275949_n.0.jpg",
	"website": "http://www.magazinepizza.com/zgrid/proc/site/sitep.jsp"
},
	{
	"name": "Acme Oyster House",
	"location" : "Uptown New Orleans",
	"distance_to_parade": ".5 miles",
	"walk_to_parade": "10 minutes",
	"cuisine": ["seafood", "cajun", "creole", "classics"],
	"rating": 4.5,
	"img": "http://www.frenchquarter.com/wp-content/uploads/2017/07/acme-oyster-house-The-Best-Places-for-Oysters-in-the-French-Quarter-and-Nearby.jpg",
	"website": "https://acmeoyster.com/harrahs/"
},
	{
	"name": "Parasol's",
	"location" : "Uptown New Orleans",
	"distance_to_parade": ".8 miles",
	"walk_to_parade": "15 minutes",
	"cuisine": ["seafood", "poboys", "creole", "fries"],
	"rating": 4.5,
	"img": "https://www.seriouseats.com/images/2014/09/20140626-Parasols-Crab-edit.jpg",
	"website": "https://www.facebook.com/ParasolsNOLA/"
},
	{
	"name": "Poseidon Oyster Sushi Bar",
	"location" : "Uptown New Orleans",
	"distance_to_parade": ".4 miles",
	"walk_to_parade": "8 minutes",
	"cuisine": ["seafood", "cajun", "creole", "asian"],
	"rating": 4.4,
	"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_vghzlJyFSJf35P7CFHrZPasirpB7PmkM679eECeygWNNBGPS",
	"website": "http://www.poseidonnola.com/"
},
	{
	"name": "Surrey's Cafe and Juice Bar",
	"location" : "Uptown New Orleans",
	"distance_to_parade": ".3 miles",
	"walk_to_parade": "5 minutes",
	"cuisine": ["juice", "fruit", "coffee", "smoothies"],
	"rating": 4.7,
	"img": "https://www.dinersdriveinsdiveslocations.com/surreys-cafe-louisiana-food.jpg",
	"website": "http://www.surreysnola.com/"
},
	{
	"name": "Seed",
	"location" : "Uptown New Orleans",
	"distance_to_parade": ".2 miles",
	"walk_to_parade": "4 minutes",
	"cuisine": ["vegan", "cakes", "desserts", "snacks"],
	"rating": 4.6,
	"img": "https://media-cdn.tripadvisor.com/media/photo-s/06/ed/b2/52/seed.jpg",
	"website": "https://www.facebook.com/seednola/"
}
]


module.exports = {
	parades,
	restaurants
} 