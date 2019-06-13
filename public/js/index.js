var pokemonData = [];
var data = {};

var diameter = 600;
var color = d3.scaleOrdinal(d3.schemeYlGnBu[7]);

function handleSuccess(json) {
  allPokemon = json;
  allPokemon.forEach(function(pokemon){
    pokemonData.push(pokemon);
  });
  data = {"children":pokemonData}
  console.log(data);
  setChart(data);
};

function handleError(err) {
  console.log("There was an issue trying to catch 'em all");
  $('#pokemonList').text("Failed to load pokemon, is the server working?");
}

var setChart = function(dataset){

  var bubble = d3.pack(dataset)
      .size([diameter, diameter])
      .padding(1.5);

  var svg = d3.select("#bubble-box")
      .append("svg")
      .attr("width", diameter)
      .attr("height", diameter)
      .attr("class", "bubble")
      .attr("id", "currentChart");

  var nodes = d3.hierarchy(dataset)
      .sum(function(d) { return d.SpecialAttack; });

  var node = svg.selectAll(".node")
      .data(bubble(nodes).descendants())
      .enter()
      .filter(function(d){
          return !d.children
      })
      .append("g")
      .attr("class", "node")
      .attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")";
      });

  node.append("title")
      .text(function(d) {
          return d.Name + ": " + d.SpecialAttack;
      });

  node.append("circle")
      .attr("r", function(d) {
          return d.r;
      })
      .style("fill", function(d,i) {
          return color(i);
      });

  node.append("text")
      .attr("dy", ".2em")
      .style("text-anchor", "middle")
      .text(function(d) {
          return d.data.Name.substring(0, d.r / 3);
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", function(d){
          return d.r/5;
      })
      .attr("fill", "white");

  node.append("text")
      .attr("dy", "1.3em")
      .style("text-anchor", "middle")
      .text(function(d) {
          return d.data.SpecialAttack;
      })
      .attr("font-family",  "Gill Sans", "Gill Sans MT")
      .attr("font-size", function(d){
          return d.r/5;
      })
      .attr("fill", "white");

  d3.select(self.frameElement)
      .style("height", diameter + "px");
};

var removeCurrentStats = function(){
  $(".node").remove();
  $("#currentChart").remove();
};

$(document).ready(function(){

  $pokemonList = $('#pokemonList');

  $.ajax({
    method: 'GET',
    url: '/api/dataset',
    success: handleSuccess,
    error: handleError
  });

});

$("#filter1").click(function(e){
  e.preventDefault();
  // remove nodes
  removeCurrentStats();

  $.ajax({
    method: 'GET',
    url: '/api/waterPokemon',
    success: handleSuccess,
    error: handleError
  });

  // reset chart color
  color = d3.scaleOrdinal(d3.schemeYlGnBu[7]);

});

$("#filter2").click(function(e){
  e.preventDefault();

  // remove existing nodes
  removeCurrentStats();

  $.ajax({
    method: 'GET',
    url: '/api/firePokemon',
    success: handleSuccess,
    error: handleError
  });
  // reset chart color
  color = d3.scaleOrdinal(d3.schemeReds[7]);
});

$("#filter3").click(function(e){
  e.preventDefault();

  // remove existing nodes
  removeCurrentStats();


  $.ajax({
    method: 'GET',
    url: '/api/grassPokemon',
    success: handleSuccess,
    error: handleError
  });
  // reset chart color
  color = d3.scaleOrdinal(d3.schemeBuGn[7]);
});

$("#filter4").click(function(e){
  e.preventDefault();

  // remove existing nodes
  removeCurrentStats();

  $.ajax({
    method: 'GET',
    url: '/api/poisonPokemon',
    success: handleSuccess,
    error: handleError
  });
  // reset chart color
  color = d3.scaleOrdinal(d3.schemeBuPu[7]);
});

$("#filter5").click(function(e){
  e.preventDefault();

  // remove existing nodes
  removeCurrentStats();

  $.ajax({
    method: 'GET',
    url: '/api/psychicPokemon',
    success: handleSuccess,
    error: handleError
  });
  // reset chart color
  color = d3.scaleOrdinal(d3.schemeRdPu[7]);
});

$("#filter6").click(function(e){
  e.preventDefault();

  // remove existing nodes
  removeCurrentStats();

  $.ajax({
    method: 'GET',
    url: '/api/icePokemon',
    success: handleSuccess,
    error: handleError
  });
  // reset chart color
  color = d3.scaleOrdinal(d3.schemeBlues[7]);
});

$("#filter7").click(function(e){
  e.preventDefault();

  // remove existing nodes
  removeCurrentStats();

  $.ajax({
    method: 'GET',
    url: '/api/electricPokemon',
    success: handleSuccess,
    error: handleError
  });
  // reset chart color
  color = d3.scaleOrdinal(d3.schemeYlOrBr[7]);
});

$("#filter8").click(function(e){
  e.preventDefault();

  // remove existing nodes
  removeCurrentStats();

  $.ajax({
    method: 'GET',
    url: '/api/flyingPokemon',
    success: handleSuccess,
    error: handleError
  });
  // reset chart color
  color = d3.scaleOrdinal(d3.schemeBrBG[7]);
});
