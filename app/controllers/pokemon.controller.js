const Pokemon = require('../models/pokemon.model.js');

console.log(Pokemon);

// Retrieve and return all pokemon from the database
exports.findAll = (req, res) => {
  Pokemon.find()
  .then(pokemons => {
    console.log("Getting pokemon...");
    res.json(pokemons);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occured while trying to catch all the pokemon..."
    });
  });
};

// Find a single pokemon from the database with a pokemonId
exports.findOne = (req, res) => {
  Pokemon.findById(req.params.pokemonId)
  .then(pokemon => {
    if(!pokemon) {
      return res.status(404).send({
        message: "Pokemon not found with id " + req.params.pokemonId
      });
    }
    res.send(pokemon);
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "Pokemon not found with id " + req.params.pokemonId
      });
    }
    return res.status(500).send({
      message: "Error trying to catch pokemon with id " + req.params.pokemonId
    })
  })
};
