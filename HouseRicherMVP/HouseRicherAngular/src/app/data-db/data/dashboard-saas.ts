export class DashboardSaasDb {
  public static widgets = {
    widget1: {
      title: 'Ty Aquisitions',
      number: 23297,
      footer: {
        text: '+30% from past year',
        class: 'up'
      },
      charttype: 'bar',
      datasets: [
        {
          label: 'Aquisition',
          data: [10, 15, 8, 13, 10, 14, 4, 13, 11, 8, 13, 4]
        }
      ],
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      colors: [
        {
          borderColor: '#ff5690',
          backgroundColor: '#ff5690'
        }
      ],
      options: {
        responsive: true,
        legend: {
          display: false
        },
        maintainAspectRatio: true,
        layout: {
          padding: {
            top: 20,
            left: 10,
            right: 10,
            bottom: 10
          }
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        }
      }
    },
    widget2: {
      title: 'Ty Ceased',
      number: 3896,
      footer: {
        text: 'Per year ceased 11,286',
        class: ''
      },
      charttype: 'line',
      datasets: [
        {
          label: 'Ceased',
          data: [290, 350, 260, 300, 260, 340, 250, 240],
          fill: 'start'
        }
      ],
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      colors: [
        {
          borderColor: '#ff7793',
          backgroundColor: '#ffb1c1'
        }
      ],
      options: {
        spanGaps: false,
        responsive: true,
        legend: {
          display: false
        },
        maintainAspectRatio: true,
        elements: {
          point: {
            pointStyle: 'triangle',
            radius: 2,
            borderWidth: 1,
            hoverRadius: 2,
            hoverBorderWidth: 1
          },
          line: {
            tension: 0,
            borderWidth: 2
          }
        },
        layout: {
          padding: {
            top: 20,
            left: 10,
            right: 10,
            bottom: 10
          }
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        }
      }
    },
    widget3: {
      title: 'Active Accounts',
      number: 2387,
      footer: {
        text: '-2.8% this week',
        class: 'down'
      },
      charttype: 'line',
      datasets: [
        {
          label: 'Account',
          data: [18, 35, 22, 28, 18, 40, 28, 33]
        }
      ],
      labels: ['May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      colors: [
        {
          borderColor: '#ff7793',
          backgroundColor: '#ffb1c1'
        }
      ],
      options: {
        responsive: true,
        legend: {
          display: false
        },
        maintainAspectRatio: true,
        elements: {
          point: {
            pointStyle: 'cross',
            radius: 2,
            borderWidth: 1,
            hoverRadius: 2,
            hoverBorderWidth: 1
          },
          line: {
            tension: 0,
            borderWidth: 2
          }
        },
        layout: {
          padding: {
            top: 20,
            left: 10,
            right: 10,
            bottom: 10
          }
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        }
      }
    },
    widget4: {
      content: {
        title: 'Revenue',
        number: 2387,
        sub_title: 'YTD Revenue',
        text: '+12% vs. past YTD',
        status: 'up'
      },
      chart: {
        charttype: 'line',
        datasets: [
          {
            label: 'Revenue',
            data: [0, 22, 20, 70, 22, 25],
            pointRadius: 2,
            pointHoverBorderColor: '#3f51b5',
            pointHoverBackgroundColor: '#3f51b5',
          }
        ],
        labels: ['May', 'June', 'July', 'August', 'September', 'October'],
        colors: [
          {
            borderColor: '#ff8cb3',
            backgroundColor: '#ff8cb3'
          }
        ],
        options: {
          responsive: true,
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          },
          maintainAspectRatio: true,
          elements: {
            point: {
              display: false,
              radius: 3,
              borderWidth: 1,
              backgroundColor: '#3f51b5',
              borderColor: '#3f51b5',
              hoverRadius: 5,
              hoverBorderWidth: 2
            },
            line: {
              borderWidth: 1
            }
          },
          layout: {
            padding: {
              top: 20,
              left: 0,
              right: 0,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }]
          }
        }
      }
    },
    widget6: {
      title: 'Aquisition Trend',
      chart: {
        charttype: 'line',
        datasets: [
          {
            label: '2017',
            data: [0, 39.87, 28.89, 32.47, 66.36, 75.75, 56.92, 83.96, 64.59, 80.33, 142.21, 114.26, 120.22],
            pointRadius: 2,
            pointHoverBorderColor: '#b54645',
            pointHoverBackgroundColor: '#b54645',
          },
          {
            label: '2018',
            data: [5.62, 59.87, 65.89, 93.47, 85.36, 95.75, 113.92, 105.96, 126.59, 115.33, 134.21, 162.26, 143.22],
            pointBorderWidth: 0,
            pointRadius: 1,
            pointHoverBorderColor: '#3f51b5',
            pointHoverBackgroundColor: '#3f51b5',
          }
        ],
        labels: ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        colors: [
          {
            borderColor: '#3f51b5',
            backgroundColor: '#3f51b5'
          },
          {
            borderColor: '#ff8cb3',
            backgroundColor: '#ff8cb3'
          }
        ],
        options: {
          responsive: true,
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              usePointStyle: true,
              padding: 20,
              fontSize: 10
            }
          },
          maintainAspectRatio: true,
          elements: {
            point: {
              display: false,
              radius: 3,
              borderWidth: 0,
              hoverRadius: 5,
              hoverBorderWidth: 2
            },
            line: {
              tension: 0,
              borderWidth: 1
            }
          },
          layout: {
            padding: {
              top: 20,
              left: 0,
              right: 0,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              display: false,
            }],
            yAxes: [{
              gridLines: {
                display: true
              },
              display: true,
              ticks: {
                max: 200,
                min: 0,
                stepSize: 40
              }
            }]
          }
        }
      }
    },
    widget7: {
      title: 'Ceased Trend',
      chart: {
        charttype: 'bar',
        datasets: [
          {
            label: '2016',
            data: [50, 0, 105, 0, 111, 0, 130, 0, 152]
          },
          {
            label: '2017',
            data: [60, 0, 140, 0, 118, 0, 150, 0, 105]
          },
          {
            label: '2018',
            data: [80, 0, 115, 0, 193, 0, 170, 0, 156]
          }
        ],
        labels: ['January', '', 'February', '', 'March', '', 'April', '', 'May'],
        colors: [
          {
            borderColor: '#c5cae9',
            backgroundColor: '#c5cae9'
          },
          {
            borderColor: '#ff4081',
            backgroundColor: '#ff4081'
          },
          {
            borderColor: '#303f9f',
            backgroundColor: '#303f9f'
          }
        ],
        options: {
          responsive: true,
          legend: {
            display: true,
            position: 'bottom',
            reverse: true,
            labels: {
              usePointStyle: true,
              padding: 20,
              fontSize: 10
            }
          },
          layout: {
            padding: {
              top: 20,
              left: 0,
              right: 0,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              display: false,
            }],
            yAxes: [{
              gridLines: {
                display: true
              },
              display: true,
              ticks: {
                max: 200,
                min: 0,
                stepSize: 40
              }
            }]
          }
        }
      }
    }
  };
}
