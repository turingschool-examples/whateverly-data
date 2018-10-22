const pokemon = [{
  id: 1,
  spawnChance: 0.69,
  avgSpawns: 69,
  spawnTime: "20:00",
  multipliers: [1.58],
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  nextEvolution: [{
    num: "002",
    pokeName: "Ivysaur"
  }, {
    num: "003",
    pokeName: "Venusaur"
  }]
}, {
  id: 2,
  spawnChance: 0.042,
  avgSpawns: 4.2,
  spawnTime: "07:00",
  multipliers: [
    1.2,
    1.6
  ],
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  "prev_evolution": [{
    num: "001",
    pokeName: "Bulbasaur"
  }],
  nextEvolution: [{
    num: "003",
    pokeName: "Venusaur"
  }]
}, {
  id: 3,
  spawnChance: 0.017,
  avgSpawns: 1.7,
  spawnTime: "11:30",
  multipliers: null,
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  "prev_evolution": [{
    num: "001",
    pokeName: "Bulbasaur"
  }, {
    num: "002",
    pokeName: "Ivysaur"
  }]
}, {
  id: 4,
  spawnChance: 0.253,
  avgSpawns: 25.3,
  spawnTime: "08:45",
  multipliers: [1.65],
  weaknesses: ["Water", "Ground", "Rock"],
  nextEvolution: [{
    num: "005",
    pokeName: "Charmeleon"
  }, {
    num: "006",
    pokeName: "Charizard"
  }]
}, {
  id: 5,
  spawnChance: 0.012,
  avgSpawns: 1.2,
  spawnTime: "19:00",
  multipliers: [1.79],
  weaknesses: ["Water", "Ground", "Rock"],
  "prev_evolution": [{
    num: "004",
    pokeName: "Charmander"
  }],
  nextEvolution: [{
    num: "006",
    pokeName: "Charizard"
  }]
}, {
  id: 6,
  spawnChance: 0.0031,
  avgSpawns: 0.31,
  spawnTime: "13:34",
  multipliers: null,
  weaknesses: ["Water", "Electric", "Rock"],
  "prev_evolution": [{
    num: "004",
    pokeName: "Charmander"
  }, {
    num: "005",
    pokeName: "Charmeleon"
  }]
}, {
  id: 7,
  spawnChance: 0.58,
  avgSpawns: 58,
  spawnTime: "04:25",
  multipliers: [2.1],
  weaknesses: ["Electric", "Grass"],
  nextEvolution: [{
    num: "008",
    pokeName: "Wartortle"
  }, {
    num: "009",
    pokeName: "Blastoise"
  }]
}, {
  id: 8,
  spawnChance: 0.034,
  avgSpawns: 3.4,
  spawnTime: "07:02",
  multipliers: [1.4],
  weaknesses: ["Electric", "Grass"],
  "prev_evolution": [{
    num: "007",
    pokeName: "Squirtle"
  }],
  nextEvolution: [{
    num: "009",
    pokeName: "Blastoise"
  }]
}, {
  id: 9,
  spawnChance: 0.0067,
  avgSpawns: 0.67,
  spawnTime: "00:06",
  multipliers: null,
  weaknesses: ["Electric", "Grass"],
  "prev_evolution": [{
    num: "007",
    pokeName: "Squirtle"
  }, {
    num: "008",
    pokeName: "Wartortle"
  }]
}, {
  id: 10,
  spawnChance: 3.032,
  avgSpawns: 303.2,
  spawnTime: "16:35",
  multipliers: [1.05],
  weaknesses: ["Fire", "Flying", "Rock"],
  nextEvolution: [{
    num: "011",
    pokeName: "Metapod"
  }, {
    num: "012",
    pokeName: "Butterfree"
  }]
}, {
  id: 11,
  spawnChance: 0.187,
  avgSpawns: 18.7,
  spawnTime: "02:11",
  multipliers: [
    3.55,
    3.79
  ],
  weaknesses: ["Fire", "Flying", "Rock"],
  "prev_evolution": [{
    num: "010",
    pokeName: "Caterpie"
  }],
  nextEvolution: [{
    num: "012",
    pokeName: "Butterfree"
  }]
}, {
  id: 12,
  spawnChance: 0.022,
  avgSpawns: 2.2,
  spawnTime: "05:23",
  multipliers: null,
  weaknesses: ["Fire", "Electric", "Ice", "Flying", "Rock"],
  "prev_evolution": [{
    num: "010",
    pokeName: "Caterpie"
  }, {
    num: "011",
    pokeName: "Metapod"
  }]
}, {
  id: 13,
  spawnChance: 7.12,
  avgSpawns: 712,
  spawnTime: "02:21",
  multipliers: [
    1.01,
    1.09
  ],
  weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
  nextEvolution: [{
    num: "014",
    pokeName: "Kakuna"
  }, {
    num: "015",
    pokeName: "Beedrill"
  }]
}, {
  id: 14,
  "egg": "Not in Eggs",
  spawnChance: 0.44,
  avgSpawns: 44,
  spawnTime: "02:30",
  multipliers: [
    3.01,
    3.41
  ],
  weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
  "prev_evolution": [{
    num: "013",
    pokeName: "Weedle"
  }],
  nextEvolution: [{
    num: "015",
    pokeName: "Beedrill"
  }]
}, {
  id: 15,
  spawnChance: 0.051,
  avgSpawns: 5.1,
  spawnTime: "04:50",
  multipliers: null,
  weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
  "prev_evolution": [{
    num: "013",
    pokeName: "Weedle"
  }, {
    num: "014",
    pokeName: "Kakuna"
  }]
}, {
  id: 16,
  spawnChance: 15.98,
  avgSpawns: 1.598,
  spawnTime: "01:34",
  multipliers: [
    1.71,
    1.92
  ],
  weaknesses: ["Electric", "Rock"],
  nextEvolution: [{
    num: "017",
    pokeName: "Pidgeotto"
  }, {
    num: "018",
    pokeName: "Pidgeot"
  }]
}, {
  id: 17,
  spawnChance: 1.02,
  avgSpawns: 102,
  spawnTime: "01:30",
  multipliers: [1.79],
  weaknesses: ["Electric", "Rock"],
  "prev_evolution": [{
    num: "016",
    pokeName: "Pidgey"
  }],
  nextEvolution: [{
    num: "018",
    pokeName: "Pidgeot"
  }]
}, {
  id: 18,
  spawnChance: 0.13,
  avgSpawns: 13,
  spawnTime: "01:50",
  multipliers: null,
  weaknesses: ["Electric", "Rock"],
  "prev_evolution": [{
    num: "016",
    pokeName: "Pidgey"
  }, {
    num: "017",
    pokeName: "Pidgeotto"
  }]
}, {
  id: 19,
  spawnChance: 13.05,
  avgSpawns: 1.305,
  spawnTime: "01:55",
  multipliers: [
    2.55,
    2.73
  ],
  weaknesses: ["Fighting"],
  nextEvolution: [{
    num: "020",
    pokeName: "Raticate"
  }]
}, {
  id: 20,
  spawnChance: 0.41,
  avgSpawns: 41,
  spawnTime: "01:56",
  multipliers: null,
  weaknesses: ["Fighting"],
  "prev_evolution": [{
    num: "019",
    pokeName: "Rattata"
  }]
}, {
  id: 21,
  spawnChance: 4.73,
  avgSpawns: 473,
  spawnTime: "12:25",
  multipliers: [
    2.66,
    2.68
  ],
  weaknesses: ["Electric", "Rock"],
  nextEvolution: [{
    num: "022",
    pokeName: "Fearow"
  }]
}, {
  id: 22,
  spawnChance: 0.15,
  avgSpawns: 15,
  spawnTime: "01:11",
  multipliers: null,
  weaknesses: ["Electric", "Rock"],
  "prev_evolution": [{
    num: "021",
    pokeName: "Spearow"
  }]
}, {
  id: 23,
  spawnChance: 2.27,
  avgSpawns: 227,
  spawnTime: "12:20",
  multipliers: [
    2.21,
    2.27
  ],
  weaknesses: ["Ground", "Psychic"],
  nextEvolution: [{
    num: "024",
    pokeName: "Arbok"
  }]
}, {
  id: 24,
  spawnChance: 0.072,
  avgSpawns: 7.2,
  spawnTime: "01:50",
  multipliers: null,
  weaknesses: ["Ground", "Psychic"],
  "prev_evolution": [{
    num: "023",
    pokeName: "Ekans"
  }]
}, {
  id: 25,
  spawnChance: 0.21,
  avgSpawns: 21,
  spawnTime: "04:00",
  multipliers: [2.34],
  weaknesses: ["Ground"],
  nextEvolution: [{
    num: "026",
    pokeName: "Raichu"
  }]
}, {
  id: 26,
  spawnChance: 0.0076,
  avgSpawns: 0.76,
  spawnTime: "23:58",
  multipliers: null,
  weaknesses: ["Ground"],
  "prev_evolution": [{
    num: "025",
    pokeName: "Pikachu"
  }]
}, {
  id: 27,
  spawnChance: 1.11,
  avgSpawns: 111,
  spawnTime: "01:58",
  multipliers: [2.45],
  weaknesses: ["Water", "Grass", "Ice"],
  nextEvolution: [{
    num: "028",
    pokeName: "Sandslash"
  }]
}, {
  id: 28,
  spawnChance: 0.037,
  avgSpawns: 3.7,
  spawnTime: "12:34",
  multipliers: null,
  weaknesses: ["Water", "Grass", "Ice"],
  "prev_evolution": [{
    num: "027",
    pokeName: "Sandshrew"
  }]
}, {
  id: 29,
  spawnChance: 1.38,
  avgSpawns: 138,
  spawnTime: "01:51",
  multipliers: [
    1.63,
    2.48
  ],
  weaknesses: ["Ground", "Psychic"],
  nextEvolution: [{
    num: "030",
    pokeName: "Nidorina"
  }, {
    num: "031",
    pokeName: "Nidoqueen"
  }]
}, {
  id: 30,
  spawnChance: 0.088,
  avgSpawns: 8.8,
  spawnTime: "07:22",
  multipliers: [
    1.83,
    2.48
  ],
  weaknesses: ["Ground", "Psychic"],
  "prev_evolution": [{
    num: "029",
    pokeName: "Nidoran(Female)"
  }],
  nextEvolution: [{
    num: "031",
    pokeName: "Nidoqueen"
  }]
}, {
  id: 31,
  spawnChance: 0.012,
  avgSpawns: 1.2,
  spawnTime: "12:35",
  multipliers: null,
  weaknesses: ["Water", "Ice", "Ground", "Psychic"],
  "prev_evolution": [{
    num: "029",
    pokeName: "Nidoran(Female)"
  }, {
    num: "030",
    pokeName: "Nidorina"
  }]
}, {
  id: 32,
  spawnChance: 1.31,
  avgSpawns: 131,
  spawnTime: "01:12",
  multipliers: [
    1.64,
    1.7
  ],
  weaknesses: ["Ground", "Psychic"],
  nextEvolution: [{
    num: "033",
    pokeName: "Nidorino"
  }, {
    num: "034",
    pokeName: "Nidoking"
  }]
}, {
  id: 33,
  spawnChance: 0.083,
  avgSpawns: 8.3,
  spawnTime: "09:02",
  multipliers: [1.83],
  weaknesses: ["Ground", "Psychic"],
  "prev_evolution": [{
    num: "032",
    pokeName: "Nidoran(Male)"
  }],
  nextEvolution: [{
    num: "034",
    pokeName: "Nidoking"
  }]
}, {
  id: 34,
  spawnChance: 0.017,
  avgSpawns: 1.7,
  spawnTime: "12:16",
  multipliers: null,
  weaknesses: ["Water", "Ice", "Ground", "Psychic"],
  "prev_evolution": [{
    num: "032",
    pokeName: "Nidoran(Male)"
  }, {
    num: "033",
    pokeName: "Nidorino"
  }]
}, {
  id: 35,
  spawnChance: 0.92,
  avgSpawns: 92,
  spawnTime: "03:30",
  multipliers: [
    2.03,
    2.14
  ],
  weaknesses: ["Fighting"],
  nextEvolution: [{
    num: "036",
    pokeName: "Clefable"
  }]
}, {
  id: 36,
  spawnChance: 0.012,
  avgSpawns: 1.2,
  spawnTime: "03:29",
  multipliers: null,
  weaknesses: ["Fighting"],
  "prev_evolution": [{
    num: "035",
    pokeName: "Clefairy"
  }]
}, {
  id: 37,
  spawnChance: 0.22,
  avgSpawns: 22,
  spawnTime: "13:43",
  multipliers: [
    2.74,
    2.81
  ],
  weaknesses: ["Water", "Ground", "Rock"],
  nextEvolution: [{
    num: "038",
    pokeName: "Ninetales"
  }]
}, {
  id: 38,
  spawnChance: 0.0077,
  avgSpawns: 0.77,
  spawnTime: "01:32",
  multipliers: null,
  weaknesses: ["Water", "Ground", "Rock"],
  "prev_evolution": [{
    num: "037",
    pokeName: "Vulpix"
  }]
}, {
  id: 39,
  spawnChance: 0.39,
  avgSpawns: 39,
  spawnTime: "08:46",
  multipliers: [1.85],
  weaknesses: ["Fighting"],
  nextEvolution: [{
    num: "040",
    pokeName: "Wigglytuff"
  }]
}, {
  id: 40,
  spawnChance: 0.018,
  avgSpawns: 1.8,
  spawnTime: "12:28",
  multipliers: null,
  weaknesses: ["Fighting"],
  "prev_evolution": [{
    num: "039",
    pokeName: "Jigglypuff"
  }]
}, {
  id: 41,
  spawnChance: 6.52,
  avgSpawns: 652,
  spawnTime: "12:28",
  multipliers: [
    2.6,
    3.67
  ],
  weaknesses: ["Electric", "Ice", "Psychic", "Rock"],
  nextEvolution: [{
    num: "042",
    pokeName: "Golbat"
  }]
}, {
  id: 42,
  spawnChance: 0.42,
  avgSpawns: 42,
  spawnTime: "02:15",
  multipliers: null,
  weaknesses: ["Electric", "Ice", "Psychic", "Rock"],
  "prev_evolution": [{
    num: "041",
    pokeName: "Zubat"
  }]
}, {
  id: 43,
  spawnChance: 1.02,
  avgSpawns: 102,
  spawnTime: "03:58",
  multipliers: [1.5],
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  nextEvolution: [{
    num: "044",
    pokeName: "Gloom"
  }, {
    num: "045",
    pokeName: "Vileplume"
  }]
}, {
  id: 44,
  spawnChance: 0.064,
  avgSpawns: 6.4,
  spawnTime: "11:33",
  multipliers: [1.49],
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  "prev_evolution": [{
    num: "043",
    pokeName: "Oddish"
  }],
  nextEvolution: [{
    num: "045",
    pokeName: "Vileplume"
  }]
}, {
  id: 45,
  spawnChance: 0.0097,
  avgSpawns: 0.97,
  spawnTime: "23:58",
  multipliers: null,
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  "prev_evolution": [{
    num: "043",
    pokeName: "Oddish"
  }, {
    num: "044",
    pokeName: "Gloom"
  }]
}, {
  id: 46,
  spawnChance: 2.36,
  avgSpawns: 236,
  spawnTime: "01:42",
  multipliers: [2.02],
  weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug", "Rock"],
  nextEvolution: [{
    num: "047",
    pokeName: "Parasect"
  }]
}, {
  id: 47,
  spawnChance: 0.074,
  avgSpawns: 7.4,
  spawnTime: "01:22",
  multipliers: null,
  weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug", "Rock"],
  "prev_evolution": [{
    num: "046",
    pokeName: "Paras"
  }]
}, {
  id: 48,
  spawnChance: 2.28,
  avgSpawns: 228,
  spawnTime: "02:31",
  multipliers: [
    1.86,
    1.9
  ],
  weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
  nextEvolution: [{
    num: "049",
    pokeName: "Venomoth"
  }]
}, {
  id: 49,
  spawnChance: 0.072,
  avgSpawns: 7.2,
  spawnTime: "23:40",
  multipliers: null,
  weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
  "prev_evolution": [{
    num: "048",
    pokeName: "Venonat"
  }]
}, {
  id: 50,
  spawnChance: 0.40,
  avgSpawns: 40,
  spawnTime: "02:22",
  multipliers: [2.69],
  weaknesses: ["Water", "Grass", "Ice"],
  nextEvolution: [{
    num: "051",
    pokeName: "Dugtrio"
  }]
}, {
  id: 51,
  spawnChance: 0.014,
  avgSpawns: 1.4,
  spawnTime: "12:37",
  multipliers: null,
  weaknesses: ["Water", "Grass", "Ice"],
  "prev_evolution": [{
    num: "050",
    pokeName: "Diglett"
  }]
}, {
  id: 52,
  spawnChance: 0.86,
  avgSpawns: 86,
  spawnTime: "02:54",
  multipliers: [1.98],
  weaknesses: ["Fighting"],
  nextEvolution: [{
    num: "053",
    pokeName: "Persian"
  }]
}, {
  id: 53,
  spawnChance: 0.022,
  avgSpawns: 2.2,
  spawnTime: "02:44",
  multipliers: null,
  weaknesses: ["Fighting"],
  "prev_evolution": [{
    num: "052",
    pokeName: "Meowth"
  }]
}, {
  id: 54,
  spawnChance: 2.54,
  avgSpawns: 254,
  spawnTime: "03:41",
  multipliers: [2.27],
  weaknesses: ["Electric", "Grass"],
  nextEvolution: [{
    num: "055",
    pokeName: "Golduck"
  }]
}, {
  id: 55,
  spawnChance: 0.087,
  avgSpawns: 8.7,
  spawnTime: "23:06",
  multipliers: null,
  weaknesses: ["Electric", "Grass"],
  "prev_evolution": [{
    num: "054",
    pokeName: "Psyduck"
  }]
}, {
  id: 56,
  spawnChance: 0.92,
  avgSpawns: 92,
  spawnTime: "12:52",
  multipliers: [
    2.17,
    2.28
  ],
  weaknesses: ["Flying", "Psychic", "Fairy"],
  nextEvolution: [{
    num: "057",
    pokeName: "Primeape"
  }]
}, {
  id: 57,
  spawnChance: 0.031,
  avgSpawns: 3.1,
  spawnTime: "12:33",
  multipliers: null,
  weaknesses: ["Flying", "Psychic", "Fairy"],
  "prev_evolution": [{
    num: "056",
    pokeName: "Mankey"
  }]
}, {
  id: 58,
  spawnChance: 0.92,
  avgSpawns: 92,
  spawnTime: "03:57",
  multipliers: [
    2.31,
    2.36
  ],
  weaknesses: ["Water", "Ground", "Rock"],
  nextEvolution: [{
    num: "059",
    pokeName: "Arcanine"
  }]
}, {
  id: 59,
  spawnChance: 0.017,
  avgSpawns: 1.7,
  spawnTime: "03:11",
  multipliers: null,
  weaknesses: ["Water", "Ground", "Rock"],
  "prev_evolution": [{
    num: "058",
    pokeName: "Growlithe"
  }]
}, {
  id: 60,
  spawnChance: 2.19,
  avgSpawns: 219,
  spawnTime: "03:40",
  multipliers: [
    1.72,
    1.73
  ],
  weaknesses: ["Electric", "Grass"],
  nextEvolution: [{
    num: "061",
    pokeName: "Poliwhirl"
  }, {
    num: "062",
    pokeName: "Poliwrath"
  }]
}, {
  id: 61,
  spawnChance: 0.13,
  avgSpawns: 13,
  spawnTime: "09:14",
  multipliers: [1.95],
  weaknesses: ["Electric", "Grass"],
  "prev_evolution": [{
    num: "060",
    pokeName: "Poliwag"
  }],
  nextEvolution: [{
    num: "062",
    pokeName: "Poliwrath"
  }]
}, {
  id: 62,
  spawnChance: 0.011,
  avgSpawns: 1.1,
  spawnTime: "01:32",
  multipliers: null,
  weaknesses: ["Electric", "Grass", "Flying", "Psychic", "Fairy"],
  "prev_evolution": [{
    num: "060",
    pokeName: "Poliwag"
  }, {
    num: "061",
    pokeName: "Poliwhirl"
  }]
}, {
  id: 63,
  spawnChance: 0.42,
  avgSpawns: 42,
  spawnTime: "04:30",
  multipliers: [
    1.36,
    1.95
  ],
  weaknesses: ["Bug", "Ghost", "Dark"],
  nextEvolution: [{
    num: "064",
    pokeName: "Kadabra"
  }, {
    num: "065",
    pokeName: "Alakazam"
  }]
}, {
  id: 64,
  spawnChance: 0.027,
  avgSpawns: 2.7,
  spawnTime: "11:25",
  multipliers: [1.4],
  weaknesses: ["Bug", "Ghost", "Dark"],
  "prev_evolution": [{
    num: "063",
    pokeName: "Abra"
  }],
  nextEvolution: [{
    num: "065",
    pokeName: "Alakazam"
  }]
}, {
  id: 65,
  spawnChance: 0.0073,
  avgSpawns: 0.73,
  spawnTime: "12:33",
  multipliers: null,
  weaknesses: ["Bug", "Ghost", "Dark"],
  "prev_evolution": [{
    num: "063",
    pokeName: "Abra"
  }, {
    num: "064",
    pokeName: "Kadabra"
  }]
}, {
  id: 66,
  spawnChance: 0.49,
  avgSpawns: 49,
  spawnTime: "01:55",
  multipliers: [
    1.64,
    1.65
  ],
  weaknesses: ["Flying", "Psychic", "Fairy"],
  nextEvolution: [{
    num: "067",
    pokeName: "Machoke"
  }, {
    num: "068",
    pokeName: "Machamp"
  }]
}, {
  id: 67,
  spawnChance: 0.034,
  avgSpawns: 3.4,
  spawnTime: "10:32",
  multipliers: [1.7],
  weaknesses: ["Flying", "Psychic", "Fairy"],
  "prev_evolution": [{
    num: "066",
    pokeName: "Machop"
  }],
  nextEvolution: [{
    num: "068",
    pokeName: "Machamp"
  }]
}, {
  id: 68,
  spawnChance: 0.0068,
  avgSpawns: 0.68,
  spawnTime: "02:55",
  multipliers: null,
  weaknesses: ["Flying", "Psychic", "Fairy"],
  "prev_evolution": [{
    num: "066",
    pokeName: "Machop"
  }, {
    num: "067",
    pokeName: "Machoke"
  }]
}, {
  id: 69,
  spawnChance: 1.15,
  avgSpawns: 115,
  spawnTime: "04:10",
  multipliers: [1.57],
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  nextEvolution: [{
    num: "070",
    pokeName: "Weepinbell"
  }, {
    num: "071",
    pokeName: "Victreebel"
  }]
}, {
  id: 70,
  spawnChance: 0.072,
  avgSpawns: 7.2,
  spawnTime: "09:45",
  multipliers: [1.59],
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  "prev_evolution": [{
    num: "069",
    pokeName: "Bellsprout"
  }],
  nextEvolution: [{
    num: "071",
    pokeName: "Victreebel"
  }]
}, {
  id: 71,
  spawnChance: 0.0059,
  avgSpawns: 0.59,
  spawnTime: "12:19",
  multipliers: null,
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  "prev_evolution": [{
    num: "069",
    pokeName: "Bellsprout"
  }, {
    num: "070",
    pokeName: "Weepinbell"
  }]
}, {
  id: 72,
  spawnChance: 0.81,
  avgSpawns: 81,
  spawnTime: "03:20",
  multipliers: [2.52],
  weaknesses: ["Electric", "Ground", "Psychic"],
  nextEvolution: [{
    num: "073",
    pokeName: "Tentacruel"
  }]
}, {
  id: 73,
  spawnChance: 0.082,
  avgSpawns: 8.2,
  spawnTime: "23:36",
  multipliers: null,
  weaknesses: ["Electric", "Ground", "Psychic"],
  "prev_evolution": [{
    num: "072",
    pokeName: "Tentacool"
  }]
}, {
  id: 74,
  spawnChance: 1.19,
  avgSpawns: 119,
  spawnTime: "12:40",
  multipliers: [
    1.75,
    1.76
  ],
  weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
  nextEvolution: [{
    num: "075",
    pokeName: "Graveler"
  }, {
    num: "076",
    pokeName: "Golem"
  }]
}, {
  id: 75,
  spawnChance: 0.071,
  avgSpawns: 7.1,
  spawnTime: "04:53",
  multipliers: [
    1.64,
    1.72
  ],
  weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
  "prev_evolution": [{
    num: "074",
    pokeName: "Geodude"
  }],
  nextEvolution: [{
    num: "076",
    pokeName: "Golem"
  }]
}, {
  id: 76,
  spawnChance: 0.0047,
  avgSpawns: 0.47,
  spawnTime: "12:16",
  multipliers: null,
  weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
  "prev_evolution": [{
    num: "074",
    pokeName: "Geodude"
  }, {
    num: "075",
    pokeName: "Graveler"
  }]
}, {
  id: 77,
  spawnChance: 0.51,
  avgSpawns: 51,
  spawnTime: "02:50",
  multipliers: [
    1.48,
    1.5
  ],
  weaknesses: ["Water", "Ground", "Rock"],
  nextEvolution: [{
    num: "078",
    pokeName: "Rapidash"
  }]
}, {
  id: 78,
  spawnChance: 0.011,
  avgSpawns: 1.1,
  spawnTime: "04:00",
  multipliers: null,
  weaknesses: ["Water", "Ground", "Rock"],
  "prev_evolution": [{
    num: "077",
    pokeName: "Ponyta"
  }]
}, {
  id: 79,
  spawnChance: 1.05,
  avgSpawns: 105,
  spawnTime: "07:12",
  multipliers: [2.21],
  weaknesses: ["Electric", "Grass", "Bug", "Ghost", "Dark"],
  nextEvolution: [{
    num: "080",
    pokeName: "Slowbro"
  }]
}, {
  id: 80,
  spawnChance: 0.036,
  avgSpawns: 3.6,
  spawnTime: "02:56",
  multipliers: null,
  weaknesses: ["Electric", "Grass", "Bug", "Ghost", "Dark"],
  "prev_evolution": [{
    num: "079",
    pokeName: "Slowpoke"
  }]
}, {
  id: 81,
  spawnChance: 0.71,
  avgSpawns: 71,
  spawnTime: "04:04",
  multipliers: [
    2.16,
    2.17
  ],
  weaknesses: ["Fire", "Water", "Ground"],
  nextEvolution: [{
    num: "082",
    pokeName: "Magneton"
  }]
}, {
  id: 82,
  spawnChance: 0.023,
  avgSpawns: 2.3,
  spawnTime: "15:25",
  multipliers: null,
  weaknesses: ["Fire", "Water", "Ground"],
  "prev_evolution": [{
    num: "081",
    pokeName: "Magnemite"
  }]
}, {
  id: 83,
  spawnChance: 0.0212,
  avgSpawns: 2.12,
  spawnTime: "01:09",
  multipliers: null,
  weaknesses: ["Electric", "Rock"]
}, {
  id: 84,
  spawnChance: 0.52,
  avgSpawns: 52,
  spawnTime: "05:10",
  multipliers: [
    2.19,
    2.24
  ],
  weaknesses: ["Electric", "Rock"],
  nextEvolution: [{
    num: "085",
    pokeName: "Dodrio"
  }]
}, {
  id: 85,
  spawnChance: 0.22,
  avgSpawns: 22,
  spawnTime: "02:12",
  multipliers: null,
  weaknesses: ["Electric", "Rock"],
  "prev_evolution": [{
    num: "084",
    pokeName: "Doduo"
  }]
}, {
  id: 86,
  spawnChance: 0.28,
  avgSpawns: 28,
  spawnTime: "06:46",
  multipliers: [
    1.04,
    1.96
  ],
  weaknesses: ["Electric", "Grass"],
  nextEvolution: [{
    num: "087",
    pokeName: "Dewgong"
  }]
}, {
  id: 87,
  spawnChance: 0.013,
  avgSpawns: 1.3,
  spawnTime: "06:04",
  multipliers: null,
  weaknesses: ["Electric", "Grass", "Fighting", "Rock"],
  "prev_evolution": [{
    num: "086",
    pokeName: "Seel"
  }]
}, {
  id: 88,
  spawnChance: 0.052,
  avgSpawns: 5.2,
  spawnTime: "15:11",
  multipliers: [2.44],
  weaknesses: ["Ground", "Psychic"],
  nextEvolution: [{
    num: "089",
    pokeName: "Muk"
  }]
}, {
  id: 89,
  spawnChance: 0.0031,
  avgSpawns: 0.31,
  spawnTime: "01:28",
  multipliers: null,
  weaknesses: ["Ground", "Psychic"],
  "prev_evolution": [{
    num: "088",
    pokeName: "Grimer"
  }]
}, {
  id: 90,
  spawnChance: 0.52,
  avgSpawns: 52,
  spawnTime: "07:39",
  multipliers: [2.65],
  weaknesses: ["Electric", "Grass"],
  nextEvolution: [{
    num: "091",
    pokeName: "Cloyster"
  }]
}, {
  id: 91,
  spawnChance: 0.015,
  avgSpawns: 1.5,
  spawnTime: "02:33",
  multipliers: null,
  weaknesses: ["Electric", "Grass", "Fighting", "Rock"],
  "prev_evolution": [{
    num: "090",
    pokeName: "Shellder"
  }]
}, {
  id: 92,
  spawnChance: 0.79,
  avgSpawns: 79,
  spawnTime: "04:21",
  multipliers: [1.78],
  weaknesses: ["Ground", "Psychic", "Ghost", "Dark"],
  nextEvolution: [{
    num: "093",
    pokeName: "Haunter"
  }, {
    num: "094",
    pokeName: "Gengar"
  }]
}, {
  id: 93,
  spawnChance: 0.052,
  avgSpawns: 5.2,
  spawnTime: "00:10",
  multipliers: [
    1.56,
    1.8
  ],
  weaknesses: ["Ground", "Psychic", "Ghost", "Dark"],
  "prev_evolution": [{
    num: "092",
    pokeName: "Gastly"
  }],
  nextEvolution: [{
    num: "094",
    pokeName: "Gengar"
  }]
}, {
  id: 94,
  spawnChance: 0.0067,
  avgSpawns: 0.67,
  spawnTime: "03:55",
  multipliers: null,
  weaknesses: ["Ground", "Psychic", "Ghost", "Dark"],
  "prev_evolution": [{
    num: "092",
    pokeName: "Gastly"
  }, {
    num: "093",
    pokeName: "Haunter"
  }]
}, {
  id: 95,
  spawnChance: 0.10,
  avgSpawns: 10,
  spawnTime: "01:18",
  multipliers: null,
  weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"]
}, {
  id: 96,
  spawnChance: 3.21,
  avgSpawns: 321,
  spawnTime: "01:51",
  multipliers: [
    2.08,
    2.09
  ],
  weaknesses: ["Bug", "Ghost", "Dark"],
  nextEvolution: [{
    num: "097",
    pokeName: "Hypno"
  }]
}, {
  id: 97,
  spawnChance: 0.10,
  avgSpawns: 10,
  spawnTime: "02:17",
  multipliers: null,
  weaknesses: ["Bug", "Ghost", "Dark"],
  "prev_evolution": [{
    num: "096",
    pokeName: "Drowzee"
  }]
}, {
  id: 98,
  spawnChance: 2.12,
  avgSpawns: 212,
  spawnTime: "03:33",
  multipliers: [
    2.36,
    2.4
  ],
  weaknesses: ["Electric", "Grass"],
  nextEvolution: [{
    num: "099",
    pokeName: "Kingler"
  }]
}, {
  id: 99,
  spawnChance: 0.062,
  avgSpawns: 6.2,
  spawnTime: "03:44",
  multipliers: null,
  weaknesses: ["Electric", "Grass"],
  "prev_evolution": [{
    num: "098",
    pokeName: "Krabby"
  }]
}, {
  id: 100,
  spawnChance: 0.65,
  avgSpawns: 65,
  spawnTime: "04:36",
  multipliers: [
    2.01,
    2.02
  ],
  weaknesses: ["Ground"],
  nextEvolution: [{
    num: "101",
    pokeName: "Electrode"
  }]
}, {
  id: 101,
  spawnChance: 0.02,
  avgSpawns: 2,
  spawnTime: "04:10",
  multipliers: null,
  weaknesses: ["Ground"],
  "prev_evolution": [{
    num: "100",
    pokeName: "Voltorb"
  }]
}, {
  id: 102,
  spawnChance: 0.78,
  avgSpawns: 78,
  spawnTime: "09:09",
  multipliers: [
    2.7,
    3.18
  ],
  weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug", "Ghost", "Dark"],
  nextEvolution: [{
    num: "103",
    pokeName: "Exeggutor"
  }]
}, {
  id: 103,
  spawnChance: 0.014,
  avgSpawns: 1.4,
  spawnTime: "12:34",
  multipliers: null,
  weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug", "Ghost", "Dark"],
  "prev_evolution": [{
    num: "102",
    pokeName: "Exeggcute"
  }]
}, {
  id: 104,
  spawnChance: 0.61,
  avgSpawns: 61,
  spawnTime: "01:51",
  multipliers: [1.67],
  weaknesses: ["Water", "Grass", "Ice"],
  nextEvolution: [{
    num: "105",
    pokeName: "Marowak"
  }]
}, {
  id: 105,
  spawnChance: 0.02,
  avgSpawns: 2,
  spawnTime: "03:59",
  multipliers: null,
  weaknesses: ["Water", "Grass", "Ice"],
  "prev_evolution": [{
    num: "104",
    pokeName: "Cubone"
  }]
}, {
  id: 106,
  spawnChance: 0.02,
  avgSpawns: 2,
  spawnTime: "03:59",
  multipliers: null,
  weaknesses: ["Flying", "Psychic", "Fairy"]
}, {
  id: 107,
  spawnChance: 0.022,
  avgSpawns: 2.2,
  spawnTime: "05:58",
  multipliers: null,
  weaknesses: ["Flying", "Psychic", "Fairy"]
}, {
  id: 108,
  spawnChance: 0.011,
  avgSpawns: 1.1,
  spawnTime: "02:46",
  multipliers: null,
  weaknesses: ["Fighting"]
}, {
  id: 109,
  spawnChance: 0.20,
  avgSpawns: 20,
  spawnTime: "08:16",
  multipliers: [1.11],
  weaknesses: ["Ground", "Psychic"],
  nextEvolution: [{
    num: "110",
    pokeName: "Weezing"
  }]
}, {
  id: 110,
  spawnChance: 0.016,
  avgSpawns: 1.6,
  spawnTime: "12:17",
  multipliers: null,
  weaknesses: ["Ground", "Psychic"],
  "prev_evolution": [{
    num: "109",
    pokeName: "Koffing"
  }]
}, {
  id: 111,
  spawnChance: 0.63,
  avgSpawns: 63,
  spawnTime: "03:21",
  multipliers: [1.91],
  weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
  nextEvolution: [{
    num: "112",
    pokeName: "Rhydon"
  }]
}, {
  id: 112,
  spawnChance: 0.022,
  avgSpawns: 2.2,
  spawnTime: "05:50",
  multipliers: null,
  weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
  "prev_evolution": [{
    num: "111",
    pokeName: "Rhyhorn"
  }]
}, {
  id: 113,
  spawnChance: 0.013,
  avgSpawns: 1.3,
  spawnTime: "04:46",
  multipliers: null,
  weaknesses: ["Fighting"]
}, {
  id: 114,
  spawnChance: 0.228,
  avgSpawns: 22.8,
  spawnTime: "23:13",
  multipliers: null,
  weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug"]
}, {
  id: 115,
  spawnChance: 0.0086,
  avgSpawns: 0.86,
  spawnTime: "02:40",
  multipliers: null,
  weaknesses: ["Fighting"]
}, {
  id: 116,
  spawnChance: 1.13,
  avgSpawns: 113,
  spawnTime: "02:53",
  multipliers: [2.23],
  weaknesses: ["Electric", "Grass"],
  nextEvolution: [{
    num: "117",
    pokeName: "Seadra"
  }]
}, {
  id: 117,
  spawnChance: 0.034,
  avgSpawns: 3.4,
  spawnTime: "03:18",
  multipliers: null,
  weaknesses: ["Electric", "Grass"],
  "prev_evolution": [{
    num: "116",
    pokeName: "Horsea"
  }]
}, {
  id: 118,
  spawnChance: 2.18,
  avgSpawns: 218,
  spawnTime: "03:14",
  multipliers: [
    2.15,
    2.2
  ],
  weaknesses: ["Electric", "Grass"],
  nextEvolution: [{
    num: "119",
    pokeName: "Seaking"
  }]
}, {
  id: 119,
  spawnChance: 0.08,
  avgSpawns: 8,
  spawnTime: "05:21",
  multipliers: null,
  weaknesses: ["Electric", "Grass"],
  "prev_evolution": [{
    num: "118",
    pokeName: "Goldeen"
  }]
}, {
  id: 120,
  spawnChance: 1.95,
  avgSpawns: 195,
  spawnTime: "22:59",
  multipliers: [
    2.38,
    2.41
  ],
  weaknesses: ["Electric", "Grass"],
  nextEvolution: [{
    num: "121",
    pokeName: "Starmie"
  }]
}, {
  id: 121,
  spawnChance: 0.034,
  avgSpawns: 3.4,
  spawnTime: "06:57",
  multipliers: null,
  weaknesses: ["Electric", "Grass", "Bug", "Ghost", "Dark"],
  "prev_evolution": [{
    num: "120",
    pokeName: "Staryu"
  }]
}, {
  id: 122,
  spawnChance: 0.0031,
  avgSpawns: 0.31,
  spawnTime: "01:51",
  multipliers: null,
  weaknesses: ["Bug", "Ghost", "Dark"]
}, {
  id: 123,
  spawnChance: 0.14,
  avgSpawns: 14,
  spawnTime: "05:43",
  multipliers: null,
  weaknesses: ["Fire", "Electric", "Ice", "Flying", "Rock"]
}, {
  id: 124,
  spawnChance: 0.35,
  avgSpawns: 35,
  spawnTime: "05:41",
  multipliers: null,
  weaknesses: ["Fire", "Bug", "Rock", "Ghost", "Dark", "Steel"]
}, {
  id: 125,
  spawnChance: 0.074,
  avgSpawns: 7.4,
  spawnTime: "04:28",
  multipliers: null,
  weaknesses: ["Ground"]
}, {
  id: 126,
  spawnChance: 0.10,
  avgSpawns: 10,
  spawnTime: "20:36",
  multipliers: null,
  weaknesses: ["Water", "Ground", "Rock"]
}, {
  id: 127,
  spawnChance: 0.99,
  avgSpawns: 99,
  spawnTime: "03:25",
  multipliers: null,
  weaknesses: ["Fire", "Flying", "Rock"]
}, {
  id: 128,
  spawnChance: 0.12,
  avgSpawns: 12,
  spawnTime: "00:37",
  multipliers: null,
  weaknesses: ["Fighting"]
}, {
  id: 129,
  spawnChance: 4.78,
  avgSpawns: 478,
  spawnTime: "14:26",
  multipliers: [
    10.1,
    11.8
  ],
  weaknesses: ["Electric", "Grass"],
  nextEvolution: [{
    num: "130",
    pokeName: "Gyarados"
  }]
}, {
  id: 130,
  spawnChance: 0.0032,
  avgSpawns: 0.32,
  spawnTime: "02:15",
  multipliers: null,
  weaknesses: ["Electric", "Rock"],
  "prev_evolution": [{
    num: "129",
    pokeName: "Magikarp"
  }]
}, {
  id: 131,
  spawnChance: 0.006,
  avgSpawns: 0.6,
  spawnTime: "08:59",
  multipliers: null,
  weaknesses: ["Electric", "Grass", "Fighting", "Rock"]
}, {
  id: 132,
  spawnChance: 0,
  avgSpawns: 0,
  spawnTime: "N/A",
  multipliers: null,
  weaknesses: ["Fighting"]
}, {
  id: 133,
  spawnChance: 2.75,
  avgSpawns: 275,
  spawnTime: "05:32",
  multipliers: [
    2.02,
    2.64
  ],
  weaknesses: ["Fighting"],
  nextEvolution: [{
    num: "134",
    pokeName: "Vaporeon"
  }, {
    num: "135",
    pokeName: "Jolteon"
  }, {
    num: "136",
    pokeName: "Flareon"
  }]
}, {
  id: 134,
  spawnChance: 0.014,
  avgSpawns: 1.4,
  spawnTime: "10:54",
  multipliers: null,
  weaknesses: ["Electric", "Grass"],
  "prev_evolution": [{
    num: "133",
    pokeName: "Eevee"
  }]
}, {
  id: 135,
  spawnChance: 0.012,
  avgSpawns: 1.2,
  spawnTime: "02:30",
  multipliers: null,
  weaknesses: ["Ground"],
  "prev_evolution": [{
    num: "133",
    pokeName: "Eevee"
  }]
}, {
  id: 136,
  spawnChance: 0.017,
  avgSpawns: 1.7,
  spawnTime: "07:02",
  multipliers: null,
  weaknesses: ["Water", "Ground", "Rock"],
  "prev_evolution": [{
    num: "133",
    pokeName: "Eevee"
  }]
}, {
  id: 137,
  spawnChance: 0.012,
  avgSpawns: 1.2,
  spawnTime: "02:49",
  multipliers: null,
  weaknesses: ["Fighting"]
}, {
  id: 138,
  spawnChance: 0.14,
  avgSpawns: 14,
  spawnTime: "10:23",
  multipliers: [2.12],
  weaknesses: ["Electric", "Grass", "Fighting", "Ground"],
  nextEvolution: [{
    num: "139",
    pokeName: "Omastar"
  }]
}, {
  id: 139,
  spawnChance: 0.0061,
  avgSpawns: 0.61,
  spawnTime: "05:04",
  multipliers: null,
  weaknesses: ["Electric", "Grass", "Fighting", "Ground"],
  "prev_evolution": [{
    num: "138",
    pokeName: "Omanyte"
  }]
}, {
  id: 140,
  spawnChance: 0.10,
  avgSpawns: 10,
  spawnTime: "00:05",
  multipliers: [
    1.97,
    2.37
  ],
  weaknesses: ["Electric", "Grass", "Fighting", "Ground"],
  nextEvolution: [{
    num: "141",
    pokeName: "Kabutops"
  }]
}, {
  id: 141,
  spawnChance: 0.0032,
  avgSpawns: 0.32,
  spawnTime: "23:40",
  multipliers: null,
  weaknesses: ["Electric", "Grass", "Fighting", "Ground"],
  "prev_evolution": [{
    num: "140",
    pokeName: "Kabuto"
  }]
}, {
  id: 142,
  spawnChance: 0.018,
  avgSpawns: 1.8,
  spawnTime: "23:40",
  multipliers: null,
  weaknesses: ["Water", "Electric", "Ice", "Rock", "Steel"]
}, {
  id: 143,
  spawnChance: 0.016,
  avgSpawns: 1.6,
  spawnTime: "23:40",
  multipliers: null,
  weaknesses: ["Fighting"]
}, {
  id: 144,
  spawnChance: 0,
  avgSpawns: 0,
  spawnTime: "N/A",
  multipliers: null,
  weaknesses: ["Fire", "Electric", "Rock", "Steel"]
}, {
  id: 145,
  spawnChance: 0,
  avgSpawns: 0,
  spawnTime: "N/A",
  multipliers: null,
  weaknesses: ["Ice", "Rock"]
}, {
  id: 146,
  spawnChance: 0,
  avgSpawns: 0,
  spawnTime: "N/A",
  multipliers: null,
  weaknesses: ["Water", "Electric", "Rock"]
}, {
  id: 147,
  spawnChance: 0.30,
  avgSpawns: 30,
  spawnTime: "06:41",
  multipliers: [
    1.83,
    1.84
  ],
  weaknesses: ["Ice", "Dragon", "Fairy"],
  nextEvolution: [{
    num: "148",
    pokeName: "Dragonair"
  }, {
    num: "149",
    pokeName: "Dragonite"
  }]
}, {
  id: 148,
  spawnChance: 0.02,
  avgSpawns: 2,
  spawnTime: "11:57",
  multipliers: [2.05],
  weaknesses: ["Ice", "Dragon", "Fairy"],
  "prev_evolution": [{
    num: "147",
    pokeName: "Dratini"
  }],
  nextEvolution: [{
    num: "149",
    pokeName: "Dragonite"
  }]
}, {
  id: 149,
  spawnChance: 0.0011,
  avgSpawns: 0.11,
  spawnTime: "23:38",
  multipliers: null,
  weaknesses: ["Ice", "Rock", "Dragon", "Fairy"],
  "prev_evolution": [{
    num: "147",
    pokeName: "Dratini"
  }, {
    num: "148",
    pokeName: "Dragonair"
  }]
}, {
  id: 150,
  spawnChance: 0,
  avgSpawns: 0,
  spawnTime: "N/A",
  multipliers: null,
  weaknesses: ["Bug", "Ghost", "Dark"]
}, {
  id: 151,
  spawnChance: 0,
  avgSpawns: 0,
  spawnTime: "N/A",
  multipliers: null,
  weaknesses: ["Bug", "Ghost", "Dark"]
}]
const pokedex = [{
  num: "001",
  name: "Bulbasaur",
  img: "http://www.serebii.net/pokemongo/pokemon/001.png",
  pokeType: ["Grass", "Poison"],
  height: "0.71 m",
  weigth: "6.9 kg",
  candy: "Bulbasaur Candy",
  candyCount: 25,
  egg: "2 km",
}, {
  num: "002",
  name: "Ivysaur",
  img: "http://www.serebii.net/pokemongo/pokemon/002.png",
  pokeType: ["Grass", "Poison"],
  height: "0.99 m",
  weigth: "13.0 kg",
  candy: "Bulbasaur Candy",
  candyCount: 100,
  egg: "Not in Eggs",
}, {
  num: "003",
  name: "Venusaur",
  img: "http://www.serebii.net/pokemongo/pokemon/003.png",
  pokeType: ["Grass", "Poison"],
  height: "2.01 m",
  weigth: "100.0 kg",
  candy: "Bulbasaur Candy",
  egg: "Not in Eggs",
}, {
  num: "004",
  name: "Charmander",
  img: "http://www.serebii.net/pokemongo/pokemon/004.png",
  pokeType: ["Fire"],
  height: "0.61 m",
  weigth: "8.5 kg",
  candy: "Charmander Candy",
  candyCount: 25,
  egg: "2 km",
}, {
  num: "005",
  name: "Charmeleon",
  img: "http://www.serebii.net/pokemongo/pokemon/005.png",
  pokeType: ["Fire"],
  height: "1.09 m",
  weigth: "19.0 kg",
  candy: "Charmander Candy",
  candyCount: 100,
  egg: "Not in Eggs",
}, {
  num: "006",
  name: "Charizard",
  img: "http://www.serebii.net/pokemongo/pokemon/006.png",
  pokeType: ["Fire", "Flying"],
  height: "1.70 m",
  weigth: "90.5 kg",
  candy: "Charmander Candy",
  egg: "Not in Eggs",
}, {
  num: "007",
  name: "Squirtle",
  img: "http://www.serebii.net/pokemongo/pokemon/007.png",
  pokeType: ["Water"],
  height: "0.51 m",
  weigth: "9.0 kg",
  candy: "Squirtle Candy",
  candyCount: 25,
  egg: "2 km",
}, {
  num: "008",
  name: "Wartortle",
  img: "http://www.serebii.net/pokemongo/pokemon/008.png",
  pokeType: ["Water"],
  height: "0.99 m",
  weigth: "22.5 kg",
  candy: "Squirtle Candy",
  candyCount: 100,
  egg: "Not in Eggs",
}, {
  num: "009",
  name: "Blastoise",
  img: "http://www.serebii.net/pokemongo/pokemon/009.png",
  pokeType: ["Water"],
  height: "1.60 m",
  weigth: "85.5 kg",
  candy: "Squirtle Candy",
  egg: "Not in Eggs",
}, {
  num: "010",
  name: "Caterpie",
  img: "http://www.serebii.net/pokemongo/pokemon/010.png",
  pokeType: ["Bug"],
  height: "0.30 m",
  weigth: "2.9 kg",
  candy: "Caterpie Candy",
  candyCount: 12,
  egg: "2 km",
}, {
  num: "011",
  name: "Metapod",
  img: "http://www.serebii.net/pokemongo/pokemon/011.png",
  pokeType: ["Bug"],
  height: "0.71 m",
  weigth: "9.9 kg",
  candy: "Caterpie Candy",
  candyCount: 50,
  egg: "Not in Eggs",
}, {
  num: "012",
  name: "Butterfree",
  img: "http://www.serebii.net/pokemongo/pokemon/012.png",
  pokeType: ["Bug", "Flying"],
  height: "1.09 m",
  weigth: "32.0 kg",
  candy: "Caterpie Candy",
  egg: "Not in Eggs",
}, {
  num: "013",
  name: "Weedle",
  img: "http://www.serebii.net/pokemongo/pokemon/013.png",
  pokeType: ["Bug", "Poison"],
  height: "0.30 m",
  weigth: "3.2 kg",
  candy: "Weedle Candy",
  candyCount: 12,
  egg: "2 km",
}, {
  num: "014",
  name: "Kakuna",
  img: "http://www.serebii.net/pokemongo/pokemon/014.png",
  pokeType: ["Bug", "Poison"],
  height: "0.61 m",
  weigth: "10.0 kg",
  candy: "Weedle Candy",
  candyCount: 50,
}, {
  num: "015",
  name: "Beedrill",
  img: "http://www.serebii.net/pokemongo/pokemon/015.png",
  pokeType: ["Bug", "Poison"],
  height: "0.99 m",
  weigth: "29.5 kg",
  candy: "Weedle Candy",
  egg: "Not in Eggs",
}, {
  num: "016",
  name: "Pidgey",
  img: "http://www.serebii.net/pokemongo/pokemon/016.png",
  pokeType: ["Normal", "Flying"],
  height: "0.30 m",
  weigth: "1.8 kg",
  candy: "Pidgey Candy",
  candyCount: 12,
  egg: "2 km",
}, {
  num: "017",
  name: "Pidgeotto",
  img: "http://www.serebii.net/pokemongo/pokemon/017.png",
  pokeType: ["Normal", "Flying"],
  height: "1.09 m",
  weigth: "30.0 kg",
  candy: "Pidgey Candy",
  candyCount: 50,
  egg: "Not in Eggs",
}, {
  num: "018",
  name: "Pidgeot",
  img: "http://www.serebii.net/pokemongo/pokemon/018.png",
  pokeType: ["Normal", "Flying"],
  height: "1.50 m",
  weigth: "39.5 kg",
  candy: "Pidgey Candy",
  egg: "Not in Eggs",
}, {
  num: "019",
  name: "Rattata",
  img: "http://www.serebii.net/pokemongo/pokemon/019.png",
  pokeType: ["Normal"],
  height: "0.30 m",
  weigth: "3.5 kg",
  candy: "Rattata Candy",
  candyCount: 25,
  egg: "2 km",
}, {
  num: "020",
  name: "Raticate",
  img: "http://www.serebii.net/pokemongo/pokemon/020.png",
  pokeType: ["Normal"],
  height: "0.71 m",
  weigth: "18.5 kg",
  candy: "Rattata Candy",
  egg: "Not in Eggs",
}, {
  num: "021",
  name: "Spearow",
  img: "http://www.serebii.net/pokemongo/pokemon/021.png",
  pokeType: ["Normal", "Flying"],
  height: "0.30 m",
  weigth: "2.0 kg",
  candy: "Spearow Candy",
  candyCount: 50,
  egg: "2 km",
}, {
  num: "022",
  name: "Fearow",
  img: "http://www.serebii.net/pokemongo/pokemon/022.png",
  pokeType: ["Normal", "Flying"],
  height: "1.19 m",
  weigth: "38.0 kg",
  candy: "Spearow Candy",
  egg: "Not in Eggs",
}, {
  num: "023",
  name: "Ekans",
  img: "http://www.serebii.net/pokemongo/pokemon/023.png",
  pokeType: ["Poison"],
  height: "2.01 m",
  weigth: "6.9 kg",
  candy: "Ekans Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "024",
  name: "Arbok",
  img: "http://www.serebii.net/pokemongo/pokemon/024.png",
  pokeType: ["Poison"],
  height: "3.51 m",
  weigth: "65.0 kg",
  candy: "Ekans Candy",
  egg: "Not in Eggs",
}, {
  num: "025",
  name: "Pikachu",
  img: "http://www.serebii.net/pokemongo/pokemon/025.png",
  pokeType: ["Electric"],
  height: "0.41 m",
  weigth: "6.0 kg",
  candy: "Pikachu Candy",
  candyCount: 50,
  egg: "2 km",
}, {
  num: "026",
  name: "Raichu",
  img: "http://www.serebii.net/pokemongo/pokemon/026.png",
  pokeType: ["Electric"],
  height: "0.79 m",
  weigth: "30.0 kg",
  candy: "Pikachu Candy",
  egg: "Not in Eggs",
}, {
  num: "027",
  name: "Sandshrew",
  img: "http://www.serebii.net/pokemongo/pokemon/027.png",
  pokeType: ["Ground"],
  height: "0.61 m",
  weigth: "12.0 kg",
  candy: "Sandshrew Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "028",
  name: "Sandslash",
  img: "http://www.serebii.net/pokemongo/pokemon/028.png",
  pokeType: ["Ground"],
  height: "0.99 m",
  weigth: "29.5 kg",
  candy: "Sandshrew Candy",
  egg: "Not in Eggs",
}, {
  num: "029",
  name: "Nidoran ♀ (Female)",
  img: "http://www.serebii.net/pokemongo/pokemon/029.png",
  pokeType: ["Poison"],
  height: "0.41 m",
  weigth: "7.0 kg",
  candy: "Nidoran ♀ (Female) Candy",
  candyCount: 25,
  egg: "5 km",
}, {
  num: "030",
  name: "Nidorina",
  img: "http://www.serebii.net/pokemongo/pokemon/030.png",
  pokeType: ["Poison"],
  height: "0.79 m",
  weigth: "20.0 kg",
  candy: "Nidoran ♀ (Female) Candy",
  candyCount: 100,
  egg: "Not in Eggs",
}, {
  num: "031",
  name: "Nidoqueen",
  img: "http://www.serebii.net/pokemongo/pokemon/031.png",
  pokeType: ["Poison", "Ground"],
  height: "1.30 m",
  weigth: "60.0 kg",
  candy: "Nidoran ♀ (Female) Candy",
  egg: "Not in Eggs",
}, {
  num: "032",
  name: "Nidoran ♂ (Male)",
  img: "http://www.serebii.net/pokemongo/pokemon/032.png",
  pokeType: ["Poison"],
  height: "0.51 m",
  weigth: "9.0 kg",
  candy: "Nidoran ♂ (Male) Candy",
  candyCount: 25,
  egg: "5 km",
}, {
  num: "033",
  name: "Nidorino",
  img: "http://www.serebii.net/pokemongo/pokemon/033.png",
  pokeType: ["Poison"],
  height: "0.89 m",
  weigth: "19.5 kg",
  candy: "Nidoran ♂ (Male) Candy",
  candyCount: 100,
  egg: "Not in Eggs",
}, {
  num: "034",
  name: "Nidoking",
  img: "http://www.serebii.net/pokemongo/pokemon/034.png",
  pokeType: ["Poison", "Ground"],
  height: "1.40 m",
  weigth: "62.0 kg",
  candy: "Nidoran ♂ (Male) Candy",
  egg: "Not in Eggs",
}, {
  num: "035",
  name: "Clefairy",
  img: "http://www.serebii.net/pokemongo/pokemon/035.png",
  pokeType: ["Normal"],
  height: "0.61 m",
  weigth: "7.5 kg",
  candy: "Clefairy Candy",
  candyCount: 50,
  egg: "2 km",
}, {
  num: "036",
  name: "Clefable",
  img: "http://www.serebii.net/pokemongo/pokemon/036.png",
  pokeType: ["Normal"],
  height: "1.30 m",
  weigth: "40.0 kg",
  candy: "Clefairy Candy",
  egg: "Not in Eggs",
}, {
  num: "037",
  name: "Vulpix",
  img: "http://www.serebii.net/pokemongo/pokemon/037.png",
  pokeType: ["Fire"],
  height: "0.61 m",
  weigth: "9.9 kg",
  candy: "Vulpix Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "038",
  name: "Ninetales",
  img: "http://www.serebii.net/pokemongo/pokemon/038.png",
  pokeType: ["Fire"],
  height: "1.09 m",
  weigth: "19.9 kg",
  candy: "Vulpix Candy",
  egg: "Not in Eggs",
}, {
  num: "039",
  name: "Jigglypuff",
  img: "http://www.serebii.net/pokemongo/pokemon/039.png",
  pokeType: ["Normal"],
  height: "0.51 m",
  weigth: "5.5 kg",
  candy: "Jigglypuff Candy",
  candyCount: 50,
  egg: "2 km",
}, {
  num: "040",
  name: "Wigglytuff",
  img: "http://www.serebii.net/pokemongo/pokemon/040.png",
  pokeType: ["Normal"],
  height: "0.99 m",
  weigth: "12.0 kg",
  candy: "Jigglypuff Candy",
  egg: "Not in Eggs",
}, {
  num: "041",
  name: "Zubat",
  img: "http://www.serebii.net/pokemongo/pokemon/041.png",
  pokeType: ["Poison", "Flying"],
  height: "0.79 m",
  weigth: "7.5 kg",
  candy: "Zubat Candy",
  candyCount: 50,
  egg: "2 km",
}, {
  num: "042",
  name: "Golbat",
  img: "http://www.serebii.net/pokemongo/pokemon/042.png",
  pokeType: ["Poison", "Flying"],
  height: "1.60 m",
  weigth: "55.0 kg",
  candy: "Zubat Candy",
  egg: "Not in Eggs",
}, {
  num: "043",
  name: "Oddish",
  img: "http://www.serebii.net/pokemongo/pokemon/043.png",
  pokeType: ["Grass", "Poison"],
  height: "0.51 m",
  weigth: "5.4 kg",
  candy: "Oddish Candy",
  candyCount: 25,
  egg: "5 km",
}, {
  num: "044",
  name: "Gloom",
  img: "http://www.serebii.net/pokemongo/pokemon/044.png",
  pokeType: ["Grass", "Poison"],
  height: "0.79 m",
  weigth: "8.6 kg",
  candy: "Oddish Candy",
  candyCount: 100,
  egg: "Not in Eggs",
}, {
  num: "045",
  name: "Vileplume",
  img: "http://www.serebii.net/pokemongo/pokemon/045.png",
  pokeType: ["Grass", "Poison"],
  height: "1.19 m",
  weigth: "18.6 kg",
  candy: "Oddish Candy",
  egg: "Not in Eggs",
}, {
  num: "046",
  name: "Paras",
  img: "http://www.serebii.net/pokemongo/pokemon/046.png",
  pokeType: ["Bug", "Grass"],
  height: "0.30 m",
  weigth: "5.4 kg",
  candy: "Paras Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "047",
  name: "Parasect",
  img: "http://www.serebii.net/pokemongo/pokemon/047.png",
  pokeType: ["Bug", "Grass"],
  height: "0.99 m",
  weigth: "29.5 kg",
  candy: "Paras Candy",
  egg: "Not in Eggs",
}, {
  num: "048",
  name: "Venonat",
  img: "http://www.serebii.net/pokemongo/pokemon/048.png",
  pokeType: ["Bug", "Poison"],
  height: "0.99 m",
  weigth: "30.0 kg",
  candy: "Venonat Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "049",
  name: "Venomoth",
  img: "http://www.serebii.net/pokemongo/pokemon/049.png",
  pokeType: ["Bug", "Poison"],
  height: "1.50 m",
  weigth: "12.5 kg",
  candy: "Venonat Candy",
  egg: "Not in Eggs",
}, {
  num: "050",
  name: "Diglett",
  img: "http://www.serebii.net/pokemongo/pokemon/050.png",
  pokeType: ["Ground"],
  height: "0.20 m",
  weigth: "0.8 kg",
  candy: "Diglett Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "051",
  name: "Dugtrio",
  img: "http://www.serebii.net/pokemongo/pokemon/051.png",
  pokeType: ["Ground"],
  height: "0.71 m",
  weigth: "33.3 kg",
  candy: "Dugtrio",
  egg: "Not in Eggs",
}, {
  num: "052",
  name: "Meowth",
  img: "http://www.serebii.net/pokemongo/pokemon/052.png",
  pokeType: ["Normal"],
  height: "0.41 m",
  weigth: "4.2 kg",
  candy: "Meowth Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "053",
  name: "Persian",
  img: "http://www.serebii.net/pokemongo/pokemon/053.png",
  pokeType: ["Normal"],
  height: "0.99 m",
  weigth: "32.0 kg",
  candy: "Meowth Candy",
  egg: "Not in Eggs",
}, {
  num: "054",
  name: "Psyduck",
  img: "http://www.serebii.net/pokemongo/pokemon/054.png",
  pokeType: ["Water"],
  height: "0.79 m",
  weigth: "19.6 kg",
  candy: "Psyduck Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "055",
  name: "Golduck",
  img: "http://www.serebii.net/pokemongo/pokemon/055.png",
  pokeType: ["Water"],
  height: "1.70 m",
  weigth: "76.6 kg",
  candy: "Psyduck Candy",
  egg: "Not in Eggs",
}, {
  num: "056",
  name: "Mankey",
  img: "http://www.serebii.net/pokemongo/pokemon/056.png",
  pokeType: ["Fighting"],
  height: "0.51 m",
  weigth: "28.0 kg",
  candy: "Mankey Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "057",
  name: "Primeape",
  img: "http://www.serebii.net/pokemongo/pokemon/057.png",
  pokeType: ["Fighting"],
  height: "0.99 m",
  weigth: "32.0 kg",
  candy: "Mankey Candy",
  egg: "Not in Eggs",
}, {
  num: "058",
  name: "Growlithe",
  img: "http://www.serebii.net/pokemongo/pokemon/058.png",
  pokeType: ["Fire"],
  height: "0.71 m",
  weigth: "19.0 kg",
  candy: "Growlithe Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "059",
  name: "Arcanine",
  img: "http://www.serebii.net/pokemongo/pokemon/059.png",
  pokeType: ["Fire"],
  height: "1.91 m",
  weigth: "155.0 kg",
  candy: "Growlithe Candy",
  egg: "Not in Eggs",
}, {
  num: "060",
  name: "Poliwag",
  img: "http://www.serebii.net/pokemongo/pokemon/060.png",
  pokeType: ["Water"],
  height: "0.61 m",
  weigth: "12.4 kg",
  candy: "Poliwag Candy",
  candyCount: 25,
  egg: "5 km",
}, {
  num: "061",
  name: "Poliwhirl",
  img: "http://www.serebii.net/pokemongo/pokemon/061.png",
  pokeType: ["Water"],
  height: "0.99 m",
  weigth: "20.0 kg",
  candy: "Poliwag Candy",
  candyCount: 100,
  egg: "Not in Eggs",
}, {
  num: "062",
  name: "Poliwrath",
  img: "http://www.serebii.net/pokemongo/pokemon/062.png",
  pokeType: ["Water", "Fighting"],
  height: "1.30 m",
  weigth: "54.0 kg",
  candy: "Poliwag Candy",
  egg: "Not in Eggs",
}, {
  num: "063",
  name: "Abra",
  img: "http://www.serebii.net/pokemongo/pokemon/063.png",
  pokeType: ["Psychic"],
  height: "0.89 m",
  weigth: "19.5 kg",
  candy: "Abra Candy",
  candyCount: 25,
  egg: "5 km",
}, {
  num: "064",
  name: "Kadabra",
  img: "http://www.serebii.net/pokemongo/pokemon/064.png",
  pokeType: ["Psychic"],
  height: "1.30 m",
  weigth: "56.5 kg",
  candy: "Abra Candy",
  candyCount: 100,
  egg: "Not in Eggs",
}, {
  num: "065",
  name: "Alakazam",
  img: "http://www.serebii.net/pokemongo/pokemon/065.png",
  pokeType: ["Psychic"],
  height: "1.50 m",
  weigth: "48.0 kg",
  candy: "Abra Candy",
  egg: "Not in Eggs",
}, {
  num: "066",
  name: "Machop",
  img: "http://www.serebii.net/pokemongo/pokemon/066.png",
  pokeType: ["Fighting"],
  height: "0.79 m",
  weigth: "19.5 kg",
  candy: "Machop Candy",
  candyCount: 25,
  egg: "5 km",
}, {
  num: "067",
  name: "Machoke",
  img: "http://www.serebii.net/pokemongo/pokemon/067.png",
  pokeType: ["Fighting"],
  height: "1.50 m",
  weigth: "70.5 kg",
  candy: "Machop Candy",
  candyCount: 100,
  egg: "Not in Eggs",
}, {
  num: "068",
  name: "Machamp",
  img: "http://www.serebii.net/pokemongo/pokemon/068.png",
  pokeType: ["Fighting"],
  height: "1.60 m",
  weigth: "130.0 kg",
  candy: "Machop Candy",
  egg: "Not in Eggs",
}, {
  num: "069",
  name: "Bellsprout",
  img: "http://www.serebii.net/pokemongo/pokemon/069.png",
  pokeType: ["Grass", "Poison"],
  height: "0.71 m",
  weigth: "4.0 kg",
  candy: "Bellsprout Candy",
  candyCount: 25,
  egg: "5 km",
}, {
  num: "070",
  name: "Weepinbell",
  img: "http://www.serebii.net/pokemongo/pokemon/070.png",
  pokeType: ["Grass", "Poison"],
  height: "0.99 m",
  weigth: "6.4 kg",
  candy: "Bellsprout Candy",
  candyCount: 100,
  egg: "Not in Eggs",
}, {
  num: "071",
  name: "Victreebel",
  img: "http://www.serebii.net/pokemongo/pokemon/071.png",
  pokeType: ["Grass", "Poison"],
  height: "1.70 m",
  weigth: "15.5 kg",
  candy: "Bellsprout Candy",
  egg: "Not in Eggs",
}, {
  num: "072",
  name: "Tentacool",
  img: "http://www.serebii.net/pokemongo/pokemon/072.png",
  pokeType: ["Water", "Poison"],
  height: "0.89 m",
  weigth: "45.5 kg",
  candy: "Tentacool Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "073",
  name: "Tentacruel",
  img: "http://www.serebii.net/pokemongo/pokemon/073.png",
  pokeType: ["Water", "Poison"],
  height: "1.60 m",
  weigth: "55.0 kg",
  candy: "Tentacool Candy",
  egg: "Not in Eggs",
}, {
  num: "074",
  name: "Geodude",
  img: "http://www.serebii.net/pokemongo/pokemon/074.png",
  pokeType: ["Rock", "Ground"],
  height: "0.41 m",
  weigth: "20.0 kg",
  candy: "Geodude Candy",
  candyCount: 25,
  egg: "2 km",
}, {
  num: "075",
  name: "Graveler",
  img: "http://www.serebii.net/pokemongo/pokemon/075.png",
  pokeType: ["Rock", "Ground"],
  height: "0.99 m",
  weigth: "105.0 kg",
  candy: "Geodude Candy",
  candyCount: 100,
  egg: "Not in Eggs",
}, {
  num: "076",
  name: "Golem",
  img: "http://www.serebii.net/pokemongo/pokemon/076.png",
  pokeType: ["Rock", "Ground"],
  height: "1.40 m",
  weigth: "300.0 kg",
  candy: "Geodude Candy",
  egg: "Not in Eggs",
}, {
  num: "077",
  name: "Ponyta",
  img: "http://www.serebii.net/pokemongo/pokemon/077.png",
  pokeType: ["Fire"],
  height: "0.99 m",
  weigth: "30.0 kg",
  candy: "Ponyta Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "078",
  name: "Rapidash",
  img: "http://www.serebii.net/pokemongo/pokemon/078.png",
  pokeType: ["Fire"],
  height: "1.70 m",
  weigth: "95.0 kg",
  candy: "Ponyta Candy",
  egg: "Not in Eggs",
}, {
  num: "079",
  name: "Slowpoke",
  img: "http://www.serebii.net/pokemongo/pokemon/079.png",
  pokeType: ["Water", "Psychic"],
  height: "1.19 m",
  weigth: "36.0 kg",
  candy: "Slowpoke Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "080",
  name: "Slowbro",
  img: "http://www.serebii.net/pokemongo/pokemon/080.png",
  pokeType: ["Water", "Psychic"],
  height: "1.60 m",
  weigth: "78.5 kg",
  candy: "Slowpoke Candy",
  egg: "Not in Eggs",
}, {
  num: "081",
  name: "Magnemite",
  img: "http://www.serebii.net/pokemongo/pokemon/081.png",
  pokeType: ["Electric"],
  height: "0.30 m",
  weigth: "6.0 kg",
  candy: "Magnemite Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "082",
  name: "Magneton",
  img: "http://www.serebii.net/pokemongo/pokemon/082.png",
  pokeType: ["Electric"],
  height: "0.99 m",
  weigth: "60.0 kg",
  candy: "Magnemite Candy",
  egg: "Not in Eggs",
}, {
  num: "083",
  name: "Farfetch'd",
  img: "http://www.serebii.net/pokemongo/pokemon/083.png",
  pokeType: ["Normal", "Flying"],
  height: "0.79 m",
  weigth: "15.0 kg",
  candy: "None",
  egg: "5 km",
}, {
  num: "084",
  name: "Doduo",
  img: "http://www.serebii.net/pokemongo/pokemon/084.png",
  pokeType: ["Normal", "Flying"],
  height: "1.40 m",
  weigth: "39.2 kg",
  candy: "Doduo Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "085",
  name: "Dodrio",
  img: "http://www.serebii.net/pokemongo/pokemon/085.png",
  pokeType: ["Normal", "Flying"],
  height: "1.80 m",
  weigth: "85.2 kg",
  candy: "Doduo Candy",
  egg: "Not in Eggs",
}, {
  num: "086",
  name: "Seel",
  img: "http://www.serebii.net/pokemongo/pokemon/086.png",
  pokeType: ["Water"],
  height: "1.09 m",
  weigth: "90.0 kg",
  candy: "Seel Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "087",
  name: "Dewgong",
  img: "http://www.serebii.net/pokemongo/pokemon/087.png",
  pokeType: ["Water", "Ice"],
  height: "1.70 m",
  weigth: "120.0 kg",
  candy: "Seel Candy",
  egg: "Not in Eggs",
}, {
  num: "088",
  name: "Grimer",
  img: "http://www.serebii.net/pokemongo/pokemon/088.png",
  pokeType: ["Poison"],
  height: "0.89 m",
  weigth: "30.0 kg",
  candy: "Grimer Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "089",
  name: "Muk",
  img: "http://www.serebii.net/pokemongo/pokemon/089.png",
  pokeType: ["Poison"],
  height: "1.19 m",
  weigth: "30.0 kg",
  candy: "Grimer Candy",
  egg: "Not in Eggs",
}, {
  num: "090",
  name: "Shellder",
  img: "http://www.serebii.net/pokemongo/pokemon/090.png",
  pokeType: ["Water"],
  height: "0.30 m",
  weigth: "4.0 kg",
  candy: "Shellder Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "091",
  name: "Cloyster",
  img: "http://www.serebii.net/pokemongo/pokemon/091.png",
  pokeType: ["Water", "Ice"],
  height: "1.50 m",
  weigth: "132.5 kg",
  candy: "Shellder Candy",
  egg: "Not in Eggs",
}, {
  num: "092",
  name: "Gastly",
  img: "http://www.serebii.net/pokemongo/pokemon/092.png",
  pokeType: ["Ghost", "Poison"],
  height: "1.30 m",
  weigth: "0.1 kg",
  candy: "Gastly Candy",
  candyCount: 25,
  egg: "5 km",
}, {
  num: "093",
  name: "Haunter",
  img: "http://www.serebii.net/pokemongo/pokemon/093.png",
  pokeType: ["Ghost", "Poison"],
  height: "1.60 m",
  weigth: "0.1 kg",
  candy: "Gastly Candy",
  candyCount: 100,
  egg: "Not in Eggs",
}, {
  num: "094",
  name: "Gengar",
  img: "http://www.serebii.net/pokemongo/pokemon/094.png",
  pokeType: ["Ghost", "Poison"],
  height: "1.50 m",
  weigth: "40.5 kg",
  candy: "Gastly Candy",
  egg: "Not in Eggs",
}, {
  num: "095",
  name: "Onix",
  img: "http://www.serebii.net/pokemongo/pokemon/095.png",
  pokeType: ["Rock", "Ground"],
  height: "8.79 m",
  weigth: "210.0 kg",
  candy: "None",
  egg: "10 km",
}, {
  num: "096",
  name: "Drowzee",
  img: "http://www.serebii.net/pokemongo/pokemon/096.png",
  pokeType: ["Psychic"],
  height: "0.99 m",
  weigth: "32.4 kg",
  candy: "Drowzee Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "097",
  name: "Hypno",
  img: "http://www.serebii.net/pokemongo/pokemon/097.png",
  pokeType: ["Psychic"],
  height: "1.60 m",
  weigth: "75.6 kg",
  candy: "Drowzee Candy",
  egg: "Not in Eggs",
}, {
  num: "098",
  name: "Krabby",
  img: "http://www.serebii.net/pokemongo/pokemon/098.png",
  pokeType: ["Water"],
  height: "0.41 m",
  weigth: "6.5 kg",
  candy: "Krabby Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "099",
  name: "Kingler",
  img: "http://www.serebii.net/pokemongo/pokemon/099.png",
  pokeType: ["Water"],
  height: "1.30 m",
  weigth: "60.0 kg",
  candy: "Krabby Candy",
  egg: "Not in Eggs",
}, {
  num: "100",
  name: "Voltorb",
  img: "http://www.serebii.net/pokemongo/pokemon/100.png",
  pokeType: ["Electric"],
  height: "0.51 m",
  weigth: "10.4 kg",
  candy: "Voltorb Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "101",
  name: "Electrode",
  img: "http://www.serebii.net/pokemongo/pokemon/101.png",
  pokeType: ["Electric"],
  height: "1.19 m",
  weigth: "66.6 kg",
  candy: "Voltorb Candy",
  egg: "Not in Eggs",
}, {
  num: "102",
  name: "Exeggcute",
  img: "http://www.serebii.net/pokemongo/pokemon/102.png",
  pokeType: ["Grass", "Psychic"],
  height: "0.41 m",
  weigth: "2.5 kg",
  candy: "Exeggcute Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "103",
  name: "Exeggutor",
  img: "http://www.serebii.net/pokemongo/pokemon/103.png",
  pokeType: ["Grass", "Psychic"],
  height: "2.01 m",
  weigth: "120.0 kg",
  candy: "Exeggcute Candy",
  egg: "Not in Eggs",
}, {
  num: "104",
  name: "Cubone",
  img: "http://www.serebii.net/pokemongo/pokemon/104.png",
  pokeType: ["Ground"],
  height: "0.41 m",
  weigth: "6.5 kg",
  candy: "Cubone Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "105",
  name: "Marowak",
  img: "http://www.serebii.net/pokemongo/pokemon/105.png",
  pokeType: ["Ground"],
  height: "0.99 m",
  weigth: "45.0 kg",
  candy: "Cubone Candy",
  egg: "Not in Eggs",
}, {
  num: "106",
  name: "Hitmonlee",
  img: "http://www.serebii.net/pokemongo/pokemon/106.png",
  pokeType: ["Fighting"],
  height: "1.50 m",
  weigth: "49.8 kg",
  candy: "None",
  egg: "10 km",
}, {
  num: "107",
  name: "Hitmonchan",
  img: "http://www.serebii.net/pokemongo/pokemon/107.png",
  pokeType: ["Fighting"],
  height: "1.40 m",
  weigth: "50.2 kg",
  candy: "None",
  egg: "10 km",
}, {
  num: "108",
  name: "Lickitung",
  img: "http://www.serebii.net/pokemongo/pokemon/108.png",
  pokeType: ["Normal"],
  height: "1.19 m",
  weigth: "65.5 kg",
  candy: "None",
  egg: "5 km",
}, {
  num: "109",
  name: "Koffing",
  img: "http://www.serebii.net/pokemongo/pokemon/109.png",
  pokeType: ["Poison"],
  height: "0.61 m",
  weigth: "1.0 kg",
  candy: "Koffing Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "110",
  name: "Weezing",
  img: "http://www.serebii.net/pokemongo/pokemon/110.png",
  pokeType: ["Poison"],
  height: "1.19 m",
  weigth: "9.5 kg",
  candy: "Koffing Candy",
  egg: "Not in Eggs",
}, {
  num: "111",
  name: "Rhyhorn",
  img: "http://www.serebii.net/pokemongo/pokemon/111.png",
  pokeType: ["Ground", "Rock"],
  height: "0.99 m",
  weigth: "115.0 kg",
  candy: "Rhyhorn Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "112",
  name: "Rhydon",
  img: "http://www.serebii.net/pokemongo/pokemon/112.png",
  pokeType: ["Ground", "Rock"],
  height: "1.91 m",
  weigth: "120.0 kg",
  candy: "Rhyhorn Candy",
  egg: "Not in Eggs",
}, {
  num: "113",
  name: "Chansey",
  img: "http://www.serebii.net/pokemongo/pokemon/113.png",
  pokeType: ["Normal"],
  height: "1.09 m",
  weigth: "34.6 kg",
  candy: "None",
  egg: "10 km",
}, {
  num: "114",
  name: "Tangela",
  img: "http://www.serebii.net/pokemongo/pokemon/114.png",
  pokeType: ["Grass"],
  height: "0.99 m",
  weigth: "35.0 kg",
  candy: "None",
  egg: "5 km",
}, {
  num: "115",
  name: "Kangaskhan",
  img: "http://www.serebii.net/pokemongo/pokemon/115.png",
  pokeType: ["Normal"],
  height: "2.21 m",
  weigth: "80.0 kg",
  candy: "None",
  egg: "5 km",
}, {
  num: "116",
  name: "Horsea",
  img: "http://www.serebii.net/pokemongo/pokemon/116.png",
  pokeType: ["Water"],
  height: "0.41 m",
  weigth: "8.0 kg",
  candy: "Horsea Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "117",
  name: "Seadra",
  img: "http://www.serebii.net/pokemongo/pokemon/117.png",
  pokeType: ["Water"],
  height: "1.19 m",
  weigth: "25.0 kg",
  candy: "Horsea Candy",
  egg: "Not in Eggs",
}, {
  num: "118",
  name: "Goldeen",
  img: "http://www.serebii.net/pokemongo/pokemon/118.png",
  pokeType: ["Water"],
  height: "0.61 m",
  weigth: "15.0 kg",
  candy: "Goldeen Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "119",
  name: "Seaking",
  img: "http://www.serebii.net/pokemongo/pokemon/119.png",
  pokeType: ["Water"],
  height: "1.30 m",
  weigth: "39.0 kg",
  candy: "Goldeen Candy",
  egg: "Not in Eggs",
}, {
  num: "120",
  name: "Staryu",
  img: "http://www.serebii.net/pokemongo/pokemon/120.png",
  pokeType: ["Water"],
  height: "0.79 m",
  weigth: "34.5 kg",
  candy: "Staryu Candy",
  candyCount: 50,
  egg: "5 km",
}, {
  num: "121",
  name: "Starmie",
  img: "http://www.serebii.net/pokemongo/pokemon/121.png",
  pokeType: ["Water", "Psychic"],
  height: "1.09 m",
  weigth: "80.0 kg",
  candy: "Staryu Candy",
  egg: "Not in Eggs",
}, {
  num: "122",
  name: "Mr. Mime",
  img: "http://www.serebii.net/pokemongo/pokemon/122.png",
  pokeType: ["Psychic"],
  height: "1.30 m",
  weigth: "54.5 kg",
  candy: "None",
  egg: "10 km",
}, {
  num: "123",
  name: "Scyther",
  img: "http://www.serebii.net/pokemongo/pokemon/123.png",
  pokeType: ["Bug", "Flying"],
  height: "1.50 m",
  weigth: "56.0 kg",
  candy: "None",
  egg: "10 km",
}, {
  num: "124",
  name: "Jynx",
  img: "http://www.serebii.net/pokemongo/pokemon/124.png",
  pokeType: ["Ice", "Psychic"],
  height: "1.40 m",
  weigth: "40.6 kg",
  candy: "None",
  egg: "10 km",
}, {
  num: "125",
  name: "Electabuzz",
  img: "http://www.serebii.net/pokemongo/pokemon/125.png",
  pokeType: ["Electric"],
  height: "1.09 m",
  weigth: "30.0 kg",
  candy: "None",
  egg: "10 km",
}, {
  num: "126",
  name: "Magmar",
  img: "http://www.serebii.net/pokemongo/pokemon/126.png",
  pokeType: ["Fire"],
  height: "1.30 m",
  weigth: "44.5 kg",
  candy: "None",
  egg: "10 km",
}, {
  num: "127",
  name: "Pinsir",
  img: "http://www.serebii.net/pokemongo/pokemon/127.png",
  pokeType: ["Bug"],
  height: "1.50 m",
  weigth: "55.0 kg",
  candy: "None",
  egg: "10 km",
}, {
  num: "128",
  name: "Tauros",
  img: "http://www.serebii.net/pokemongo/pokemon/128.png",
  pokeType: ["Normal"],
  height: "1.40 m",
  weigth: "88.4 kg",
  candy: "None",
  egg: "5 km",
}, {
  num: "129",
  name: "Magikarp",
  img: "http://www.serebii.net/pokemongo/pokemon/129.png",
  pokeType: ["Water"],
  height: "0.89 m",
  weigth: "10.0 kg",
  candy: "Magikarp Candy",
  candyCount: 400,
  egg: "2 km",
}, {
  num: "130",
  name: "Gyarados",
  img: "http://www.serebii.net/pokemongo/pokemon/130.png",
  pokeType: ["Water", "Flying"],
  height: "6.50 m",
  weigth: "235.0 kg",
  candy: "Magikarp Candy",
  egg: "Not in Eggs",
}, {
  num: "131",
  name: "Lapras",
  img: "http://www.serebii.net/pokemongo/pokemon/131.png",
  pokeType: ["Water", "Ice"],
  height: "2.49 m",
  weigth: "220.0 kg",
  candy: "None",
  egg: "10 km",
}, {
  num: "132",
  name: "Ditto",
  img: "http://www.serebii.net/pokemongo/pokemon/132.png",
  pokeType: ["Normal"],
  height: "0.30 m",
  weigth: "4.0 kg",
  candy: "None",
  egg: "Not in Eggs",
}, {
  num: "133",
  name: "Eevee",
  img: "http://www.serebii.net/pokemongo/pokemon/133.png",
  pokeType: ["Normal"],
  height: "0.30 m",
  weigth: "6.5 kg",
  candy: "Eevee Candy",
  candyCount: 25,
  egg: "10 km",
}, {
  num: "134",
  name: "Vaporeon",
  img: "http://www.serebii.net/pokemongo/pokemon/134.png",
  pokeType: ["Water"],
  height: "0.99 m",
  weigth: "29.0 kg",
  candy: "Eevee Candy",
  egg: "Not in Eggs",
}, {
  num: "135",
  name: "Jolteon",
  img: "http://www.serebii.net/pokemongo/pokemon/135.png",
  pokeType: ["Electric"],
  height: "0.79 m",
  weigth: "24.5 kg",
  candy: "None",
  egg: "Not in Eggs",
}, {
  num: "136",
  name: "Flareon",
  img: "http://www.serebii.net/pokemongo/pokemon/136.png",
  pokeType: ["Fire"],
  height: "0.89 m",
  weigth: "25.0 kg",
  candy: "Eevee Candy",
  egg: "Not in Eggs",
}, {
  num: "137",
  name: "Porygon",
  img: "http://www.serebii.net/pokemongo/pokemon/137.png",
  pokeType: ["Normal"],
  height: "0.79 m",
  weigth: "36.5 kg",
  candy: "None",
  egg: "5 km",
}, {
  num: "138",
  name: "Omanyte",
  img: "http://www.serebii.net/pokemongo/pokemon/138.png",
  pokeType: ["Rock", "Water"],
  height: "0.41 m",
  weigth: "7.5 kg",
  candy: "Omanyte Candy",
  candyCount: 50,
  egg: "10 km",
}, {
  num: "139",
  name: "Omastar",
  img: "http://www.serebii.net/pokemongo/pokemon/139.png",
  pokeType: ["Rock", "Water"],
  height: "0.99 m",
  weigth: "35.0 kg",
  candy: "None",
  egg: "Omanyte Candy",
}, {
  num: "140",
  name: "Kabuto",
  img: "http://www.serebii.net/pokemongo/pokemon/140.png",
  pokeType: ["Rock", "Water"],
  height: "0.51 m",
  weigth: "11.5 kg",
  candy: "Kabuto Candy",
  candyCount: 50,
  egg: "10 km",
}, {
  num: "141",
  name: "Kabutops",
  img: "http://www.serebii.net/pokemongo/pokemon/141.png",
  pokeType: ["Rock", "Water"],
  height: "1.30 m",
  weigth: "40.5 kg",
  candy: "Kabuto Candy",
  egg: "Not in Eggs",
}, {
  num: "142",
  name: "Aerodactyl",
  img: "http://www.serebii.net/pokemongo/pokemon/142.png",
  pokeType: ["Rock", "Flying"],
  height: "1.80 m",
  weigth: "59.0 kg",
  candy: "None",
  egg: "10 km",
}, {
  num: "143",
  name: "Snorlax",
  img: "http://www.serebii.net/pokemongo/pokemon/143.png",
  pokeType: ["Normal"],
  height: "2.11 m",
  weigth: "460.0 kg",
  candy: "None",
  egg: "10 km",
}, {
  num: "144",
  name: "Articuno",
  img: "http://www.serebii.net/pokemongo/pokemon/144.png",
  pokeType: ["Ice", "Flying"],
  height: "1.70 m",
  weigth: "55.4 kg",
  candy: "None",
  egg: "Not in Eggs",
}, {
  num: "145",
  name: "Zapdos",
  img: "http://www.serebii.net/pokemongo/pokemon/145.png",
  pokeType: ["Electric", "Flying"],
  height: "1.60 m",
  weigth: "52.6 kg",
  candy: "None",
  egg: "Not in Eggs",
}, {
  num: "146",
  name: "Moltres",
  img: "http://www.serebii.net/pokemongo/pokemon/146.png",
  pokeType: ["Fire", "Flying"],
  height: "2.01 m",
  weigth: "60.0 kg",
  candy: "None",
  egg: "Not in Eggs",
}, {
  num: "147",
  name: "Dratini",
  img: "http://www.serebii.net/pokemongo/pokemon/147.png",
  pokeType: ["Dragon"],
  height: "1.80 m",
  weigth: "3.3 kg",
  candy: "Dratini Candy",
  candyCount: 25,
  egg: "10 km",
}, {
  num: "148",
  name: "Dragonair",
  img: "http://www.serebii.net/pokemongo/pokemon/148.png",
  pokeType: ["Dragon"],
  height: "3.99 m",
  weigth: "16.5 kg",
  candy: "Dratini Candy",
  candyCount: 100,
  egg: "Not in Eggs",
}, {
  num: "149",
  name: "Dragonite",
  img: "http://www.serebii.net/pokemongo/pokemon/149.png",
  pokeType: ["Dragon", "Flying"],
  height: "2.21 m",
  weigth: "210.0 kg",
  candy: "Dratini Candy",
  egg: "Not in Eggs",
}, {
  num: "150",
  name: "Mewtwo",
  img: "http://www.serebii.net/pokemongo/pokemon/150.png",
  pokeType: ["Psychic"],
  height: "2.01 m",
  weigth: "122.0 kg",
  candy: "None",
  egg: "Not in Eggs",
}, {
  num: "151",
  name: "Mew",
  img: "http://www.serebii.net/pokemongo/pokemon/151.png",
  pokeType: ["Psychic"],
  height: "0.41 m",
  weigth: "4.0 kg",
  candy: "None",
  egg: "Not in Eggs",
}]
