const csv = require('csv-parser');
const path = require('path');
const fs = require('fs');
const pokemondb = require('../app/models/pokemon.model.js');

const pathToCsv = path.join(__dirname, 'Pokemon.csv');
const pokemon_list = [];

// console.log(pathToCsv);

fs.createReadStream(pathToCsv)
  .pipe(csv(['PokemonNumber', 'Name', 'Type1', 'Type2', 'Total', 'HP', 'Attack', 'Defense', 'SpecialAttack', 'SpecialDefense', 'Speed', 'Generation', 'Legendary']))
  .on('data', (data) => pokemon_list.push(data))
  .on('end', () => {
    // console.log(pokemon_list);
  });

console.log(pokemondb);

pokemondb.remove({}, function(err, pokemons){
  console.log("starting to remove...");
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all pokemon');

    // create new records based on the array books_list
    pokemondb.create(pokemon_list, function(err, pokemons){
      if (err) { return console.log('err', err); }
      console.log("created", pokemons.length, "pokemon");
      process.exit();
    });
  }
});
