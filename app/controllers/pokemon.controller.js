const Pokemon = require('../models/pokemon.model.js');

console.log(Pokemon);

exports.create = (req, res) => {
  // Validate request
  if(!req.body.content) {
    return res.status(400).send({
      message: "Pokemon content cannot be empty"
    });
  }

  // Create Note
  const pokemon = new Pokemon({
    PokemonNumber: req.body.PokemonNumber,
    Name: req.body.Name,
    Type1: req.body.Type1,
    Type2: req.body.Type2,
    Total: req.body.Total,
    HP: req.body.HealthPoints,
    Attack: req.body.Attack,
    Defense: req.body.Defense,
    SpecialAttack: req.body.SpecialAttack,
    SpecialDefense: req.body.SpecialDefense,
    Speed: req.body.Speed,
    Generation: req.body.Generation,
    Legendary: req.body.Legendary
  });

  // Save Note in the database
  pokemon.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "An error occured while creating pokemon"
      });
    });
};

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
