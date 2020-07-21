export class ChartChartjsDb {
  public static widgets = {
    lineChart: {
      title: 'Line Chart',
      chartType: 'line',
      datasets: [
        {data: [4000, 1398, 9800, 3908, 4800, 3800, 4300, 9900, 2100], label: 'Series A', borderWidth: 2, fill: false},
        {data: [2400, 3000, 2000, 8750, 1890, 2390, 3490, 2500, 7600], label: 'Series B', borderWidth: 2, fill: false},
        {data: [4900, 4600, 2635, 2212, 5321, 5113, 9600, 2356, 5622], label: 'Series C', borderWidth: 2, fill: false}
      ],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      colors: [
        { // dark grey
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: '#3367d6',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
          backgroundColor: 'rgba(77,83,96,0.2)',
          borderColor: '#59AA2B',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // grey
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: '#ffc658',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
      ],
      options: {
        responsive: true,
        legend: {
          display: false
        },
        tooltips: {
          mode: 'index',
          axis: 'y'
        },
        layout: {
          padding: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }
        },
        scales: {
          xAxes: [{
            display: true,
          }],
          yAxes: [{
            display: true,
            ticks: {
              suggestedMin: 2000,
              suggestedMax: 11000,
              stepSize: 2000
            }
          }]
        }
      }
    },
    areaChart: {
      title: 'Area Chart',
      chartType: 'line',
      datasets: [
        {data: [199, 5611, 3949, 4298, 1294, 4394, 576], label: 'Series A', borderWidth: 2},
        {data: [1811, 9856, 5322, 2895, 9013, 3611, 9717], label: 'Series B', borderWidth: 2},
        {data: [6101, 5009, 1319, 8911, 4346, 8036, 6757], label: 'Series C', borderWidth: 2}
      ],
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      options: {
        responsive: true,
        legend: {
          display: false
        },
        color: [
          'red',    // color for data at index 0
          'blue',   // color for data at index 1
          'green',  // color for data at index 2
        ],
        tooltips: {
          mode: 'index',
          axis: 'y'
        },
        layout: {
          padding: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }
        },
        scales: {
          xAxes: [{
            display: true,
          }],
          yAxes: [{
            display: true,
            ticks: {
              suggestedMin: 2000,
              suggestedMax: 11000,
              stepSize: 2000
            }
          }]
        }
      }
    },
    barChart: {
      title: 'Bar Chart',
      chartType: 'bar',
      datasets: [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 70], label: 'Series B'}
      ],
      labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
      colors: [
        {
          backgroundColor: 'rgb(54, 162, 235)'
        },
        {
          backgroundColor: 'rgb(255, 205, 86)'
        }
      ],
      options: {
        responsive: true,
        legend: {
          display: true
        },
        tooltips: {
          mode: 'index',
          axis: 'y'
        },
        scales: {
          xAxes: [{
            display: true,
            categoryPercentage: 1.0,
            barPercentage: 0.6
          }],
          yAxes: [
            {
              type: 'linear',
              display: true,
              position: 'left'
            }
          ]
        }
      }
    },
    horizontalBarChart: {
      title: 'Horizontal Bar Chart',
      chartType: 'horizontalBar',
      datasets: [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 70], label: 'Series B'}
      ],
      labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
      colors: [
        {
          backgroundColor: 'rgb(153, 102, 255)'
        },
        {
          backgroundColor: 'rgb(255, 205, 86)'
        }
      ],
      options: {
        responsive: true,
        legend: {
          display: true,
          position: 'right'
        },
        tooltips: {
          mode: 'index',
          axis: 'y'
        }
      }
    },
    doughnutChart: {
      title: 'Doughnut Chart',
      chartType: 'doughnut',
      data: [350, 450, 350, 100, 250, 300, 150],
      labels: ['History', 'Math', 'Science', 'Chinese', 'English', 'Geography', 'Physics'],
      colors: [
        {
          backgroundColor: [
            '#ff6384',
            '#3367d6',
            '#FF901F',
            '#cc65fe',
            '#17becf',
            '#ffc658',
            '#59AA2B'
          ]
        }
      ],
      options: {
        responsive: true,
        legend: {
          display: true,
          position: 'right'
        }
      }
    },
    radarChart: {
      title: 'Radar Chart',
      chartType: 'radar',
      datasets: [
        {
          data: [65, 59, 90, 81, 56, 55, 40],
          label: 'Series A',
          borderColor: 'rgb(255, 159, 64)',
          backgroundColor: 'rgb(255, 159, 64)',
          lineTension: 0.5,
          pointRadius: 10,
          pointHoverRadius: 12,
          pointStyle: 'rectRounded',
          pointHoverBorderWidth: 3
        },
        {
          data: [28, 48, 40, 19, 96, 27, 100],
          label: 'Series B',
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgb(75, 192, 192)',
          pointStyle: 'triangle',
          pointRadius: 10,
          pointHoverRadius: 12,
          pointHoverBorderWidth: 3
        },
        {
          data: [28, 96, 27, 100, 48, 40, 19],
          label: 'Series C',
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgb(75, 192, 192)',
          lineTension: 0.3,
          pointStyle: 'rectRot',
          pointRadius: 10,
          pointHoverRadius: 12,
          pointHoverBorderWidth: 3
        }
      ],
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      options: {
        responsive: true,
        legend: {
          display: true,
          position: 'right'
        },
        scale: {
          // Hides the scale
          display: true
        }
      }
    },
    pieChart: {
      title: 'Pie Chart',
      chartType: 'pie',
      data: [65, 59, 90, 81, 56, 55, 40],
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      colors: [
        {
          backgroundColor: [
            'rgba(255, 99, 132, .5)',
            'rgba(255, 159, 64, .5)',
            'rgba(255, 205, 86, .5)',
            'rgba(75, 192, 192, .5)',
            'rgba(54, 162, 235, .5)',
            'rgba(153, 102, 255, .5)',
            'rgba(201, 203, 207, .6)'
          ]
        }
      ],
      options: {
        responsive: true,
        legend: {
          display: true,
          position: 'right'
        }
      }
    },
    piePatternChart: {
      title: 'Pie Chart',
      chartType: 'pie',
      data: [65, 59, 90, 81, 56],
      labels: ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'],
      options: {
        responsive: true,
        legend: {
          display: true,
          position: 'right'
        }
      }
    },
    polarAreaChart: {
      title: 'Polar Area Chart',
      chartType: 'polarArea',
      data: [65, 59, 90, 81, 56],
      labels: ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'],
      colors: [
        {
          backgroundColor: [
            'rgba(255, 99, 132, .5)',
            'rgba(255, 159, 64, .5)',
            'rgba(255, 205, 86, .5)',
            'rgba(75, 192, 192, .5)',
            'rgba(54, 162, 235, .5)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)'
          ]
        }
      ],
      options: {
        responsive: true,
        legend: {
          display: true,
          position: 'right'
        }
      }
    },
    dyanamicChart: {
      title: 'Dynamic Chart',
      chart1: {
        chartType: 'line',
        datasets: [
          {data: [199, 5611, 3949, 4298, 1294, 4394, 576], label: 'Series A', borderWidth: 4},
          {data: [1811, 9856, 5322, 2895, 9013, 3611, 9717], label: 'Series B', borderWidth: 5},
          {data: [6101, 5009, 1319, 8911, 4346, 8036, 6757], label: 'Series C', borderWidth: 3}
        ],
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        options: {
          responsive: true,
          legend: {
            display: false
          },
          color: [
            'red',    // color for data at index 0
            'blue',   // color for data at index 1
            'green',  // color for data at index 2
          ],
          tooltips: {
            mode: 'index',
            axis: 'y'
          },
          layout: {
            padding: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              display: true,
            }],
            yAxes: [{
              display: true,
              ticks: {
                suggestedMin: 2000,
                suggestedMax: 11000,
                stepSize: 2000
              }
            }]
          }
        }
      },
      chart2Type: 'doughnut'
    }
  };
}
