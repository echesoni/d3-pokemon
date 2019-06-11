module.exports = (app) => {
  const pokemon = require('../controllers/pokemon.controller.js');

  // Retrieve all the Pokemon
  app.get('/pokemon', pokemon.findAll);

  // Retrieve a single Pokemon
  app.get('/pokemon:pokemonId', pokemon.findOne);
}
