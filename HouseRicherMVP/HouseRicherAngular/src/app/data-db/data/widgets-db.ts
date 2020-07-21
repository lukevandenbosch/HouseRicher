import * as Chartist from 'chartist';

export class WidgetsDb {
  public static widgets = {
    project: {
      title: 'Foxpro Admin',
      logo: 'assets/images/widget/icon-project.png',
      teams: [
        {
          name: 'Reece Jacklin',
          thumb: 'https://via.placeholder.com/150X150',
          color: ''
        },
        {
          name: 'Steve Smith',
          thumb: 'https://via.placeholder.com/150X150',
          color: ''
        },
        {
          name: 'Alex Dolgove',
          thumb: 'https://via.placeholder.com/150X150',
          color: 'bg-light-blue text-white'
        },
        {
          name: 'Yogendra Singh',
          thumb: '',
          color: 'bg-primary text-white'
        },
      ],
      route: '/apps/task-manager/project/49e4e2aa-bac7-d087-8878-20615bc93f1c'
    },
    employee: {
      profile: {
        name: 'Taylor Miller',
        thumb: 'https://via.placeholder.com/150X150',
        color: '',
        designation: 'Crypto Expert'
      },
      progress: {
        value: '38%',
        icon: 'pointer-up',
        text: 'Productivity'
      },
      chart: {
        shadowType: '',
        chartType: 'line',
        options: {
          height: 80,
          responsive: true,
          legend: {
            display: false
          },
          layout: {
            padding: 0
          },
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }]
          }
        },
        datasets: [
          {
            data: [200, 800, 600, 1750, 1000, 1900, 1725, 1900, 1700],
            label: 'Productivity',
            pointRadius: 0,
            borderWidth: 0,
            hoverBorderWidth: 0,
            pointBorderWidth: 0,
            pointHoverBorderWidth: 0
          }
        ],
        labels: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G', 'Page G', 'Page G'],
        colors: [
          {
            backgroundColor: '#e3e2e2',
            borderColor: '#e3e2e2'
          }
        ],
        gradients: ''
      }
    },
    carousels: [
      {
        media: 'https://via.placeholder.com/640X420',
        title: 'Explore: Taj Mahel',
        content: 'One of the beautiful wonders in the world you must visit. Mother nature want'
      },
      {
        media: 'https://via.placeholder.com/640X420',
        title: 'Explore: Taj Mahel',
        content: 'One of the beautiful wonders in the world you must visit. Mother nature want'
      },
      {
        media: 'https://via.placeholder.com/640X420',
        title: 'Explore: Taj Mahel',
        content: 'One of the beautiful wonders in the world you must visit. Mother nature want'
      }
    ],
    carousel_card_horizontal: {
      imageUrls: [
        'https://via.placeholder.com/640X420',
        'https://via.placeholder.com/640X420',
        'https://via.placeholder.com/640X420'
      ],
      title: 'A single right green step',
      content: 'Mother nature want you to become a part of it and feel the love. There could be more which you can take as an initiative and collaborate in making this world a better world.',
      actionLabel: 'Read More',
      actionRoute: '/',
      actionStyle: 'font-weight-500 f-12 text-uppercase'
    },
    newsletter: {
      title: '',
      titleIcon: 'news',
      description: 'Don’t miss our weekly news and updates',
      btnText: 'Subscribe'
    },
    info_cards: [
      {
        style: 'basic',
        data: {
          handleColor: '',
          title: 'Polaroid Cam',
          titleStyle: '',
          image: 'https://via.placeholder.com/144X123',
          content: '$129.00',
          actionRoute: '/',
          actionLabel: 'Add to Cart',
          actionStyles: 'bg-brown text-white',
          bodyClassNames: 'px-5'
        }
      },
      {
        style: 'classic',
        data: {
          handleColor: '',
          title: 'iPhone XR',
          titleStyle: '',
          image: 'https://via.placeholder.com/114X188',
          content: 'Legendary phone by Apple.com',
          actionRoute: '/',
          actionLabel: 'Learn more',
          actionStyles: '',
          bodyClassNames: ''
        }
      },
      {
        style: 'panel',
        data: {
          handleColor: '',
          title: 'Top 10 Gadgets',
          titleStyle: '',
          image: 'https://via.placeholder.com/180X180',
          content: '',
          actionRoute: '/',
          actionLabel: 'learn more',
          actionStyles: 'btn-primary',
          bodyClassNames: 'text-center'
        }
      }
    ],
    media_card: {
      title: '',
      media: 'https://via.placeholder.com/640X420',
      content: 'Smart home on iPad with smart kids',
      actionLabel: 'Read More',
      actionRoute: '/',
      actionStyle: 'font-weight-500 f-12 text-uppercase'
    },
    work_status: {
      title: 'Work Status',
      content: 'Last week progress',
      profit: '76%',
      chart: {
        type: 'Line',
        data: {
          labels: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G', 'Page K', 'Page M', 'Page R'],
          series: [
            [1900, 1800, 2500, 2200, 3600, 1400, 2200, 1300, 1880, 1750]
          ]
        },
        options: {
          showArea: true,
          showPoint: false,
          fullWidth: true,
          showLine: true,
          height: 75,
          chartPadding: 0,
          axisX: {
            showGrid: false,
            offset: 0,
            showLabel: false
          },
          axisY: {
            showGrid: false,
            low: 20,
            scaleMinSpace: 50,
            showLabel: false,
            offset: 0,
          }
        }
      }
    },
    introCard: {
      titlePos: 'top',
      data: {
        title: 'Mila Alba',
        subtitle: 'Creative Head',
        badge: 'New',
        content: '@example',
        media: 'https://via.placeholder.com/150X150',
        route: '/'
      }
    },
    flexCard: {
      titlePos: 'middle',
      data: {
        title: 'Shopping Malls',
        subtitle: 'Properties this week',
        badge: '34 New',
        content: '',
        media: 'assets/images/widget/shop-icon.png',
        route: '/'
      }
    },
    active_users: {
      shadowType: 'area',
      data: {
        trending: {
          value: '84%',
          icon: 'pointer-up',
          color: 'text-success'
        },
        tagline: {
          text: 'Increment in Active users'
        }
      }
    },
    campaign: {
      title: '381 Page Views',
      sub_title: 'Past Month',
      route: '/'
    },
    outdoor: {
      media: 'https://via.placeholder.com/640X420',
      category: 'Health & Fitness',
      title: 'Simple way to reduce your fat, get started with this...',
      content: 'Had a great time with family on beach this weekend. Now charged for the next one!',
      thumbnails: [
        'https://via.placeholder.com/640X420',
        'https://via.placeholder.com/640X420',
        'https://via.placeholder.com/640X420'
      ]
    },
    analyticsCards: [
      {
        title: 'Today\'s Visitor',
        description: 'Last update on 08:30 PM',
        icon: {
          name: 'users',
          colorClasses: 'bg-primary text-primary'
        },
        number: '2500',
        percent: '23',
        positiveGrowth: true
      },
      {
        title: 'Properties Listed',
        description: 'Last update 1 Month ago',
        icon: {
          name: 'company',
          colorClasses: 'bg-success text-success'
        },
        number: '2,45,855',
        percent: '23',
        positiveGrowth: true
      },
      {
        title: 'Total Vendors',
        description: 'Just updated',
        icon: {
          name: 'customer',
          colorClasses: 'bg-secondary text-secondary'
        },
        number: '508',
        percent: '5',
        positiveGrowth: false
      },
      {
        title: 'Today\'s Profit',
        description: 'Last update 30 Min ago',
        icon: {
          name: 'revenue-new',
          colorClasses: 'bg-orange text-orange'
        },
        number: '$12,588',
        percent: '23',
        positiveGrowth: true
      }
    ],
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
    pricingPlans: [
      {
        title: 'Basic',
        color: 'border-success',
        subscribers: 1200,
        monthlyPrice: 150
      },
      {
        title: 'Platinum',
        color: 'border-danger',
        subscribers: 1100,
        monthlyPrice: 170
      },
      {
        title: 'Per Property',
        color: 'border-info',
        subscribers: 1800,
        monthlyPrice: 140
      }
    ],
    teamCategories: [
      {name: 'Marketing', slug: 'marketing'},
      {name: 'Account', slug: 'account'},
      {name: 'Development', slug: 'development'}
    ],
    teamMembers: [
      {
        name: 'Alex Dolgove',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['marketing', 'development']
      },
      {
        name: 'Amay',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['account']
      },
      {
        name: 'Anisha',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['marketing', 'account', 'development']
      },
      {
        name: 'Daisy',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['marketing', 'development']
      },
      {
        name: 'Domnic Brown',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['account', 'development']
      },
      {
        name: 'Domnic Harris',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['marketing']
      },
      {
        name: 'Ellen Manning',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['account']
      },
      {
        name: 'Garry Sobars',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['account']
      },
      {
        name: 'Jeson Born',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['marketing', 'development']
      },
      {
        name: 'Jimmy Jo',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['marketing', 'development']
      },
      {
        name: 'Jone Smith',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['development']
      },
      {
        name: 'Kadir Black',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['account']
      },
      {
        name: 'Kemroon White',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['development']
      },
      {
        name: 'Mathew Miller',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['marketing', 'account']
      },
      {
        name: 'Lila Alba',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['development']
      },
      {
        name: 'Nikki John',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['development']
      },
      {
        name: 'Noah Owens',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['account']
      },
      {
        name: 'Selena Poker',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['marketing']
      },
      {
        name: 'Stella Johnson',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['marketing']
      },
      {
        name: 'Steve Smith',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['account']
      },
      {
        name: 'Taylor Miller',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['marketing']
      },
      {
        name: 'Jaklin Desuja',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['development']
      },
      {
        name: 'Garry Poter',
        thumb: 'https://via.placeholder.com/150X150',
        phoneNo: '955-384-0512',
        categories: ['account']
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
              data: [10, 15, 8, 13, 10, 14, 4, 13, 11, 8, 13, 4, 0]
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
    supportTickets: [
      {
        heading: 'Need a quick support on setting',
        priority: {
          label: 'Critical',
          color: 'badge-danger'
        },
        user: {
          name: 'Joy Parish',
          thumb: 'https://via.placeholder.com/150X150'
        },
        created: new Date(2019, 5, 6, 12, 30)
      },
      {
        heading: 'I am looking for premium plan subscription.',
        priority: {
          label: 'Normal',
          color: 'badge-success'
        },
        user: {
          name: 'Kemroon White',
          thumb: 'https://via.placeholder.com/150X150'
        },
        created: new Date(2019, 3, 6, 12, 30)
      },
      {
        heading: 'I am trying to add 10+ properties into my list, but it don.t',
        priority: {
          label: 'High',
          color: 'badge-warning'
        },
        user: {
          name: 'Jeson Born',
          thumb: 'https://via.placeholder.com/150X150'
        },
        created: new Date(2019, 4, 5, 12, 30)
      },
      {
        heading: 'My property listing is not available in futured list.',
        priority: {
          label: 'Normal',
          color: 'badge-success'
        },
        user: {
          name: 'Steve Smith',
          thumb: 'https://via.placeholder.com/150X150'
        },
        created: new Date(2019, 4, 6, 10, 16)
      },
      {
        heading: 'Please remove my account from your website.',
        priority: {
          label: 'High',
          color: 'badge-warning'
        },
        user: {
          name: 'Selena',
          thumb: 'https://via.placeholder.com/150X150'
        },
        created: new Date(2019, 4, 6, 12, 30)
      },
      {
        heading: 'How to upgrade my plan from basic to per property?',
        priority: {
          label: 'Normal',
          color: 'badge-success'
        },
        user: {
          name: 'Mathew',
          thumb: 'https://via.placeholder.com/150X150'
        },
        created: new Date(2019, 4, 4, 16, 30)
      },
      {
        heading: 'I did not able to receive message on my mail.',
        priority: {
          label: 'Critical',
          color: 'badge-danger'
        },
        user: {
          name: 'Garry Sobars',
          thumb: 'https://via.placeholder.com/150X150'
        },
        created: new Date(2019, 4, 7, 14, 25)
      },
      {
        heading: 'Getting technical error in install your plugin',
        priority: {
          label: 'High',
          color: 'badge-danger'
        },
        user: {
          name: 'Amay mathur',
          thumb: 'https://via.placeholder.com/150X150'
        },
        created: new Date(2019, 4, 7, 5, 45)
      }
    ],
    vendorRequests: [
      {
        thumb: 'https://via.placeholder.com/115X58',
        name: 'Goyal and Co.',
        badge: 'Basic',
        badgeColor: 'badge-success',
        email: 'missouri.gerhold@example.com',
        placed: 'Today'
      },
      {
        thumb: 'https://via.placeholder.com/115X58',
        name: 'Swati Procon',
        badge: 'Platinum',
        badgeColor: 'badge-info',
        email: 'swati.procon@example.com',
        placed: 'Today'
      },
      {
        thumb: 'https://via.placeholder.com/115X58',
        name: 'Sparsh Procon Pvt. Ltd.',
        badge: 'Basic',
        badgeColor: 'badge-success',
        email: 'sparsh.procon@example.com',
        placed: 'Today'
      },
      {
        thumb: 'https://via.placeholder.com/115X58',
        name: 'SS Group',
        badge: 'Per Property',
        badgeColor: 'badge-danger',
        email: 'ss.group@example.com',
        placed: 'Today'
      },
      {
        thumb: 'https://via.placeholder.com/115X58',
        name: 'Swetalee Developers',
        badge: 'Platinum',
        badgeColor: 'badge-info',
        email: 'swetalee.developers@example.com',
        placed: 'Today'
      },
      {
        thumb: 'https://via.placeholder.com/115X58',
        name: 'Savvy Infrastructure',
        badge: 'Basic',
        badgeColor: 'badge-success',
        email: 'savvy.infrastructure@example.com',
        placed: 'Today'
      },
      {
        thumb: 'https://via.placeholder.com/115X58',
        name: 'Peter Brown',
        badge: 'Basic',
        badgeColor: 'badge-success',
        email: 'peter.brown@example.com',
        placed: 'Today'
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
    socialCards: [
      {
        title: 'Facebook',
        color: 'indigo',
        likes: '2.5k',
        friends: '1.4k',
        followers: '',
        logoIcon: 'facebook'
      },
      {
        title: 'Twitter',
        color: 'sky-blue',
        likes: '800',
        friends: '',
        followers: '2.1k',
        logoIcon: 'twitter'
      },
      {
        title: 'YouTube',
        color: 'light-brown',
        likes: '2.5k',
        friends: '1.4k',
        followers: '',
        logoIcon: 'youtube'
      },
      {
        title: 'LinkedIn',
        color: 'light-teal',
        likes: '1k',
        friends: '807',
        followers: '',
        logoIcon: 'linkedin'
      }
    ],
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
    },
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
      }
    ],
    referralTrafficChart: {
      chartType: 'doughnut',
      options: {
        responsive: false,
        height: 120,
        width: 120,
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
    vendors: [
      {
        logo: 'https://via.placeholder.com/115X58',
        company: 'Goyal and Co.',
        siteUrl: '#',
        properties: '4122',
        favorites: '1225',
        category: 'premium'
      },
      {
        logo: 'https://via.placeholder.com/115X58',
        company: 'Savaliya Builders',
        siteUrl: '#',
        properties: '4122',
        favorites: '1225',
        category: 'premium'
      },
      {
        logo: 'https://via.placeholder.com/115X58',
        company: 'Galaxy Group Pvt. Ltd',
        siteUrl: '#',
        properties: '4122',
        favorites: '1225',
        category: 'premium'
      },
      {
        logo: 'https://via.placeholder.com/115X58',
        company: 'Savvy Infrastructure',
        siteUrl: '#',
        properties: '4122',
        favorites: '1225',
        category: 'premium'
      },
      {
        logo: 'https://via.placeholder.com/115X58',
        company: 'Galaxy Group Pvt. Ltd',
        siteUrl: '#',
        properties: '4122',
        favorites: '1225',
        category: 'full'
      },
      {
        logo: 'https://via.placeholder.com/115X58',
        company: 'Goyal and Co.',
        siteUrl: '#',
        properties: '4122',
        favorites: '1225',
        category: 'full'
      },
      {
        logo: 'https://via.placeholder.com/115X58',
        company: 'Sparsh Procon Pvt. Ltd.',
        siteUrl: '#',
        properties: '4122',
        favorites: '1225',
        category: 'full'
      },
      {
        logo: 'https://via.placeholder.com/115X58',
        company: 'Savvy Infrastructure',
        siteUrl: '#',
        properties: '4122',
        favorites: '1225',
        category: 'full'
      }
    ],
    properties: [
      {
        title: 'Nakshtra Banglow',
        visitors: 1422,
        location: 'Kunjgali, Vrindavan'
      },
      {
        title: 'Siddhi Banglow',
        visitors: 1260,
        location: 'Mumbay, India'
      },
      {
        title: 'Sankalp Grace 2',
        visitors: 1322,
        location: 'Chankyapuri, Jodhpur'
      },
      {
        title: 'Arayan Villa',
        visitors: 1002,
        location: 'Satellite, New Delhi'
      }
    ],
    reviews: [
      {
        avgRating: 1,
        masRating: 5,
        totalReview: 5
      },
      {
        avgRating: 2,
        masRating: 5,
        totalReview: 20
      },
      {
        avgRating: 3,
        masRating: 5,
        totalReview: 75
      },
      {
        avgRating: 4,
        masRating: 5,
        totalReview: 100
      },
      {
        avgRating: 5,
        masRating: 5,
        totalReview: 150
      }
    ],
    invoicesList: [
      {
        invoiceNo: 458,
        invoiceTo: 'Setu Infracon',
        invoiceDate: '10 Sep 2018',
        amount: 556
      },
      {
        invoiceNo: 568,
        invoiceTo: 'Savvy Infrastructure',
        invoiceDate: '26 May 2018',
        amount: 998
      },
      {
        invoiceNo: 998,
        invoiceTo: 'Dhiraj Builders',
        invoiceDate: '15 Nov 2018',
        amount: 562
      },
      {
        invoiceNo: 452,
        invoiceTo: 'Goyal and Co.',
        invoiceDate: '11 Jun 2018',
        amount: 784
      },
      {
        invoiceNo: 231,
        invoiceTo: 'Lodha Developers',
        invoiceDate: '11 Dec 2018',
        amount: 356
      },

    ]
  };
}
