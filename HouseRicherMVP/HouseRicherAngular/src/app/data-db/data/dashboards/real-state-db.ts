export class RealStateDb {
  public static widgets = {
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
    topVendors: [
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
        company: 'Sparsh Procon Pvt. Ltd.',
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
      },
      {
        logo: 'https://via.placeholder.com/115X58',
        company: 'Savaliya Builders',
        siteUrl: '#',
        properties: '4122',
        favorites: '1225',
        category: 'full'
      }
    ],
    trendingProperties: [
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
      },
      {
        title: 'Goyal Arcus',
        visitors: 1422,
        location: 'Gohilwad, Bikaner'
      }
    ],
    places: [
      {
        location: 'West Lenny',
        category: 'city',
        properties: 1255,
        vendors: 356,
        visitors: 71532
      },
      {
        location: 'Lake Jeffry',
        category: 'city',
        properties: 325,
        vendors: 576,
        visitors: 62022
      },
      {
        location: 'North Maybelle',
        category: 'city',
        properties: 856,
        vendors: 356,
        visitors: 15625
      },
      {
        location: 'North Duane',
        category: 'city',
        properties: 6594,
        vendors: 985,
        visitors: 21456
      },
      {
        location: 'Turnerborough',
        category: 'city',
        properties: 5642,
        vendors: 369,
        visitors: 87954
      },
      {
        location: 'Lake Jeffry',
        category: 'state',
        properties: 2564,
        vendors: 986,
        visitors: 98564
      },
      {
        location: 'West Lenny',
        category: 'state',
        properties: 4586,
        vendors: 695,
        visitors: 89568
      },
      {
        location: 'North Maybelle',
        category: 'state',
        properties: 4856,
        vendors: 562,
        visitors: 45689
      },
      {
        location: 'North Duane',
        category: 'state',
        properties: 2456,
        vendors: 362,
        visitors: 36524
      },
      {
        location: 'Rajasthan',
        category: 'state',
        properties: 8954,
        vendors: 987,
        visitors: 89523
      },
      {
        location: 'West Lenny',
        category: 'area',
        properties: 5689,
        vendors: 456,
        visitors: 25642
      },
      {
        location: 'Lake Jeffry',
        category: 'area',
        properties: 3659,
        vendors: 754,
        visitors: 45698
      },
      {
        location: 'North Duane',
        category: 'area',
        properties: 1452,
        vendors: 256,
        visitors: 32587
      },
      {
        location: 'Jaipur',
        category: 'area',
        properties: 9852,
        vendors: 698,
        visitors: 78459
      },
      {
        location: 'Bikaner',
        category: 'area',
        properties: 3598,
        vendors: 785,
        visitors: 58694
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
    propertiesList: [
      {
        name: 'Pacifica La Habitat',
        ownerName: 'Swetalee Developers',
        city: 'Shieldsville',
        state: 'Congo',
        price: '$12Lac'
      },
      {
        name: 'Nakshtra Banglow',
        ownerName: 'Savaliya Builders',
        city: 'Lake Zachary',
        state: 'Kazakhstan',
        price: '$1Lacs - 15Lacs'
      },
      {
        name: 'Siddhi Banglow',
        ownerName: 'Bakeri Group',
        city: 'Gillianville',
        state: 'Botswana',
        price: '$2Lacs'
      },
      {
        name: 'Goyal Arcus',
        ownerName: 'Signature Group',
        city: 'West Lowell',
        state: 'Norfolk Island',
        price: '$75k'
      },
      {
        name: 'Pacifica La Habitat',
        ownerName: 'Swetalee Developers',
        city: 'Shieldsville',
        state: 'Congo',
        price: '$12Lac'
      },
      {
        name: 'Pacifica La Habitat',
        ownerName: 'Sapphire Group',
        city: 'Lake Caroline',
        state: 'Bahrain',
        price: '$85k'
      },
      {
        name: 'Sankalp Grace 2',
        ownerName: 'Setu Infracon',
        city: 'Bernadineburgh',
        state: 'Djibouti',
        price: '$1.99 Lacs'
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
        categories: [ 'development']
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
    invoices: [
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
