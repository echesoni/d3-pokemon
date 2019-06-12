const csv = require('csv-parser');
const path = require('path');
const fs = require('fs');
// const pokemondb = require('../app/models/pokemon.model.js');

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

const pathToCsv = path.join(__dirname, 'Pokemon.csv');
const pokemonList = [];

// console.log(pathToCsv);

fs.createReadStream(pathToCsv)
  .pipe(csv(['PokemonNumber', 'Name', 'Type1', 'Type2', 'Total', 'HP', 'Attack', 'Defense', 'SpecialAttack', 'SpecialDefense', 'Speed', 'Generation', 'Legendary']))
  .on('data', (data) => pokemonList.push(data))
  .on('end', () => {
    console.log(pokemonList[1]);
  });

// console.log(pokemondb);

MongoClient.connect(url, (err, db) => {
  if (err) throw err;

  // Creates a new db in MongoDB
  const dbo = db.db("pokemondb");

  dbo.collection("pokemon").insertMany(pokemonList, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
