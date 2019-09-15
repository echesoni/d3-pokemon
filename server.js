const express = require('express');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const fs = require('fs');
const port = 3000;

// create express app
const app = express();

// serve static files in public
app.use(express.static('public'));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Configure the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

// Connect to the database
// mongoose.connect(dbConfig.url, function(err, db) {
//   useNewUrlParser: true
//   // console.log("Here it is: " + db.collection("pokemons").findOne({}));
// }).then(() => {
//   console.log("Successfully connected to the database");
// }).catch(err => {
//   console.log('Could not connect to the database. Exiting now...', err);
//   process.exit();
// });

// define route
app.get('/', (req, res) => {
  res.sendFile('views/index.html' , {root : __dirname});
});

// api routes
// require('./app/routes/pokemon.routes.js')(app);

// Api workaround for build/testing
// Move these to routes once testing is finished
app.get('/api/pokemon', (req, res) => {
  fs.readFile('data/pokemon.json', (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.get('/api/dataset', (req, res) => {
  fs.readFile('data/dataset.json', (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.get('/api/dataset3', (req, res) => {
  fs.readFile('data/dataset3.json', (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.get('/api/firePokemon', (req, res) => {
  fs.readFile('data/firePokemon.json', (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.get('/api/waterPokemon', (req, res) => {
  fs.readFile('data/waterPokemon.json', (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.get('/api/grassPokemon', (req, res) => {
  fs.readFile('data/grassPokemon.json', (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.get('/api/poisonPokemon', (req, res) => {
  fs.readFile('data/PoisonPokemon.json', (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.get('/api/psychicPokemon', (req, res) => {
  fs.readFile('data/psychicPokemon.json', (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.get('/api/icePokemon', (req, res) => {
  fs.readFile('data/icePokemon.json', (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.get('/api/electricPokemon', (req, res) => {
  fs.readFile('data/electricPokemon.json', (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.get('/api/flyingPokemon', (req, res) => {
  fs.readFile('data/flyingPokemon.json', (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

// listen for requests
app.listen(port, () => {
  console.log(`Magic is happening at localhost:${port}`);
})
