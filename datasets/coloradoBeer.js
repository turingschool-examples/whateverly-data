const coloradoBeer = [
  {
    name: 'Fortuna',
    brewery: 'Avery Brewing Co.',
    style: [
      'American Wild Ale',
      'Barrel-Aged'
      ],
    abv: 8.1,
    tastingNotes: [
      'sour',
      'salty',
      'tequila',
      'spicy'
      ]
  },
  {
    name: 'The Kaiser',
    brewery: 'Avery Brewing Co.',
    style: [
      'Marzen Lager',
      'Imperial', 
      'Oktoberfest'
      ],
    abv: 10.2,
    tastingNotes: [
      'cherry',
      'prune',
      'molasses',
      'toffee'
      ]
  },
  {
    name: 'Maharaja',
    brewery: 'Avery Brewing Co.',
    style: [
      'Double IPA',
      'Imperial IPA'
      ],
    abv: 10.2,
    tastingNotes: [
      'malty',
      'toasty',
      'toffee',
      'pine',
      'tropical'
      ]
  },
  {
    name: 'Old Jubilation',
    brewery: 'Avery Brewing Co.',
    style: [
      'English Warmer',
      'English Old Ale',
      'English Strong Ale'
      ],
    abv: 8.3,
    tastingNotes: [
      'malty',
      'complex',
      'plum',
      'molasses',
      'toffee'
      ]
  },
  {
    name: 'Tweak',
    brewery: 'Avery Brewing Co.',
    style: [
      'Barrel-Aged',
      'Stout'
      ],
    abv: 17.5,
    tastingNotes: [
      'vanilla',
      'custard',
      'mocha',
      'maple',
      'bourbon'
      ]
  },
  {
    name: 'White Rascal',
    brewery: 'Avery Brewing Co.',
    style: [
      'Belgian Wit',
      'Witbier'
      ],
    abv: 5.6,
    tastingNotes: [
      'dry',
      'coriander',
      'clove'
      ]
  },
  {
    name: 'BBA Here Be Monsters',
    brewery: 'Cerebral Brewing',
    style: [
      'Barrel-Aged',
      'Imperial Stout'
      ],
    abv: 12,
    tastingNotes: [
      'bourbon',
      'chocolate',
      'toffee'
      ]
  },
  {
    name: 'Nightmare on Brett (red wine casks)',
    brewery: 'Crooked Stave',
    style: [
      'Barrel-Aged',
      'Imperial Stout'
      ],
    abv: 9.6,
    tastingNotes: [
      'black cherry',
      'plum',
      'nutty',
      'roasted',
      'oaky',
      'heavy'
      ]
  },
  {
    name: 'Origins',
    brewery: 'Crooked Stave',
    style: [
      'Flanders Red',
      'Sour'
      ],
    abv: 6.5,
    tastingNotes: [
      'tart',
      'sour',
      'berries',
      'dry',
      'oaky'
      ]
  },
  {
    name: 'Surette Provision',
    brewery: 'Crooked Stave',
    style: [
      'Saison',
      'Farmhouse Ale'
      ],
    abv: 6.2,
    tastingNotes: [
      'funky',
      'green apple',
      'citrus',
      'butter',
      'rustic'
      ]
  },
  {
    name: 'Vielle Artisinal Saison',
    brewery: 'Crooked Stave',
    style: [
      'Saison',
      'Farmhouse Ale'
      ],
    abv: 4.2,
    tastingNotes: [
      'funky',
      'green apple',
      'lemon',
      'tangy'
      ]
  },
  {
    name: 'Bligh\'s Barleywine',
    brewery: 'Dry Dock Brewing Co.',
    style: [
      'Barleywine',
      'Barrel-Aged'
      ],
    abv: 10,
    tastingNotes: [
      'brandy',
      'bourbon',
      'syrup',
      'butterscotch'
      ]
  },
  {
    name: 'Big Bad Baptista',
    brewery: 'Epic Brewing Co.',
    style: [
      'Barrel-Aged',
      'Imperial Stout'
      ],
    abv: 12.2,
    tastingNotes: [
      'chocolate',
      'cinnamon',
      'coffee',
      'vanilla'
      ]
  },
  {
    name: 'Double Barrel Big Bad Baptist',
    brewery: 'Epic Brewing Co.',
    style: [
      'Barrel-Aged'
      'Imperial Stout'
      ],
    abv: 12.8,
    tastingNotes: [
      'coffee',
      'syrup',
      'bourbon',
      'smokey',
      'roasted'
      ]
  },
  {
    name: 'BBA Malice and Darkness',
    brewery: 'Fiction Beer Co.',
    style: [
      'Imperial Stout'
      ],
    abv: 14,
    tastingNotes: [
      'roasted',
      'coffee',
      'caramel',
      'oak',
      'dark chocolate',
      'smokey'
      ]
  },
  {
    name: 'Raspberry Provicial',
    brewery: 'Funkwerks',
    style: [
      'American Wild Ale',
      'Sour'
      ],
    abv: 4.2,
    tastingNotes: [
      'sour',
      'tart',
      'raspberry'
      ]
  },
  {
    name: 'Ten',
    brewery: 'Funkwerks',
    style: [
      'Quad Ale',
      'Quadrupel Ale',
      'Belgian'
      ],
    abv: 10,
    tastingNotes: [
      'bready',
      'dark fruit',
      'caramel',
      'toffee'
      ]
  },
  {
    name: 'Fresh Hop Pale Ale',
    brewery: 'Great Divide',
    style: [
      'American Pale Ale'
      'Pale Ale',
      'Fresh Hop Ale'
      ],
    abv: 6.1,
    tastingNotes: [
      'herbal',
      'grass',
      'spicy',
      'dry'
      ]
  },
  {
    name: 'Hoss Oktoberfest Lager',
    brewery: 'Great Divide',
    style: [
      'Marzen Lager',
      'Oktoberfest',
      'Rye Lager'
      ],
    abv: 6.2,
    tastingNotes: [
      'earthy',
      'malty',
      'dry'
      ]
  },
  {
    name: 'St. Vrain',
    brewery: 'Left Hand',
    style: [
      'Belgian',
      'Tripel Ale'
      ],
    abv: 9,
    tastingNotes: [
      'citrus',
      'bright',
      'banana',
      'stone fruit',
      'bready'
      ]
  },
  {
    name: 'Blackberry Barleywine',
    brewery: 'New Belgium',
    style: [
      'Barleywine'
      ],
    abv: 10,
    tastingNotes: [
      'jam',
      'blackberry',
      'rich'
      ]
  },
  {
    name: 'La Folie',
    brewery: 'New Belgium',
    style: [
      'Oud Bruin',
      'Sour'
      ],
    abv: 7,
    tastingNotes: [
      'tart',
      'cherry',
      'oaky',
      'balanced'
      ]
  },
  {
    name: 'Trippel',
    brewery: 'New Belgium',
    style: [
      'Belgian'
      'Tripel Ale'
      ],
    abv: 8.5,
    tastingNotes: [
      'creamy',
      'dark fruit',
      'citrus',
      'coriander',
      'anise'
      ]
  },
  {
    name: 'Easy Street Wheat',
    brewery: 'Odell Brewing Co.',
    style: [
      'Wheat Beer',
      'American Pale Wheat'
      ],
    abv: 4.6,
    tastingNotes: [ 
      'creamy',
      'bready',
      'crisp'
      ]
  },
  {
    name: 'Mercenary DIPA',
    brewery: 'Odell Brewing Co.',
    style: [
      'Double IPA',
      'Imperial IPA'
      ],
    abv: 9.3,
    tastingNotes: [
      'lemon',
      'grassy',
      'hoppy'
      ]
  },
  {
    name: 'St. Lupulin',
    brewery: 'Odell Brewing Co.',
    style: [
      'American Pale Ale',
      'Extra Pale Ale'
      ],
    abv: 6.5,
    tastingNotes: [
      'earthy',
      'hoppy',
      'bready',
      'balanced'
      ]
  },
  {
    name: 'Dale\'s Pale Ale',
    brewery: 'Oskar Blues',
    style: [
      'American Pale Ale'
      ],
    abv: 6.5,
    tastingNotes: [
      'hoppy',
      'grapefruit',
      'pine',
      'malty',
      'balanced'
      ]
  },
  {
    name: 'Pinner',
    brewery: 'Oskar Blues',
    style: [
      'IPA',
      'Session IPA'
      ],
    abv: 4.9,
    tastingNotes: [
      'citrus',
      'clementine',
      'tangerine',
      'hoppy'
      ]
  },
  {
    name: 'Ten FIDY',
    brewery: 'Oskar Blues',
    style: [
      'Imperial Stout'
      ],
    abv: 10.5,
    tastingNotes: [
      'coffee',
      'light roast',
      'fruit'
      ]
  },
  {
    name: 'Rum Barrel Ten FIDY',
    brewery: 'Oskar Blues',
    style: [
      'Imperial Stout',
      'Barrel-Aged'
      ],
    abv: 14.2,
    tastingNotes: [
      'roasted',
      'chewy',
      'coconut',
      'cocoa',
      'clove'
      ]
  },
  {
    name: 'Java BBA Ten FIDY',
    brewery: 'Oskar Blues',
    style: [
      'Barrel-Aged'
      'Imperial Stout'
      ],
    abv: 10.5,
    tastingNotes: [
      'coffee',
      'roasted',
      'kahlua',
      'dark fruit'
      ]
  },
  {
    name: 'BBA Nightmare Fuel',
    brewery: 'River North',
    style: [
      'Barrel-Aged',
      'Imperial Stout'
      ],
    abv: 14.8,
    tastingNotes: [
      'bourbon',
      'vanilla',
      'toffee',
      'coffee',
      'dark fruit',
      'chocolate'
      ]
  },
  {
    name: 'Mr. Sandman',
    brewery: 'River North',
    style: [
      'Imperial Stout'
      ],
    abv: 13.5,
    tastingNotes: [
      'dark chocolate',
      'dark cherry',
      'raspberry',
      'roasted',
      'molasses'
      ]
  },
  {
    name: 'Rudie',
    brewery: 'Ska Brewing Co.',
    style: [
      'IPA',
      'Session IPA'
      ],
    abv: 4.5,
    tastingNotes: [
      'orange',
      'caramel',
      'tropical'
      ]
  },
  {
    name: 'Juicy Banger',
    brewery: 'Station 26 Brewing Co.',
    style: [
      'American IPA'
      ],
    abv: 7.5,
    tastingNotes: [
      'hoppy',
      'toasty',
      'tropical'
      ]
  },
  {
    name: 'Space Wrangler',
    brewery: 'Station 26 Brewing Co.',
    style: [
      'American IPA'
      ],
    abv: 7.3,
    tastingNotes: [
      'honey',
      'hoppy',
      'juicy'
      ]
  },
  {
    name: 'Christmas Ale',
    brewery: 'Upslope',
    style: [
      'Belgian Strong Ale',
      'Belgian Dark Strong Ale',
      'American Christmas Ale'
      ],
    abv: 8.3,
    tastingNotes: [
      'baking spice',
      'cinnamon',
      'clove',
      'dried fruit'
      ]
  },
  {
    name: 'Juicy Bits',
    brewery: 'Weldwerks Brewing Co.',
    style: [
      'New England IPA'
      'IPA'
      ],
    abv: 6.5,
    tastingNotes: [
      'sweet',
      'orange',
      'hazy'
      ]
  },
  {
    name: 'Mocha Achromatic',
    brewery: 'Weldwerks Brewing Co.',
    style: [
      'Coffee Stout',
      'Stout'
      ],
    abv: 9.5,
    tastingNotes: [
      'roasted',
      'coffee',
      'smokey',
      'chocolate',
      'currant'
      ]
  },
  {
    name: 'Peppermint Mocha Achromatic',
    brewery: 'Weldwerks Brewing Co.',
    style: [
      'Stout',
      'Coffee Stout'
      ],
    abv: 9.5,
    tastingNotes: [
      'mint',
      'chocolate',
      'coffee'
      ]
  }
]

module.exports = coloradoBeer;