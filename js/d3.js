

// fetch('https://coasters-api2.herokuapp.com/coaster')
//   .then(response => response.json())
// .then(data => printChart(data))

d3.xml('./xml/prueba.xml').then(function(xml){
  d3.select('#barras')
    .selectAll('div')
    .data(xml.documentElement.getElementsByTagName("value"))
    .enter()
    .append('div')
    .style('width', function(d){
      return d.textContent * 10 + 'px'
    })
    .text(function(d){
      return d.textContent
    })
})
//circle graphic
const data = [
  {name: "chrome", value: 10},
  {name: "opera", value: 40},
  {name: "mozilla", value: 30},
  {name: "chromium", value: 20},
]

const circleSvg = d3.select('.circle-svg'),
      width = circleSvg.attr('width'),
      height = circleSvg.attr('height');

const radius = 200;
const g = circleSvg
    .append('g')
    .attr('transform', `translate(${width/2}, ${height/2})`)
const color = d3.scaleOrdinal(['red', 'blue', 'green', 'gray'])
const pie = d3.pie().sort(null).value(d => d.value);

const path = d3.arc().outerRadius(radius).innerRadius(0)
const label = d3.arc().outerRadius(radius).innerRadius(radius - 90)
const pies = g.selectAll('.arc').data(pie(data)).enter().append('g').attr('class', 'arc')
pies.append('path').attr('d', path).attr('fill', d => color(d.data.value))
pies.append('text')
    .attr('transform', d => `translate(${label.centroid(d)})`)
    .text(d => d.data.name)
//bar graphics
const DUMMY_DATA = [
  {id: 'd1', value: 10, region: 'USA'},
  {id: 'd2', value: 20, region: 'India'},
  {id: 'd3', value: 30, region: 'China'},
  {id: 'd4', value: 40, region: 'Chile'}
]
d3.select('.barras-2')
    .selectAll('p')
    .data(DUMMY_DATA)
    .enter()
    .append('p')
    .attr('class', 'barras-2__text')
    .text(d => d.region)