export class ListingDb {
  public static widgets = {
    charts: [
      {
        bgcolor: 'bg-primary',
        data: {
          title: 'Properties',
          heading: '26,873',
          sub_heading: '03%',
          icon: 'pointer-up',
          tagline: 'This Week'
        },
        chart: {
          chartType: 'line',
          labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          datasets: [
            {
              data: [70, 425, 263, 820, 290, 1060, 230],
              label: 'Properties',
              pointRadius: 0,
              pointBorderWidth: 0,
              pointHoverBorderWidth: 0
            }
          ],
          options: {
            height: 110,
            maintainAspectRatio: false,
            elements: {
              line: {
                tension: 0, // disables bezier curves
              }
            }
          },
          colors: [
            {
              backgroundColor: '#867AE5',
              borderColor: '#867AE5',
              hoverBorderColor: '#867AE5'
            }
          ]
        }
      },
      {
        bgcolor: 'bg-warning',
        data: {
          title: 'Cities',
          heading: '384',
          sub_heading: '',
          icon: '',
          tagline: '7 New cities this week'
        },
        chart: {
          chartType: 'line',
          labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          datasets: [
            {
              data: [70, 325, 163, 620, 190, 860, 230],
              label: 'Cities',
              pointRadius: 0,
              pointBorderWidth: 0,
              pointHoverBorderWidth: 0
            }
          ],
          options: {
            height: 110,
            maintainAspectRatio: false
          },
          colors: [
            {
              backgroundColor: '#b47928',
              borderColor: '#b47928',
              hoverBorderColor: '#b47928'
            }
          ]
        }
      },
      {
        bgcolor: 'bg-light-green',
        data: {
          title: 'Online Visits',
          heading: '284,726',
          sub_heading: '',
          icon: '',
          tagline: 'Avg. 327 visits daily'
        },
        chart: {
          chartType: 'line',
          labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          datasets: [
            {
              data: [170, 450, 163, 720, 190, 860, 230],
              label: 'Online Visits',
              pointRadius: 0,
              pointBorderWidth: 0,
              pointHoverBorderWidth: 0
            }
          ],
          options: {
            height: 110,
            maintainAspectRatio: false,
            elements: {
              line: {
                tension: 0, // disables bezier curves
              }
            }
          },
          colors: [
            {
              backgroundColor: '#078d79',
              borderColor: '#078d79',
              hoverBorderColor: '#078d79'
            }
          ]
        }
      },
      {
        bgcolor: 'bg-secondary',
        data: {
          title: 'Online Queries',
          heading: '87,239',
          sub_heading: '39%',
          icon: 'pointer-up',
          tagline: 'from past month'
        },
        chart: {
          chartType: 'line',
          labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          datasets: [
            {
              data: [170, 450, 163, 720, 190, 860, 230],
              label: 'Online Queries',
              pointRadius: 0,
              pointBorderWidth: 0,
              pointHoverBorderWidth: 0
            }
          ],
          options: {
            height: 110,
            maintainAspectRatio: false,
            elements: {
              line: {
                tension: 0, // disables bezier curves
              }
            }
          },
          colors: [
            {
              backgroundColor: '#a14776',
              borderColor: '#a14776',
              hoverBorderColor: '#a14776'
            }
          ]
        }
      }
    ],
    statistics: [
      {
        amount: 26873,
        heading: {
          text: 'Listed Property'
        },
        trending: {
          text: '03%',
          color: 'text-success'
        },
        tagLine: {
          text: 'This week'
        },
        progressBar: {
          val: 62,
          maxVal: 100,
          color: 'bg-primary'
        }
      },
      {
        amount: 384,
        heading: {
          text: 'Serving Cities'
        },
        tagLine: {
          text: '7 New cities this week'
        },
        progressBar: {
          val: 48,
          maxVal: 100,
          color: 'bg-warning'
        }
      },
      {
        amount: 84729,
        heading: {
          text: 'Online Visitors'
        },
        tagLine: {
          text: 'Avg. 327 visits daily'
        },
        progressBar: {
          val: 85,
          maxVal: 100,
          color: 'bg-success'
        }
      },
      {
        amount: 87239,
        heading: {
          text: 'Online queries'
        },
        trending: {
          text: '38%',
          color: 'text-success',
          icon: 'pointer-up'
        },
        tagLine: {
          text: 'past month'
        },
        progressBar: {
          val: 90,
          maxVal: 100,
          color: 'bg-secondary'
        }
      }
    ],
    clients: [
      {
        name: 'Noah Owens',
        thumb: 'https://via.placeholder.com/150X150',
        rating: 4.9,
        deals: '27 Deals'
      },
      {
        name: 'Ellen Manning',
        thumb: 'https://via.placeholder.com/150X150',
        rating: 4.5,
        deals: '21 Deals'
      },
      {
        name: 'Angel Jones',
        thumb: 'https://via.placeholder.com/150X150',
        rating: 4.7,
        deals: '13 Deals'
      },
      {
        name: 'Dollie Norton',
        thumb: 'https://via.placeholder.com/150X150',
        rating: 4.4,
        deals: '21 Deals'
      },
      {
        name: 'Joshua Brian',
        thumb: 'https://via.placeholder.com/150X150',
        rating: 4.3,
        deals: ' 07 Deals'
      },
      {
        name: 'Amay Mathur',
        thumb: 'https://via.placeholder.com/150X150',
        rating: 4.3,
        deals: ' 07 Deals'
      },
      {
        name: 'Selena',
        thumb: 'https://via.placeholder.com/150X150',
        rating: 4.4,
        deals: ' 07 Deals'
      },
      {
        name: 'Chris Mathew',
        thumb: 'https://via.placeholder.com/150X150',
        rating: 3.3,
        deals: ' 07 Deals'
      },
      {
        name: 'Nikki Johnson',
        thumb: 'https://via.placeholder.com/150X150',
        rating: 4.9,
        deals: ' 07 Deals'
      },
      {
        name: 'Lara Crpft',
        thumb: '',
        rating: 4.5,
        deals: ' 07 Deals'
      }
    ],
    closedDeals: {
      data: {
        title: '927 Deals Closed',
        sub_title: 'This year',
        legends: [
          {
            name: 'Queries',
            color: 'bg-secondary'
          },
          {
            name: 'Closed Deals',
            color: 'bg-primary'
          }
        ]
      },
      chart: {
        chartType: 'Line',
        lineSmooth: 1,
        options: {
          showArea: true,
          showPoint: false,
          fullWidth: true,
          axisY: {
            showGrid: false,
            low: 0,
            scaleMinSpace: 50,
            showLabel: false,
            offset: 0,
          }
        },
        data: {
          labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          series: [
            [78, 84, 85, 75, 55, 45, 46, 55, 65, 73, 76, 74, 68],
            [65, 72, 73, 69, 60, 50, 41, 39, 43, 55, 62, 61, 56]
          ]
        }
      }
    },
    categories: ['Popular', 'New Jersey', 'Colorado', 'Albama'],
    properties: [
      {
        imageUrls: [
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420'
        ],
        is_featured: true,
        for: 'For sale',
        favourite: true,
        title: 'Property & sidebar agent',
        category: 'Popular',
        location: 'Sublevel, Hialeah, Florida',
        bedrooms: 3,
        area: '1200 m<sup>2</sup>\'',
        price: 113859,
        unit: '6705/sqft',
        author: 'John Nash',
        posted: '2 years ago'
      },
      {
        imageUrls: [
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420'
        ],
        is_featured: true,
        for: 'For sale',
        favourite: false,
        title: 'Property & agent at bottom',
        category: 'New Jersey',
        location: 'Miami, Florida',
        bedrooms: 4,
        area: '1000 SQ FT',
        price: 125326,
        unit: '5230/sqft',
        author: 'Martin Luthor',
        posted: '2 months ago'
      },
      {
        imageUrls: [
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420'
        ],
        is_featured: false,
        for: 'For Rental',
        favourite: true,
        title: 'Modern apartment on 5th floor with views of the Lake',
        category: 'Popular',
        location: 'Saint Petersburg, Florida',
        bedrooms: 5,
        area: '1230 SQ FT',
        price: 113859,
        unit: '5130/sqft',
        author: 'Nikol James',
        posted: '3 months ago'
      },
      {
        imageUrls: [
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420'
        ],
        is_featured: false,
        for: 'For sale',
        favourite: false,
        title: 'Sell beautiful Studio in one of the best areas',
        category: 'New Jersey',
        location: 'South Western Ave',
        bedrooms: 3,
        area: '15000 m<sup>2</sup>',
        price: 130655,
        unit: '4522/sqft',
        author: 'Haris Vilium',
        posted: '15 days ago'
      },
      {
        imageUrls: [
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420'
        ],
        is_featured: true,
        for: 'For sale',
        favourite: true,
        title: 'Property & sidebar agent',
        category: 'New Jersey',
        location: 'Sublevel, Hialeah, Florida',
        bedrooms: 3,
        area: '1200 m<sup>2</sup>\'',
        price: 113859,
        unit: '6705/sqft',
        author: 'John Nash',
        posted: '2 years ago'
      },
      {
        imageUrls: [
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420'
        ],
        is_featured: true,
        for: 'For Rental',
        favourite: false,
        title: 'Property & agent at bottom',
        category: 'Colorado',
        location: 'Miami, Florida',
        bedrooms: 4,
        area: '1000 SQ FT',
        price: 125326,
        unit: '5230/sqft',
        author: 'Martin Luthor',
        posted: '2 months ago'
      },
      {
        imageUrls: [
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420'
        ],
        is_featured: false,
        for: 'For Rental',
        favourite: true,
        title: 'Property & agent at bottom',
        category: 'Popular',
        location: 'Miami, Florida',
        bedrooms: 4,
        area: '1000 SQ FT',
        price: 125326,
        unit: '5230/sqft',
        author: 'Martin Luthor',
        posted: '2 months ago'
      },
      {
        imageUrls: [
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420'
        ],
        is_featured: false,
        for: 'For sale',
        favourite: false,
        title: 'Modern apartment on 5th floor with views of the Lake',
        category: 'Albama',
        location: 'Saint Petersburg, Florida',
        bedrooms: 5,
        area: '1230 SQ FT',
        price: 113859,
        unit: '5130/sqft',
        author: 'Nikol James',
        posted: '3 months ago'
      },
      {
        imageUrls: [
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420'
        ],
        is_featured: true,
        for: 'For Rental',
        favourite: true,
        title: 'Property & sidebar agent',
        category: 'Colorado',
        location: 'Sublevel, Hialeah, Florida',
        bedrooms: 3,
        area: '1200 m<sup>2</sup>\'',
        price: 113859,
        unit: '6705/sqft',
        author: 'John Nash',
        posted: '2 years ago'
      },
      {
        imageUrls: [
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420'
        ],
        is_featured: true,
        for: 'For sale',
        favourite: true,
        title: 'Property & agent at bottom',
        category: 'Albama',
        location: 'Miami, Florida',
        bedrooms: 4,
        area: '1000 SQ FT',
        price: 125326,
        unit: '5230/sqft',
        author: 'Martin Luthor',
        posted: '2 months ago'
      },
      {
        imageUrls: [
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420'
        ],
        is_featured: false,
        for: 'For Rental',
        favourite: true,
        title: 'Apartment for sale with high quality finishing',
        category: 'Colorado',
        location: 'New York',
        bedrooms: 5,
        area: '5761 SQ FT',
        price: 849000,
        unit: '3199/sqft',
        author: 'Christopher Pakulla',
        posted: '1 year ago'
      },
      {
        imageUrls: [
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420',
          'https://via.placeholder.com/640X420'
        ],
        is_featured: true,
        for: 'For sale',
        favourite: false,
        title: 'Luxury family home',
        category: 'Albama',
        location: 'South Western Ave',
        bedrooms: 3,
        area: '15000 m<sup>2</sup>',
        price: 130655,
        unit: '4522/sqft',
        author: 'Haris Vilium',
        posted: '15 days ago'
      }
    ]
  };
}
