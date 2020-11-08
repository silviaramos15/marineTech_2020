
// Hamburguer menu

$('.menu-toggle').click(function(){
    $('nav').toggleClass('site_nav_open',600);
    $(this).toggleClass('open');
  })
  

  //CHART WIDGETS

  //Function for the activate links
  const activateClass = clicked => {
    const trafficLinks = document.querySelectorAll('.traffic-nav li');
    trafficLinks.forEach(trafficLink => {
      if(trafficLink === clicked) {
        trafficLink.classList.add('activate');
      } else {
        trafficLink.classList.remove('activate');
      }
    });
  };


        //Line graph
function activate_chart (labels, data, data2){
   
  let trafficCanvas = document.getElementById('traffic-chart');
  let trafficData = {
      labels: labels,
      datasets: [{
      label: 'Current',
      data: data,
      backgroundColor: 'rgba(211,228,229, .3)',
      borderWidth: 3,
      borderColor: 'rgba(197,220,221, .4)',
      }, {
        label: 'Prediction',
        data: data2,
        backgroundColor: 'rgba(211,228,229, .3)',
        borderWidth: 3,
        borderColor: 'rgba(197,220,221, .9)',
        
        
      }
    ]
  };
        //Object literal to set the options to be changed for the chart
    let trafficOptions = {
        aspectRatio: 2.5,
        animation: {
            duration: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        }
    };

        //Create chart itself
   
    let trafficChart = new Chart (trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
    });
}

//labels and data from monthly chart
const data = [25.61, 24.80, 26.85, 21.42, 23.39, 29.75]
const data2 = [25.61, 24.80, 26.85, 21.42, 23.39, 29.75]
const labels= ["2014", "2015", "2016", "2017", "2018", "2019"]

activate_chart(labels,data, data2)


    //TRAFFIC CHART SWITCH
    //temperature data
    const water = document.getElementById('water');
    water.addEventListener('click', e => {
        activate_chart(labels,data,data2);
        activateClass(e.target);
    });

    //PH data
    const accustic = document.getElementById('accustic');
    accustic.addEventListener('click', e => {
       const accustic_label = ["2014", "2015", "2016", "2017", "2018", "2019"];
       const accustic_data = [8.2, 9.16, 7.44, 8.18, 7.99, 7.55];
       const accustic_data2 = [8.2, 9.16, 7.44, 8.18, 7.99, 7.55];
        activate_chart(accustic_label, accustic_data, accustic_data2);
        activateClass(e.target);
 
    });
    //Salinity data
    const optic= document.getElementById('optic');
    optic.addEventListener('click', e => {
        const optic_data = [8.11, 13.54, 32.49, 24.85, 16.48, 36.62];
        const optic_data2 = [8.11, 13.54, 32.49, 24.85, 16.48, 36.62];
        const optic_label = ["2014", "2015", "2016", "2017", "2018", "2019"];
        activate_chart(optic_label, optic_data, optic_data2);
        activateClass(e.target);
    });

  //Turbidity data
  const sonar = document.getElementById('sonar');
  sonar.addEventListener('click', e => {
      const sonar_data = [3.66, 0.18, 3.50, 2.12, 1.58, 7.80];
      const sonar_data2 = [3.66, 0.18, 3.50, 2.12, 1.58, 7.80];
      const sonar_label = ["2014", "2015", "2016", "2017", "2018", "2019"];
      activate_chart(sonar_label, sonar_data, sonar_data2);
      activateClass(e.target);
  });


    

//data for mobile chart
const mobileCanvas = document.getElementById('mobile-chart');
    //create an object literal for the data
const mobileData = {
    labels: ["Chemical Industrial", "Construction", "Pesticide", "Oil", "Domestic", "Agricultural", "Natural", "Other"],
    datasets: [{
        label: '# porcentage in 2016',
        data: [9, 7, 3, 39, 13, 13, 6, 7],
        borderWidth: 2,
        backgroundColor: [
            'rgba(0,139,139, 1)',
            'rgba(122,174,176, 1)',
            'rgba(149,191,192, 1)',
            'rgba(183,218,213, 1)',
            'rgba(129,178,180, 1)',
            'rgba(197,220,221, 1)',
            'rgba(211,228,229, 1)',
            'rgba(224,236,237, 1)',
        ]
    }]
};
    //Object literal for the options
    const mobileOptions = {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
    //creat a chart for the doughnout
    let mobileChart = new Chart(mobileCanvas, {
        type: 'doughnut',
        data: mobileData,
        options: mobileOptions
    });
