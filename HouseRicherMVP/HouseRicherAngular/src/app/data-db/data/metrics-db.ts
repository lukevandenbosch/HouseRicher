export class MetricsDb {
  public static simpleWidgets = [
    {
      bgColor: 'bg-primary',
      icon: {
        name: 'orders-new',
        color: 'text-white'
      },
      counter: {
        number: 2380,
        currency: '',
        symbol: ''
      },
      tagLine: {
        text: 'Orders this year',
        color: 'text-white'
      }
    },
    {
      bgColor: 'bg-secondary',
      icon: {
        name: 'revenue-new',
        color: 'text-white'
      },
      counter: {
        number: 9626,
        currency: 'USD',
        symbol: 'symbol'
      },
      tagLine: {
        text: 'Revenue this year',
        color: 'text-white'
      }
    },
    {
      bgColor: 'bg-info',
      icon: {
        name: 'visits',
        color: 'text-white'
      },
      counter: {
        number: 32567,
        currency: '',
        symbol: ''
      },
      tagLine: {
        text: 'Visits this year',
        color: 'text-white'
      }
    },
    {
      bgColor: 'bg-success',
      icon: {
        name: 'queries',
        color: 'text-white'
      },
      counter: {
        number: 21782,
        currency: '',
        symbol: ''
      },
      tagLine: {
        text: 'Queries this year',
        color: 'text-white'
      }
    },
    {
      bgColor: 'bg-warning',
      icon: {
        name: 'orders-new',
        color: 'text-dark'
      },
      counter: {
        number: 2380,
        currency: '',
        symbol: '',
        color: 'text-dark'
      },
      tagLine: {
        text: 'Orders this year',
        color: 'text-dark'
      }
    },
    {
      bgColor: 'bg-primary',
      icon: {
        name: 'revenue-new',
        color: 'text-light-primary'
      },
      counter: {
        number: 9623,
        currency: 'USD',
        symbol: 'symbol',
        color: 'text-light-primary'
      },
      tagLine: {
        text: 'Revenue this year',
        color: 'text-light-gray'
      }
    },
    {
      bgColor: '',
      icon: {
        name: 'visits',
        color: 'text-primary'
      },
      counter: {
        number: 32567,
        currency: '',
        symbol: '',
        color: 'text-primary'
      },
      tagLine: {
        text: 'Visits this year',
        color: 'text-light-gray'
      }
    }
  ];

  public static trendingCards = [
    {
      shadowType: 'area',
      data: {
        trending: {
          value: '84%',
          icon: 'pointer-up',
          color: 'text-success'
        },
        tagLine: {
          text: 'Increment in Active users'
        }
      },
      chart: {
        chartType: 'line',
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            data: [170, 525, 363, 720, 390, 860, 230],
            label: 'Active users',
            pointRadius: 0
          }
        ],
        options: {
          height: 80,
          elements: {
            line: {
              tension: 0, // disables bezier curves
            }
          }
        },
        colors: [],
        gradients: [
          {
            position: [0, 0, 230, 0],
            colors: [
              {
                code: '#4f35ac',
                opacity: 0.9,
                point: 0
              },
              {
                code: '#a140c1',
                opacity: 0.9,
                point: 1
              }
            ]
          }
        ]
      }
    },
    {
      shadowType: 'area',
      data: {
        trending: {
          value: '38%',
          icon: 'pointer-up',
          color: 'text-success'
        },
        tagLine: {
          text: 'Extra revenue from last year'
        }
      },
      chart: {
        chartType: 'line',
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            data: [170, 525, 363, 720, 390, 860, 230],
            label: 'Revenue',
            pointRadius: 0
          }
        ],
        options: {
          height: 80
        },
        colors: [],
        gradients: [
          {
            position: [0, 0, 230, 0],
            colors: [
              {
                code: '#46cafb',
                opacity: 0.9,
                point: 0
              },
              {
                code: '#1b92fc',
                opacity: 0.9,
                point: 1
              }
            ]
          }
        ]
      }
    },
    {
      shadowType: '',
      data: {
        trending: {
          value: '38%',
          icon: 'pointer-down',
          color: 'text-danger'
        },
        tagLine: {
          text: 'Less orders from past year'
        }
      },
      chart: {
        chartType: 'line',
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            data: [100, 525, 363, 720, 390, 860, 230],
            label: 'Orders',
            borderWidth: 2,
            pointRadius: 0
          }
        ],
        options: {
          height: 80,
          elements: {
            line: {
              tension: 0, // disables bezier curves
            }
          }
        },
        colors: [
          {
            backgroundColor: '#F1D7B3',
            borderColor: '#FEA931',
            hoverBorderColor: '#FEA931',
            pointBackgroundColor: '#fff',
            pointBorderColor: '#FEA931',
          }
        ]
      }
    },
    {
      shadowType: '',
      data: {
        trending: {
          value: '92%',
          icon: 'pointer-down',
          color: 'text-success'
        },
        tagLine: {
          text: 'Traffic raise from past year'
        }
      },
      chart: {
        chartType: 'line',
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            data: [170, 525, 363, 720, 390, 860, 230],
            label: 'Traffic raise',
            fill: false,
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2
          }
        ],
        options: {
          height: 80,
          elements: {
            line: {
              tension: 0, // disables bezier curves
            }
          }
        },
        colors: [
          {
            backgroundColor: '#fff',
            borderColor: '#038FDE',
            hoverBorderColor: '#038FDE',
            pointBackgroundColor: '#fff',
            pointBorderColor: '#FEA931',
          }
        ],
        gradients: ''
      }
    },
    {
      bgColor: '',
      shadowType: 'area',
      data: {
        trending: {
          value: '92%',
          icon: 'pointer-up',
          color: 'text-success'
        },
        tagLine: {
          text: 'Growth in revenue'
        }
      },
      chart: {
        chartType: 'line',
        labels: ['January', 'February', 'March', 'April'],
        datasets: [{data: [1450, 450, 1800, 800], label: 'Growth', pointRadius: 0}],
        options: {
          height: 250,
        },
        gradients: [
          {
            position: [0, 60, 230, 70],
            colors: [
              {
                code: '#4f35ac',
                opacity: 0.9,
                point: 0
              },
              {
                code: '#a140c1',
                opacity: 0.9,
                point: 1
              }
            ]
          }
        ]
      }
    },
    {
      bgColor: 'bg-primary',
      shadowType: '',
      data: {
        trending: {
          value: '07%',
          icon: 'pointer-up',
          color: 'text-white'
        },
        tagLine: {
          text: 'Traffic raise',
          color: 'text-white'
        }
      },
      chart: {
        chartType: 'line',
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [{data: [200, 900, 750, 600, 1100, 1600, 1250, 900], label: 'Traffic raise', pointRadius: 0}],
        options: {
          elements: {
            line: {
              tension: 0, // disables bezier curves
            }
          },
          height: 250
        },
        gradients: [
          {
            position: [0, 80, 180, 70],
            colors: [
              {
                code: '#1b92fc',
                opacity: 0.9,
                point: 0
              },
              {
                code: '#46cafb',
                opacity: 0.9,
                point: 1
              }
            ]
          }
        ]
      }
    },
    {
      bgColor: '',
      shadowType: '',
      data: {
        trending: {
          value: '38%',
          icon: 'pointer-down',
          color: 'text-danger'
        },
        tagLine: {
          text: 'Growth in revenue'
        }
      },
      chart: {
        chartType: 'line',
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            data: [1330, 750, 1160, 760, 1000],
            label: 'Growth',
            pointRadius: 0
          }
        ],
        options: {
          height: 250
        },
        colors: '',
        gradients: [
          {
            position: [0, 80, 180, 70],
            colors: [
              {
                code: '#1b92fc',
                opacity: 0.9,
                point: 0
              },
              {
                code: '#46cafb',
                opacity: 0.9,
                point: 1
              }
            ]
          }
        ]
      }
    },
    {
      shadowType: '',
      data: {
        trending: {
          value: '07%',
          icon: 'pointer-up',
          color: 'text-success'
        },
        tagLine: {
          text: 'Traffic raise'
        }
      },
      chart: {
        chartType: 'line',
        labels: ['Section A', 'Section B', 'Section C', 'Section D', 'Section E'],
        datasets: [
          {
            data: [163, 620, 390, 860, 230],
            label: 'Traffic raise',
            fill: false,
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2
          }
        ],
        options: {
          height: 120,
          elements: {
            line: {
              tension: 0, // disables bezier curves
            }
          }
        },
        colors: [
          {
            backgroundColor: '#fff',
            borderColor: '#038FDE',
            hoverBorderColor: '#038FDE',
            pointBackgroundColor: '#fff',
            pointBorderColor: '#FEA931',
          }
        ],
        gradients: ''
      }
    },
    {
      coloums: [5, 7],
      data: {
        amount: '$23,658',
        heading: {
          value: 'Income Last Year',
          color: 'text-dark'
        },
        trending: {
          value: '67%',
          icon: 'pointer-up',
          color: 'text-success'
        },
        tagLine: {
          text: 'Total income',
          color: 'text-light-gray'
        }
      },
      chart: {
        chartType: 'line',
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [
          {
            data: [50, 520, 420, 320, 590, 860, 545, 230],
            label: 'Total income',
            pointRadius: 0
          }
        ],
        options: {
          height: 110,
          elements: {
            line: {
              tension: 0, // disables bezier curves
            }
          }
        },
        colors: [],
        gradients: [
          {
            position: [0, 0, 180, 230],
            colors: [
              {
                code: '#b8345f',
                opacity: 0.9,
                point: 0
              },
              {
                code: '#b8345f',
                opacity: 0.7,
                point: 1
              }
            ]
          }
        ]
      }
    },
    {
      coloums: [7, 5],
      data: {
        amount: '43,856',
        heading: {
          value: 'Queries',
          color: 'text-dark'
        },
        trending: {
          value: '67%',
          icon: 'pointer-up',
          color: 'text-success'
        },
        tagLine: {
          text: 'Mail, Website and Call',
          color: 'text-light-gray'
        }
      },
      chart: {
        chartType: 'bar',
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            data: [400, 600, 800, 200, 1300, 1000, 1600, 600, 400, 700, 800, 1700],
            label: 'Queries'
          }
        ],
        options: {
          height: 120,
          scales: {
            xAxes: [
              {
                display: false,
                stacked: true,
                categoryPercentage: 1.0,
                barPercentage: 0.6
              }
            ],
            yAxes: [
              {
                display: false,
                stacked: true
              }
            ]
          }
        },
        colors: [{
          backgroundColor: '#52c41a',
          hoverBackgroundColor: '#52c41a'
        }],
        gradients: ''
      }
    }
  ];

  public static widgets = {
    progressRecords: [
      {
        label: 'Email',
        value: 45,
        color: 'bg-primary',
        maxValue: 100
      },
      {
        label: 'Social',
        value: 35,
        color: 'bg-warning',
        maxValue: 100
      },
      {
        label: 'Organic',
        value: 75,
        color: 'bg-success',
        maxValue: 100
      },
      {
        label: 'Technical',
        value: 15,
        color: 'bg-danger',
        maxValue: 100
      }
    ],
    referralTrafficChart: {
      chartType: 'doughnut',
      options: {
        responsive: false,
        height: 130,
        width: 130,
        cutoutPercentage: 70,
        legend: {
          display: false
        },
        layout: {
          padding: 0
        },
        scales: {
          xAxes: [{
            display: false,
          }],
          yAxes: [{
            display: false
          }]
        },
        tooltips: {
          mode: 'index',
          axis: 'y'
        }
      },
      labels: ['History', 'Math', 'Science', 'English'],
      datasets: [
        {
          data: [45, 35, 75, 15]
        }
      ],
      colors: [
        {
          backgroundColor: [
            '#512DA8',
            '#fa8c16',
            '#52c41a',
            '#f44336'
          ]
        }
      ]
    },
    ticketsStatus: {
      title: 'Tickets by Status',
      chart: {
        chartType: 'doughnut',
        options: {
          centerText: 36,
          height: 130,
          width: 130,
          cutoutPercentage: 80,
          responsive: false
        },
        labels: ['Sales', 'Technical', 'Account', 'Dispute'],
        datasets: [
          {
            data: [14, 12, 7, 3]
          }
        ],
        colors: [
          {
            backgroundColor: [
              'rgba(87, 151, 252, 0.8)',
              'rgba(78, 204, 72, 0.8)',
              'rgba(255, 222, 22, 0.8)',
              'rgba(255, 68, 93, 0.8)'
            ]
          }
        ]
      }
    },
    realUsersChart: {
      options: {
        responsive: true,
        height: 70,
        legend: {
          display: false
        },
        layout: {
          padding: 0
        },
        scales: {
          xAxes: [
            {
              display: false,
              stacked: true,
              categoryPercentage: 1.0,
              barPercentage: 0.6
            }
          ],
          yAxes: [
            {
              display: false,
              stacked: true
            }
          ]
        }
      },
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Active Users',
          data: [400, 600, 800, 200, 1300, 1000, 1600, 600, 400, 700, 800, 1700]
        }
      ],
      colors: [
        {
          backgroundColor: 'rgba(0, 0, 0, 0.20)',
          hoverBackgroundColor: 'rgba(0, 0, 0, 0.5)'
        }
      ]
    },
    chartTrafficRaise: {
      shadowType: '',
      data: {
        trending: {
          value: '07%',
          icon: 'pointer-up',
          color: 'text-success'
        },
        tagLine: {
          text: 'Traffic raise'
        }
      },
      chart: {
        chartType: 'line',
        labels: ['Section A', 'Section B', 'Section C', 'Section D', 'Section E'],
        datasets: [
          {
            data: [163, 620, 390, 860, 230],
            label: 'Traffic raise',
            fill: false,
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2
          }
        ],
        options: {
          height: 140,
          elements: {
            line: {
              tension: 0, // disables bezier curves
            }
          }
        },
        colors: [
          {
            backgroundColor: '#fff',
            borderColor: '#f14631',
            hoverBorderColor: '#fff',
            pointBackgroundColor: '#f14631',
            pointBorderColor: '#fff'
          }
        ],
        gradients: ''
      }
    }
  };
}
