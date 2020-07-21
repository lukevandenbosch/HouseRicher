export class CrmDb {
  public static widgets = {
    revenue: {
      badge: {
        name: 'Revenue',
        color: 'badge-secondary'
      },
      icon: {
        name: 'revenue-new'
      },
      items: [
        {
          value: '$25,890',
          text: 'This July'
        }
      ]
    },
    order: {
      badge: {
        name: 'Order',
        color: 'badge-secondary'
      },
      icon: {
        name: 'orders-new'
      },
      items: [
        {
          value: '$2,569',
          text: 'This July'
        }
      ]
    },
    invoices: {
      badge: {
        name: 'Invoices',
        color: 'badge-secondary'
      },
      icon: {
        name: 'invoice-new'
      },
      items: [
        {
          value: '23',
          text: 'Sent'
        },
        {
          value: '8',
          text: 'Paid',
          tooltip: {
            value: '$8015',
            color: 'bg-success'
          }
        },
        {
          value: '9',
          text: 'Due',
          tooltip: {
            value: '$1215',
            color: 'bg-warning'
          }
        },
        {
          value: '6',
          text: 'Overdue',
          tooltip: {
            value: '$415',
            color: 'bg-danger'
          }
        }
      ]
    },
    reportCards: [
      {
        title: 'Estimates',
        cardData: {
          value: '$57,985',
          content: 'Worth Estimate',
          items: [
            {
              title: '21 Sent',
              dotColor: 'bg-light-blue'
            },
            {
              title: '9 Approved',
              dotColor: 'bg-light-green'
            },
            {
              title: '5 Denied',
              dotColor: 'bg-light-pink'
            },
            {
              title: '11 Expired',
              dotColor: 'bg-light'
            }
          ]
        },
        chart: {
          chartType: 'doughnut',
          options: {
            centerText: 46,
            height: 110,
            width: 110,
            cutoutPercentage: 90,
            responsive: false
          },
          labels: ['Sent', 'Approved', 'Denied', 'Expired'],
          datasets: [
            {
              data: [21, 9, 5, 11]
            }
          ],
          colors: [
            {
              backgroundColor: [
                'rgba(87, 151, 252, 0.8)',
                'rgba(78, 204, 72, 0.8)',
                'rgba(255, 68, 93, 0.8)',
                'rgba(207, 207, 207, 0.8)'
              ]
            }
          ]
        }
      },
      {
        title: 'Proposals',
        cardData: {
          value: '$86,910',
          content: 'Worth Proposal',
          items: [
            {
              title: '30 Sent',
              dotColor: 'bg-light-blue'
            },
            {
              title: '9 Approved',
              dotColor: 'bg-light-green'
            },
            {
              title: '3 Denied',
              dotColor: 'bg-light-pink'
            },
            {
              title: '11 Expired',
              dotColor: 'bg-light'
            }
          ]
        },
        chart: {
          chartType: 'doughnut',
          options: {
            centerText: 53,
            height: 110,
            width: 110,
            cutoutPercentage: 80,
            responsive: false
          },
          labels: ['Sent', 'Approved', 'Denied', 'Expired'],
          datasets: [
            {
              data: [30, 9, 3, 11]
            }
          ],
          colors: [
            {
              backgroundColor: [
                'rgba(87, 151, 252, 0.8)',
                'rgba(78, 204, 72, 0.8)',
                'rgba(255, 68, 93, 0.8)',
                'rgba(255, 222, 22, 0.8)'
              ]
            }
          ]
        }
      }
    ],
    overview: {
      map: {
        type: 'map',
        theme: 'light',
        projection: 'miller',
        imagesSettings: {
          rollOverColor: '#089282',
          rollOverScale: 3,
          selectedScale: 3,
          selectedColor: '#089282',
          color: '#13564e',
        },
        areasSettings: {
          unlistedAreasColor: '#15A892',
          rollOverColor: '#fff',
          rollOverOutlineColor: '#777'
        },
        dataProvider: {
          map: 'continentsLow',
          'areas': [{
            'id': 'africa',
            'title': 'Africa',
            'pattern': {
              'url': 'https://www.amcharts.com/lib/3/patterns/black/pattern2.png',
              'width': 4,
              'height': 4
            }
          }, {
            'id': 'asia',
            'title': 'Asia',
            'pattern': {
              'url': 'https://www.amcharts.com/lib/3/patterns/black/pattern2.png',
              'width': 4,
              'height': 4
            }
          }, {
            'id': 'australia',
            'title': 'Australia',
            'pattern': {
              'url': 'https://www.amcharts.com/lib/3/patterns/black/pattern2.png',
              'width': 4,
              'height': 4
            }
          }, {
            'id': 'europe',
            'title': 'Europe',
            'pattern': {
              'url': 'https://www.amcharts.com/lib/3/patterns/black/pattern2.png',
              'width': 4,
              'height': 4
            }
          }, {
            'id': 'north_america',
            'title': 'North America',
            'pattern': {
              'url': 'https://www.amcharts.com/lib/3/patterns/black/pattern2.png',
              'width': 4,
              'height': 4
            }
          }, {
            'id': 'south_america',
            'title': 'South America',
            'pattern': {
              'url': 'https://www.amcharts.com/lib/3/patterns/black/pattern2.png',
              'width': 4,
              'height': 4
            }
          }],
          'images': [{
            'zoomLevel': 5,
            'scale': 0.5,
            'title': 'Moscow',
            'latitude': 55.7558,
            'longitude': 37.6176,
            'dotColor': 'yellow',
            'pulseColor': 'yellow'
          }, {
            'zoomLevel': 5,
            'scale': 0.5,
            'title': 'Madrid',
            'latitude': 40.4167,
            'longitude': -3.7033,
            'dotColor': 'success',
            'pulseColor': 'success'
          }, {
            'zoomLevel': 5,
            'scale': 0.5,
            'title': 'London',
            'latitude': 51.5002,
            'longitude': -0.1262,
            'dotColor': 'yellow',
            'pulseColor': 'yellow'
          }, {
            'zoomLevel': 5,
            'scale': 0.5,
            'title': 'Peking',
            'latitude': 39.9056,
            'longitude': 116.3958,
            'dotColor': 'danger',
            'pulseColor': 'danger'
          }, {
            'zoomLevel': 5,
            'scale': 0.5,
            'title': 'New Delhi',
            'latitude': 28.6353,
            'longitude': 77.2250,
            'dotColor': 'info',
            'pulseColor': 'info'
          }, {
            'zoomLevel': 5,
            'scale': 0.5,
            'title': 'Tokyo',
            'latitude': 35.6785,
            'longitude': 139.6823,
            'dotColor': 'yellow',
            'pulseColor': 'yellow'
          }, {
            'zoomLevel': 5,
            'scale': 0.5,
            'title': 'Brasilia',
            'latitude': -15.7801,
            'longitude': -47.9292,
            'dotColor': 'danger',
            'pulseColor': 'danger'
          }, {
            'zoomLevel': 5,
            'scale': 0.5,
            'title': 'Washington',
            'latitude': 38.8921,
            'longitude': -77.0241,
            'dotColor': '',
            'pulseColor': 'primary'
          }, {
            'zoomLevel': 5,
            'scale': 0.5,
            'title': 'Kinshasa',
            'latitude': -4.3369,
            'longitude': 15.3271,
            'dotColor': 'info',
            'pulseColor': 'info'
          }, {
            'zoomLevel': 5,
            'scale': 0.5,
            'title': 'Cairo',
            'latitude': 30.0571,
            'longitude': 31.2272,
            'dotColor': 'yellow',
            'pulseColor': 'yellow'
          }, {
            'zoomLevel': 5,
            'scale': 0.5,
            'title': 'Pretoria',
            'latitude': -25.7463,
            'longitude': 28.1876,
            'dotColor': 'success',
            'pulseColor': 'success'
          }]
        },
        zoomControl: {
          panControlEnabled: false,
          zoomControlEnabled: false,
          homeButtonEnabled: true
        }
      },
      statusReports: [
        {
          label: 'Europe',
          progressBar: {
            fillVal: 55,
            maxVal: 100,
            textColor: '',
            barPosition: 'start',
            barColor: 'bg-info'
          }
        },
        {
          label: 'North America',
          progressBar: {
            fillVal: 40,
            maxVal: 100,
            textColor: '',
            barPosition: 'start',
            barColor: 'bg-success'
          }
        },
        {
          label: 'Japan, South Koria',
          progressBar: {
            fillVal: 20,
            maxVal: 100,
            textColor: '',
            barPosition: 'start',
            barColor: 'bg-yellow'
          }
        },
        {
          label: 'Other',
          progressBar: {
            fillVal: 10,
            maxVal: 100,
            textColor: '',
            barPosition: 'start',
            barColor: 'bg-light'
          }
        }
      ],
      stats: {
        revenue: '$25,890',
        revenueTitle: 'Total Revenue',
        clients: '23',
        clientsTitle: 'Clients',
        countries: '07',
        countriesTitle: 'Countries',
      }
    },
    recentTickets: [
      {
        user: {
          name: 'Joy Parish',
          thumb: 'https://via.placeholder.com/150X150',
          color: ''
        },
        message: 'Need a quick support on setting of Chatbox.',
        replied: 'replied 3 days ago',
        status: {
          text: 'Normal',
          color: 'badge-success'
        }
      },
      {
        user: {
          name: 'Babulal Kumawat',
          thumb: '',
          color: 'bg-success'
        },
        message: 'Pre-sale query about the product for Chat Support',
        replied: 'replied 2 days ago',
        status: {
          text: 'Critical',
          color: 'badge-danger'
        }
      },
      {
        user: {
          name: 'Domnic Brown',
          thumb: 'https://via.placeholder.com/150X150',
          color: ''
        },
        message: 'Regarding customization service for technical issue.',
        replied: 'replied 3 days ago',
        status: {
          text: 'High',
          color: 'badge-info'
        }
      }
    ],
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
    departments: [
      {
        name: 'Sales',
        progressBar: {
          fillVal: 14,
          maxVal: 18,
          textColor: '',
          barPosition: 'start',
          barColor: 'bg-primary'
        }
      },
      {
        name: 'Technical',
        progressBar: {
          fillVal: 12,
          maxVal: 18,
          textColor: '',
          barPosition: 'start',
          barColor: 'bg-success'
        }
      },
      {
        name: 'Account',
        progressBar: {
          fillVal: 7,
          maxVal: 18,
          textColor: '',
          barPosition: 'start',
          barColor: 'bg-yellow'
        }
      },
      {
        name: 'Dispute',
        progressBar: {
          fillVal: 3,
          maxVal: 18,
          textColor: '',
          barPosition: 'start',
          barColor: 'bg-danger'
        }
      }
    ],
    operator: {
      name: 'Joy Parish',
      thumb: 'https://via.placeholder.com/150X150',
      rating: 4.8,
      description: 'Closed 37 tickets out of 39 successfully with an average of 4.8 star rating.',
      ticketsHandled: 39,
      ticketsClosed: 37
    },
    ticketStatus: [
      {
        title: 'Opened',
        type: 'opened'
      },
      {
        title: 'Awaiting Reply',
        type: 'awaiting'
      },
      {
        title: 'Closed',
        type: 'closed'
      }
    ],
    tickets: [
      {
        user: {
          name: 'Joy Parish',
          thumb: 'https://via.placeholder.com/150X150',
          color: ''
        },
        message: 'Need a quick support on setting of Chatbox.',
        type: 'opened',
        replied: 'replied 3 days ago',
        status: {
          text: 'Normal',
          color: 'badge-success'
        }
      },
      {
        user: {
          name: 'Babulal Kumawat',
          thumb: '',
          color: 'bg-success'
        },
        message: 'Pre-sale query about the product for Chat Support',
        type: 'awaiting',
        replied: 'replied 2 days ago',
        status: {
          text: 'Critical',
          color: 'badge-danger'
        }
      },
      {
        user: {
          name: 'Domnic Brown',
          thumb: 'https://via.placeholder.com/150X150',
          color: ''
        },
        message: 'Regarding customization service for technical issue.',
        type: 'closed',
        replied: 'replied 3 days ago',
        status: {
          text: 'High',
          color: 'badge-info'
        }
      },
      {
        user: {
          name: 'Hathew Haden',
          thumb: 'https://via.placeholder.com/150X150',
          color: ''
        },
        message: 'Can’t find the community signup',
        type: 'closed',
        replied: 'replied 3 days ago',
        status: {
          text: 'Noraml',
          color: 'badge-success'
        }
      },
      {
        user: {
          name: 'Stella Johnson',
          thumb: 'https://via.placeholder.com/150X150',
          color: ''
        },
        message: 'Regarding customization service for technical issue.',
        type: 'opened',
        replied: 'replied 3 days ago',
        status: {
          text: 'High',
          color: 'badge-info'
        }
      }
    ],
    leads: {
      title: 'this year leads',
      data: {
        desktop: {
          lead: '9,365',
          data: [250, 180, 200, 350, 230]
        },
        mobile: {
          lead: '8,789',
          data: [200, 350, 250, 180, 290]
        },
        chart: {
          chartType: 'polarArea',
          options: {
            height: 200,
            width: 200,
            responsive: false,
            layout: {
              padding: 12
            },
            scale: {
              display: false
            }
          },
          labels: ['IE & Edge', 'Firefox', 'Safari', 'Chrome', 'Opera'],
          colors: [
            {
              backgroundColor: [
                'rgba(255, 68, 93, 0.8)',
                'rgba(255, 143, 58, 0.8)',
                'rgba(255, 222, 22, 0.8)',
                'rgba(78, 204, 72, 0.8)',
                'rgba(87, 151, 252, 0.8)'
              ]
            }
          ]
        },
        browsers: [
          {
            title: 'IE & Edge',
            dotColor: 'bg-sky-blue'
          },
          {
            title: 'Firefox',
            dotColor: 'bg-danger'
          },
          {
            title: 'Safari',
            dotColor: 'bg-orange'
          },
          {
            title: 'Chrome',
            dotColor: 'bg-yellow'
          },
          {
            title: 'Opera',
            dotColor: 'bg-success'
          }
        ],
      },
      countries: {
        heading: 'Top Countries',
        desc: 'List of countries with the best figure lead generation.',
        data: [
          {
            name: 'United Kingdom',
            flag: 'gb',
            lead: 27
          },
          {
            name: 'France',
            flag: 'mq',
            lead: 81
          },
          {
            name: 'India',
            flag: 'in',
            lead: 89
          },
          {
            name: ' Germany',
            flag: 'de',
            lead: 33
          },
          {
            name: ' Spain ',
            flag: 'es',
            lead: 79
          }
        ]
      },
      monthlyLead: {
        heading: 'Monthly Leads',
        desc: 'Bar chart based on monthly lead generation.',
        chart: {
          chartType: 'bar',
          options: {
            responsive: true,
            legend: {
              display: false
            },
            layout: {
              padding: 0
            },
            scales: {
              xAxes: [{
                gridLines: {
                  display: false
                },
                display: true,
                categoryPercentage: 1.0,
                barPercentage: 0.6
              }],
              yAxes: [{
                display: false
              }]
            }
          },
          labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          datasets: [
            {
              label: 'Leads',
              borderWidth: 0,
              data: [10, 15, 8, 13, 10, 14, 5, 13, 11, 8, 13, 5, 0]
            }
          ],
          colors: [
            {
              backgroundColor: '#ff445d'
            }
          ]
        }
      }
    },
    campaigns: [
      {
        title: 'Take Your Card Anywhere',
        leadGain: '97',
        totalLead: '283',
        percentLead: '60%',
        percentColor: 'text-success'
      },
      {
        title: 'Fire Your Fox With Safari',
        leadGain: '83',
        totalLead: '279',
        percentLead: '58%',
        percentColor: 'text-success'
      },
      {
        title: 'Build With Dom',
        leadGain: '03',
        totalLead: '147',
        percentLead: '02%',
        percentColor: 'text-danger'
      },
      {
        title: 'A New Way To Live Life',
        leadGain: '00',
        totalLead: '07',
        percentLead: '00%',
        percentColor: 'text-danger'
      },
      {
        title: 'Fire Your Fox With Safari',
        leadGain: '83',
        totalLead: '279',
        percentLead: '68%',
        percentColor: 'text-success'
      }
    ],
    socialMedia: [
      {
        title: 'Facebook Ads',
        logo: {
          icon: 'facebook',
          color: 'text-primary'
        },
        likes: 63,
        shares: 387,
        spent: 570,
        progress: '20%'
      },
      {
        title: 'Twitter Ads',
        logo: {
          icon: 'twitter',
          color: 'text-sky-blue'
        },
        likes: 63,
        shares: 387,
        spent: 813,
        progress: '+20%'
      },
      {
        title: 'Instagram Ads',
        logo: {
          icon: 'instagram',
          color: 'text-light-pink'
        },
        likes: 63,
        shares: 387,
        spent: 2813,
        progress: '+20%'
      }
    ],
    projects: [
      {
        id: 1,
        title: 'ChatBull minor bug fixes',
        logo: {
          img: '',
          icon: 'chatbull',
          color: 'text-indigo'
        },
        color: 'bg-success',
        avgProgress: 55,
        tasks: 20
      },
      {
        id: 2,
        title: 'Wireframe of new project',
        logo: {
          img: '',
          icon: 'projects',
          color: 'text-orange'
        },
        color: 'bg-orange',
        avgProgress: 10,
        tasks: 10
      },
      {
        id: 3,
        title: 'New lead generation',
        logo: {
          img: '',
          icon: 'leads1',
          color: 'text-light-pink'
        },
        color: 'bg-danger',
        avgProgress: 20,
        tasks: 16
      },
      {
        id: 4,
        title: 'HR Management System',
        logo: {
          img: '',
          icon: 'revenue-new',
          color: 'text-yellow'
        },
        color: 'bg-info',
        avgProgress: 60,
        tasks: 117
      },
      {
        id: 5,
        title: 'Motorola’s New MOTO Z',
        logo: {
          img: '',
          icon: 'smart-phone-fill',
          color: 'text-light-green'
        },
        color: 'bg-yellow',
        avgProgress: 40,
        tasks: 271
      },
      {
        id: 6,
        title: 'Samsung’s New Galaxy',
        logo: {
          img: '',
          icon: 'smart-phone',
          color: 'text-sky-blue'
        },
        color: 'bg-dark',
        avgProgress: 52,
        tasks: 71
      }
    ],
    tasksReport: {
      data: [
        {
          label: 'Completed',
          dotColor: 'bg-success',
          value: 8
        },
        {
          label: 'Overdue',
          dotColor: 'bg-danger',
          value: 6
        },
        {
          label: 'Due',
          dotColor: 'bg-warning',
          value: 3
        }
      ],
      chart: {
        'type': 'gauge',
        'theme': 'light',
        'axes': [{
          'axisAlpha': 0,
          'tickAlpha': 0,
          'labelsEnabled': false,
          'startValue': 0,
          'endValue': 12,
          'startAngle': 0,
          'endAngle': 360,
          'bands': [{
            'color': '#eee',
            'startValue': 0,
            'endValue': 12,
            'radius': '100%',
            'innerRadius': '95%'
          }, {
            'color': '#52c41a',
            'startValue': 0,
            'endValue': 8,
            'radius': '100%',
            'innerRadius': '95%',
            'balloonText': '6.5'
          }, {
            'color': '#eee',
            'startValue': 0,
            'endValue': 12,
            'radius': '90%',
            'innerRadius': '85%'
          }, {
            'color': '#f44336',
            'startValue': 0,
            'endValue': 6,
            'radius': '90%',
            'innerRadius': '85%',
            'balloonText': '2.5'
          }, {
            'color': '#eee',
            'startValue': 0,
            'endValue': 12,
            'radius': '80%',
            'innerRadius': '75%'
          }, {
            'color': '#fa8c16',
            'startValue': 0,
            'endValue': 3,
            'radius': '80%',
            'innerRadius': '75%',
            'balloonText': '5'
          }]
        }],
        'allLabels': [{
          'text': '23 Tasks',
          'y': '45%',
          'size': 12,
          'bold': true,
          'color': '#212121',
          'align': 'center'
        }]
      }
    }
  };
}
