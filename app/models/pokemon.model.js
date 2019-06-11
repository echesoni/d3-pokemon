const mongoose = require('mongoose');

const PokemonSchema = mongoose.Schema({
  PokemonNumber: String,
  Name: String,
  Type1: String,
  Type2: String,
  Total: String,
  HP: String,
  Attack: String,
  Defense: String,
  SpecialAttack: String,
  SpecialDefense: String,
  Speed: String,
  Generation: String,
  Legendary: String
});

module.exports = mongoose.model('Pokemon', PokemonSchema);
