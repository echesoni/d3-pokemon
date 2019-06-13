console.log("hey d3chart.js!");

//////////////////////////////////////////////////

const margin = {
  top: 20,
  right: 20,
  bottom:30,
  left:40
}

const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// X Scale
const xValue = function(d){
  return d.Height
  // return d.base.Attack
}

const xScale = d3.scaleLinear()
  .range([0, width])

// const xMap = function(d){
//   return xScale(xValue(d))
// }

const xAxis = d3.axisBottom()
    .scale(xScale)

// Y Scale
const yValue = function(d){
  return d["Weight"]
}

const yScale = d3.scaleLinear()
  .range([height, 0])

// const yMap = function(d){
//   return yScale(yValue(d))
// }

const yAxis = d3.axisLeft()
    .scale(yScale)

// Color
const cValue = function(d){
  return d.gender;
}
const color = d3.scaleOrdinal(d3.schemeCategory10);

// SVG Canvas
const svg = d3.select('body').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .style('background', '#F4F4F4')
    .style('width', '100%')
    .style('padding-left', '200px')
    .append('g')
        .attr('transform', 'translate('+margin.left+','+margin.top+')')

// Data
// d3.csv('../data/test.csv', function(error, data){
//   // Format
//   data.forEach(function(d){
//     console.log(d);
//     d.Height = +d.Height;
//     d.Weight = +d.Weight;
//   });
// });
