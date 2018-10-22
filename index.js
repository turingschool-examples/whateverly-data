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
const { tvShow, spinOff } = require('./datasets/Buffy.js');
const { characters, stages } = require('./datasets/smash_data_json.js');
const { countries, continents } = require('./datasets/countries.js');
const { coloradoBeer, coloradoBreweries } = require('./datasets/coloradoBeer.js');
const { nationalParks, trails } = require('./datasets/nationalParks-data.js');

const datasets = [ 
  { name: 'phishShows', data: phishShows },
  { name: 'setLists', data: setLists },
  { name: 'adoptableDogs', data: adoptableDogs },
  { name: 'rescues', data: rescues },
  { name: 'tvShow', data: tvShow },
  { name: 'spinoff', data: spinOff },
  { name: 'characters', data: characters },
  { name: 'stages', data: stages },
  { name: 'countries', data: countries },
  { name: 'continents', data: continents },
  { name: 'coloradoBeer', data: coloradoBeer },
  { name: 'coloradoBreweries', data: coloradoBreweries },
  { name: 'nationalParks', data: nationalParks },
  { name: 'trails', data: trails }
];

// EXPRESS CONFIGURATION
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('port', process.env.PORT || 3000);

datasets.forEach(dataset => {
  app.get(`/${dataset.name}`, (request, response) => {
    response.send({ [dataset.name]: dataset.data });
  });
});

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`Dataset is running on ${app.get('port')}.`);
  });
}

module.exports = app;