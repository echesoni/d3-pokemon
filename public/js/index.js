console.log("Sanity check: JS is working!");

var $pokemonList;
var allPokemon = [];

$(document).ready(function(){
  $pokemonList = $('#pokemonList');

  $.ajax({
    method: 'GET',
    url: 'http://localhost:8080/pokemon.json#',
    success: handleSuccess,
    error: handleError
  });
});

function handleSuccess(json) {
  allPokemon = json;
  render();
}

function handleError(err) {
  console.log("There was an issue trying to catch 'em all");
  $('#pokemonList').text("Failed to load pokemon, is the server working?");
}
