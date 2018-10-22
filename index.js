const express = require('express');
const fs = require('fs');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');


// DATASETS
const students = require('./datasets/alumni.js');

const { phishShows, setLists } = require('./datasets/phishShowData.js');
const { adoptableDogs, rescues } = require('./datasets/adopt-a-dog.js');
const { tvShow, spinoff } = require('./datasets/Buffy.js');
const { characters, stages } = require('./datasets/smash_data_json.js');
const { countries, continents } = require('./datasets/countries.js');
const { coloradoBeer, coloradoBreweries } = require('./datasets/coloradoBeers.js');
const { nationalParks, trails } = require('./datasets/nationalParks-data.js');

const datasets = [ 
  phishShows, setLists,
  adoptableDogs, rescues,
  tvShow, spinoff,
  characters, stages,
  countries, continents,
  coloradoBeer, coloradoBreweries,
  nationalParks, trails
];

// EXPRESS CONFIGURATION
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('port', process.env.PORT || 3000);

datasets.forEach(dataset => {
  app.get(`/${dataset}`, (request, response) => {
    response.send({ dataset });
  });
}

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`Dataset is running on ${app.get('port')}.`);
  });
}

module.exports = app;