const path = require('path');
const fs = require('fs');
// const pokemondb = require('../app/models/pokemon.model.js');

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/pokemondb";

// console.log(pokemondb);

MongoClient.connect(url, (err, db) => {
  if (err) throw err;

  db.collection("pokemon").find({}, function (err, result) {
    if (err) throw err;
    console.log(result)
    db.close();
  });

});
