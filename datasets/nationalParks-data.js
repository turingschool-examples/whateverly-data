const nationalParks = [
   {
      "parkName":"Yosemite",
      "state":"CA",
      "vistorsLastYear":4336890,
      "yearEstablished":1890
   },
   {
      "parkName":"Zion",
      "state":"UT",
      "vistorsLastYear":4504812,
      "yearEstablished":1919
   },
   {
      "parkName":"Arches",
      "state":"UT",
      "vistorsLastYear":1539028,
      "yearEstablished":1929
   },
   {
      "parkName":"Everglades",
      "state":"FL",
      "vistorsLastYear":1018557,
      "yearEstablished":1934
   },
   {
      "parkName":"Great Smokey Mountains",
      "state":"NC",
      "vistorsLastYear":11338893,
      "yearEstablished":1983
   },
   {
      "parkName":"Grand Canyon",
      "state":"AZ",
      "vistorsLastYear":6254238,
      "yearEstablished":1919
   },
   {
      "parkName":"Rocky Mountain",
      "state":"CO",
      "vistorsLastYear":4437215,
      "yearEstablished":1915
   },
   {
      "parkName":"Yellowstone",
      "state":"MT",
      "vistorsLastYear":4116524,
      "yearEstablished":1872
   },
   {
      "parkName":"Olympic",
      "state":"CA",
      "vistorsLastYear":3401996,
      "yearEstablished":1938
   },
   {
      "parkName":"Glacier",
      "state":"CA",
      "vistorsLastYear":3305512,
      "yearEstablished":1910
   },
   {
      "parkName":"Death Valley",
      "state":"CA",
      "vistorsLastYear":1294827,
      "yearEstablished":1994
   },
   {
      "parkName":"Bryce Canyon",
      "state":"CA",
      "vistorsLastYear":2571684,
      "yearEstablished":1928
   }
];

const trails = [
  {
    "parkName": "Yosemite",
    "trailName": "Four-Mile Trail",
    "distanceRoundtripMiles": 9,
    "openInWinter": false,
    "startingElevationFeet": 4000,
    "parkingAtTrailhead": true,
    "difficultyRating": 7
  },
  {
    "parkName": "Yosemite",
    "trailName": "Bridalveil Fall",
    "distanceRoundtripMiles": 1,
    "openInWinter": true,
    "startingElevationFeet": 4000,
    "parkingAtTrailhead": true,
    "difficultyRating": 1
  },
  {
    "parkName": "Yosemite",
    "trailName": "Half Dome",
    "distanceRoundtripMiles": 14,
    "openInWinter": false,
    "startingElevationFeet": 4000, 
    "parkingAtTrailhead": false,
    "difficultyRating": 10
  },
  {
    "parkName": "Yosemite",
    "trailName": "Panorama",
    "distanceRoundtripMiles": 9,
    "openInWinter": false,
    "startingElevationFeet": 4000, 
    "parkingAtTrailhead": false,
    "difficultyRating": 6
  },
  {
    "parkName": "Yosemite",
    "trailName": "Mist Trail",
    "distanceRoundtripMiles": 3,
    "openInWinter": true,
    "startingElevationFeet": 4000,
    "parkingAtTrailhead": false,
    "difficultyRating": 4
  },
  {
    "parkName": "Yosemite",
    "trailName": "Cathedral Lakes"
    "distanceRoundtripMiles": 7,
    "openInWinter": false,
    "startingElevationFeet": 8500, 
    "parkingAtTrailhead": true,
    "difficultyRating": 5
  },
  {
    "parkName": "Yosemite",
    "trailName": "Glen Aulin",
    "distanceRoundtripMiles": 13,
    "openInWinter": false,
    "startingElevationFeet": 8500,
    "parkingAtTrailhead": true,
    "difficultyRating": 7
  },
  {
    "parkName": "Grand Canyon",
    "trailName": "South Kaibab",
    "distanceRoundtripMiles": 3,
    "openInWinter": true,
    "startingElevationFeet":  6800,
    "parkingAtTrailhead": true,
    "difficultyRating": 8
  },
  {
    "parkName": "Grand Canyon",
    "trailName": "Bright Angel",
    "distanceRoundtripMiles": 5,
    "openInWinter": true,
    "startingElevationFeet": 6800,
    "parkingAtTrailhead": true,
    "difficultyRating": 6
  },
  {
    "parkName": "Grand Canyon",
    "trailName": "Plateau Point",
    "distanceRoundtripMiles": 12,
    "openInWinter": true,
    "startingElevationFeet": 6800,
    "parkingAtTrailhead": true,
    "difficultyRating": 3
  },
  {
    "parkName": "Grand Canyon",
    "trailName": "Yavapai Point",
    "distanceRoundtripMiles": 2,
    "openInWinter": true,
    "startingElevationFeet": 6800,
    "parkingAtTrailhead": true,
    "difficultyRating": 1
  },
  {
    "parkName": "Bryce Canyon",
    "trailName": "Queens Garden",
    "distanceRoundtripMiles": 2,
    "openInWinter": false,
    "startingElevationFeet": 8250,
    "parkingAtTrailhead": true,
    "difficultyRating": 4
  },
  {
    "parkName": "Bryce Canyon" ,
    "trailName": "Fairyland Loop",
    "distanceRoundtripMiles": 8,
    "openInWinter": false,
    "startingElevationFeet": 7800,
    "parkingAtTrailhead": true,
    "difficultyRating": 7
  },
  {
    "parkName": "Bryce Canyon",
    "trailName": "Peek-A-Book Loop",
    "distanceRoundtripMiles": 6,
    "openInWinter": true,
    "startingElevationFeet": 9300,
    "parkingAtTrailhead": false,
    "difficultyRating": 7
  },
  {
    "parkName": "Olympic",
    "trailName": "Ozette Triange loop",
    "distanceRoundtripMiles": 10,
    "openInWinter": true,
    "startingElevationFeet": 5242,
    "parkingAtTrailhead": true,
    "difficultyRating": 5
  },
  {
    "parkName": "Olympic",
    "trailName": "High Divide Loop",
    "distanceRoundtripMiles": 18,
    "openInWinter": true,
    "startingElevationFeet": 1981,
    "parkingAtTrailhead": false,
    "difficultyRating": 9
  },
  {
    "parkName": "Zion",
    "trailName": "West Rim Trail",
    "distanceRoundtripMiles": 15,
    "openInWinter": true,
    "startingElevationFeet": 3000,
    "parkingAtTrailhead": false,
    "difficultyRating": 6
  },
  {
    "parkName": "Zion",
    "trailName": "Angels Landing",
    "distanceRoundtripMiles": 5,
    "openInWinter": true,
    "startingElevationFeet": 3000,
    "parkingAtTrailhead": false,
    "difficultyRating": 7
  },
  {
    "parkName": "Everglades",
    "trailName": "Bayshore Loop",
    "distanceRoundtripMiles": 2,
    "openInWinter": true,
    "startingElevationFeet": 0,
    "parkingAtTrailhead": true,
    "difficultyRating": 1
  },
  {
    "parkName": "Glacier",
    "trailName": "Lincoln Lake",
    "distanceRoundtripMiles": 16,
    "openInWinter": false,
    "startingElevationFeet": 3500,
    "parkingAtTrailhead": true,
    "difficultyRating": 8
  },
  {
    "parkName": "Glacier",
    "trailName": "Grinnell Glacier",
    "distanceRoundtripMiles": 10,
    "openInWinter": false,
    "startingElevationFeet": 4889,
    "parkingAtTrailhead": false,
    "difficultyRating": 8
  },
  {
    "parkName": "Glacier",
    "trailName": "Iceberg Lake",
    "distanceRoundtripMiles": 10,
    "openInWinter": true,
    "startingElevationFeet": 4962,
    "parkingAtTrailhead": true,
    "difficultyRating": 5
  },
  {
    "parkName": "Yellowstone",
    "trailName": "Avalanche Peak",
    "distanceRoundtripMiles": 5,
    "openInWinter": false,
    "startingElevationFeet": 8800,
    "parkingAtTrailhead": true,
    "difficultyRating": 6
  },
  {
    "parkName": "Yellowstone",
    "trailName": "Bunsen Peak",
    "distanceRoundtripMiles": 4,
    "openInWinter": true,
    "startingElevationFeet": 1784,
    "parkingAtTrailhead": true,
    "difficultyRating": 5
  },
  {
    "parkName": "Rocky Mountain",
    "trailName": "Sky Pond",
    "distanceRoundtripMiles": 8,
    "openInWinter": false,
    "startingElevationFeet": 9162,
    "parkingAtTrailhead": true,
    "difficultyRating": 7
  },
  {
    "parkName": "Rocky Mountain",
    "trailName": "Emerald Lake",
    "distanceRoundtripMiles": 3,
    "openInWinter": false,
    "startingElevationFeet": 9476,
    "parkingAtTrailhead": false,
    "difficultyRating": 4
  },
  {
    "parkName": "Death Valley",
    "trailName": "Mosaic Canyon",
    "distanceRoundtripMiles": 4,
    "openInWinter": true,
    "startingElevationFeet": 968,
    "parkingAtTrailhead": true,
    "difficultyRating": 5
  },
  {
    "parkName": "Death Valley",
    "trailName": "Darwin Falls",
    "distanceRoundtripMiles": 2.,
    "openInWinter": true,
    "startingElevationFeet": 2494,
    "parkingAtTrailhead": true,
    "difficultyRating": 3
  },
  {
    "parkName": "Great Smokey Mountains",
    "trailName": "Alum Cave Trail",
    "distanceRoundtripMiles": 10,
    "openInWinter": true,
    "startingElevationFeet": 3854,
    "parkingAtTrailhead": true,
    "difficultyRating": 6
  },
  {
    "parkName": "Great Smokey Mountains",
    "trailName": "Ramsey Cascades",
    "distanceRoundtripMiles": 4,
    "openInWinter": true,
    "startingElevationFeet": 2079,
    "parkingAtTrailhead": true,
    "difficultyRating": 7
  }
];
  








module.exports = {
  nationalParks,
  trails
};