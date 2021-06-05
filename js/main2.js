//menu nav
$(document).ready(function(){
  $('.js-menu-mobile').on('click', function(){
    $('.js-header').toggleClass('menu-mobile-show')
  });
});
//dafaults

Chart.defaults.color = '#fff'
Chart.defaults.elements.line.borderWidth = 1;

fetch('https://coasters-api2.herokuapp.com/coaster')
  .then(response => response.json())
.then(data => printChart(data))

function printChart(coasters){
  getChart1(coasters, 'ctx')
  getChart2(coasters, 'ctx2')
  getChart3(coasters, 'ctx3')
  getChart4(coasters, 'ctx4')
  gForceChart(coasters, 'ctx5')
  globalComparative(coasters, 'ctx6')
  
}
function getChart1(coasters, id){
  let ctx = document.getElementById('mychart').getContext("2d")
  let myChart = new Chart(ctx,{
    type: "bar",
    data: {
      labels: [
        'Estados Unidos',
        'China',
        'España'
      ],
      datasets:[{
        label: 'Montañas Rusas',
        data: [
          coasters.filter(eachCoaster => eachCoaster.country === 'Estados Unidos').length,
          coasters.filter(eachCoaster => eachCoaster.country === 'China').length,
          coasters.filter(eachCoaster => eachCoaster.country === 'España').length
        ],
        backgroundColor: [
          'rgba(255, 102, 0, .2)',
          'rgba(0, 156, 140, 2)',
          'rgba(61, 252, 151, .2)'
        ],
        borderWidth: 2,
        borderColor: [
          'rgba(255, 102, 0, 1)',
          'rgba(0, 156, 140, 1)',
          'rgba(61, 252, 151, 1)'
        ]
      }]
    },
    option: {
      scales:{
        yAxes:[{
          tcks:{
            beginAtZero: true
          }
        }]
      }
    }
  });
}
function getChart2(coasters){

  let ctx2 = document.getElementById('mychart2').getContext("2d")
  let myChart2 = new Chart(ctx2,{
    type: "pie",
    data: {
      labels: [
        'Intelligent',
        'Generic',
        'Tasty',
        'Gorgeous'
      ],
      datasets:[{
        label: 'Modelos',
        data: [
          coasters.filter(eachCoaster => eachCoaster.model === 'Intelligent').length,
          coasters.filter(eachCoaster => eachCoaster.model === 'Generic').length,
          coasters.filter(eachCoaster => eachCoaster.model === 'Tasty').length,
          coasters.filter(eachCoaster => eachCoaster.model === 'Gorgeous').length,
        ],
        backgroundColor: [
          'rgba(249,247,0,.2)',
          'RGBA(0,255,26, .2)',
          'RGBA(17,0,255, .2)',
          'rgba(244,60,78,.2)'
        ],
          borderColor: [
          'rgba(249,247,0,1)',
          'RGBA(0,255,26, 1)',
          'RGBA(17,0,255, 1)',
          'rgba(244,60,78,1)'
        ]
      }]
    },
    options: {
      plugins: {
        legend: {
          position: 'right'
        }
      }
    }
  });
}
function getChart3(coasters){
  const selectedCoasters = coasters.filter(eachCoaster => eachCoaster.height > 80)
  let ctx3 = document.getElementById('mychart3').getContext("2d")
  let myChart3 = new Chart(ctx3,{
    type: "radar",
    data: {
      labels: selectedCoasters.map(eachCoaster => eachCoaster.name),
      datasets:[{
        label: 'Altura',
        data: selectedCoasters.map(eachCoaster => eachCoaster.height),
        backgroundColor: [
          'rgba(18,109,227, .2)',
          'rgba(103,208,59, .2)',
          'rgba(249,118,84, .2)',
          'rgba(244,60,78, .2)'
        ],
        borderColor: [
          'rgba(18,109,227, 1)',
          'rgba(103,208,59, 1)',
          'rgba(249,118,84, 1)',
          'rgba(244,60,78, 1)'
        ],
      }]
    },
    options: {
      scales: {
          r: {
              backgroundColor: 'rgba(106, 219, 0, 0.2)',
              backdropColor: '#fff'
          }
      }
  }
  });
}
function getChart4(coasters, id){
  let ctx4 = document.getElementById('mychart4').getContext("2d")
  let myChart4 = new Chart(ctx4,{
    type: "doughnut",
    data: {
      labels: [
        'Estados Unidos',
        'China',
        'España'
      ],
      datasets:[{
        label: 'Promedio de Velocidad',
        data: [
          coasters[0].speed,
          coasters[2].speed,
          coasters[3].speed,
        ],
        backgroundColor: [
          'rgba(176,11,105, .2)',
          'rgba(255,141,0, .2)',
          'rgba(103,208,59, .2)'
        ],
        borderColor: [
          'rgba(176,11,105, 1)',
          'rgba(255,141,0, 1)',
          'rgba(103,208,59, 1)',
        ],
      }]
    },
    options: {
      plugins: {
        legend: {
          position: 'right'
        }
      }
    }
  });
}
//chart for g force
function gForceChart(coasters, id){
  const selectedCoasters = coasters.filter(eachCoaster => eachCoaster.gForce)
  let ctx5 = document.getElementById('mychart5').getContext("2d")
  let myChart5 = new Chart(ctx5,{
    type: "bar",
    data: {
      labels: selectedCoasters.map(eachCoaster => eachCoaster.name),
      datasets:[{
        data: selectedCoasters.map(eachCoaster => eachCoaster.gForce),
        backgroundColor: [
          'rgba(4,114,77, .2)',
          'rgba(248,192,200, .2)',
          'rgba(162,250,163, .2)'
        ],
        borderWidth: 2,
        borderColor: [
          'rgba(4,114,77, 1)',
          'rgba(248,192,200, 1)',
          'rgba(162,250,163, 1)'
        ],
      }]
    },
    options: {
      plugins:{
        legend:{
          display: false
        }
      }
    }
  });
}
//global comparative
function globalComparative(coasters, id){
  const selectedCoasters = coasters.filter(eachCoaster => eachCoaster.gForce > 5)
  let ctx6 = document.getElementById('mychart6').getContext("2d")
  let myChart5 = new Chart(ctx6,{
    type: "radar",
    data: {
      labels: selectedCoasters.map(eachCoaster => eachCoaster.name),
      datasets:[{
        label: 'Longitud',
        data: selectedCoasters.map(eachCoaster => eachCoaster.length),
        backgroundColor: [
          'rgba(4,114,77, .2)',
          'rgba(248,192,200, .2)',
          'rgba(162,250,163, .2)'
        ],
        borderWidth: 2,
        borderColor: [
          'rgba(4,114,77, 1)',
          'rgba(248,192,200, 1)',
          'rgba(162,250,163, 1)'
        ],
      },
      {
        label: 'Altura',
        data: selectedCoasters.map(eachCoaster => eachCoaster.height),
        backgroundColor: [
          'rgba(4,114,77, .2)',
          'rgba(248,192,200, .2)',
          'rgba(162,250,163, .2)'
        ],
        borderWidth: 2,
        borderColor: [
          'rgba(4,114,77, 1)',
          'rgba(248,192,200, 1)',
          'rgba(162,250,163, 1)'
        ],
      },
      {
        label: 'Velocidad',
        data: selectedCoasters.map(eachCoaster => eachCoaster.speed),
        backgroundColor: [
          'rgba(4,114,77, .2)',
          'rgba(248,192,200, .2)',
          'rgba(162,250,163, .2)'
        ],
        borderWidth: 2,
        borderColor: [
          'rgba(4,114,77, 1)',
          'rgba(248,192,200, 1)',
          'rgba(162,250,163, 1)'
        ],
      }]
    },
    options: {
      plugins:{
        legend:{
          display: true,
          position: 'right'
        }
      }
    }
  });
}