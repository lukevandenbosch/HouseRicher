export class CryptoDb {
  public static widgets = {
    cryptoCards: [
      {
        shadowType: 'area',
        data: {
          amount: {
            value: '$9,626'
          },
          trending: {
            text: '84%',
            icon: 'pointer-up',
            color: 'text-success'
          },
          tagLine: {
            text: 'Bitcoin Price'
          },
          crypto: {
            icon: 'bitcoin',
            color: 'text-primary'
          }
        },
        chart: {
          type: 'Line',
          color: '#512DA8',
          events: {},
          data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
            series: [
              [34, 40, 35, 42, 49, 46, 55, 48, 40, 43, 37]
            ]
          },
          options: {
            axisX: {
              showGrid: false,
              showLabel: false,
              offset: 0,
            },
            axisY: {
              showGrid: false,
              showLabel: false,
              offset: 0,
            },
            showPoint: false,
            fullWidth: true,
            height: 100
          }
        }
      },
      {
        shadowType: 'area',
        data: {
          amount: {
            value: '$7,831'
          },
          trending: {
            text: '07%',
            icon: 'pointer-up',
            color: 'text-success'
          },
          tagLine: {
            text: 'Etherium Price'
          },
          crypto: {
            icon: 'etherium',
            color: 'text-primary'
          }
        },
        chart: {
          type: 'Line',
          color: '#52c41a',
          events: {},
          data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            series: [
              [330, 170, 230, 860, 390, 720, 363, 525, 363, 270]
            ]
          },
          options: {
            axisX: {
              showGrid: false,
              showLabel: false,
              offset: 0,
            },
            axisY: {
              showGrid: false,
              showLabel: false,
              low: 20,
              offset: 0,
            },
            showPoint: false,
            fullWidth: true,
            height: 100
          }
        }
      },
      {
        shadowType: 'area',
        data: {
          amount: {
            value: '$1,239'
          },
          trending: {
            text: '08%',
            icon: 'pointer-down',
            color: 'text-danger'
          },
          tagLine: {
            text: 'Ripple Price'
          },
          crypto: {
            icon: 'ripple',
            color: 'text-primary'
          }
        },
        chart: {
          type: 'Line',
          color: '#FF4081',
          events: {},
          data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            series: [
              [55, 70, 55, 60, 55, 65, 57, 60, 53, 53]
            ]
          },
          options: {
            axisX: {
              showGrid: false,
              showLabel: false,
              offset: 0,
            },
            axisY: {
              showGrid: false,
              showLabel: false,
              low: 40,
              offset: 0,
            },
            showPoint: false,
            fullWidth: true,
            height: 100
          }
        }
      },
      {
        shadowType: '',
        data: {
          amount: {
            value: '$849'
          },
          trending: {
            text: '47%',
            icon: 'pointer-down',
            color: 'text-danger'
          },
          tagLine: {
            text: 'Litcoin Price'
          },
          crypto: {
            icon: 'litcoin',
            color: 'text-primary'
          }
        },
        chart: {
          type: 'Line',
          color: '#fa8c16',
          events: {},
          data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            series: [
              [50, 70, 55, 60, 55, 65, 57, 45, 60, 55]
            ]
          },
          options: {
            axisX: {
              showGrid: false,
              showLabel: false,
              offset: 0,
            },
            axisY: {
              showGrid: false,
              showLabel: false,
              low: 40,
              offset: 0,
            },
            showPoint: false,
            fullWidth: true,
            height: 100
          }
        }
      }
    ],
    trendingCards: [
      {
        shadowType: 'area',
        data: {
          heading: {
            value: '$9,626'
          },
          trending: {
            value: '38%',
            icon: 'pointer-up',
            color: 'text-success'
          },
          tagline: {
            text: 'Bitcoin Price'
          },
          crepto: {
            icon: 'bitcoin',
            classes: 'text-primary'
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
              position: [0, 80, 230, 0],
              colors: [
                {
                  code: '#163469',
                  opacity: 0.9,
                  point: 0
                },
                {
                  code: '#FE9E15',
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
          heading: {
            value: '$7,831'
          },
          trending: {
            value: '07%',
            icon: 'pointer-up',
            color: 'text-success'
          },
          tagline: {
            text: 'Etherium Price'
          },
          crepto: {
            icon: 'etherium',
            classes: 'text-primary'
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
              position: [0, 80, 230, 0],
              colors: [
                {
                  code: '#4ECDE4',
                  opacity: 0.9,
                  point: 0
                },
                {
                  code: '#06BB8A',
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
          heading: {
            value: '$1,239'
          },
          trending: {
            value: '08%',
            icon: 'pointer-down',
            color: 'text-danger'
          },
          tagline: {
            text: 'Ripple Price'
          },
          crepto: {
            icon: 'ripple',
            classes: 'text-primary'
          }
        },
        chart: {
          chartType: 'line',
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              data: [100, 525, 363, 720, 390, 860, 230],
              label: 'Orders',
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
              position: [0, 20, 0, 110],
              colors: [
                {
                  code: '#e81a24',
                  opacity: 0.9,
                  point: 0
                },
                {
                  code: '#fc8505',
                  opacity: 0.4,
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
          heading: {
            value: '$849'
          },
          trending: {
            value: '47%',
            icon: 'pointer-down',
            color: 'text-danger'
          },
          tagline: {
            text: 'Litcoin Price'
          },
          crepto: {
            icon: 'litcoin',
            classes: 'text-primary'
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
      }
    ],
    balancePortfolio: {
      title: 'Your Portfolio Balance',
      amount: '$179,626',
      progress: {
        icon: 'pointer-up',
        value: '64%',
        color: 'text-success'
      },
      tagline: 'Overall balance',
      buttons: [
        {
          label: 'Deposit',
          style: 'btn-secondary'
        },
        {
          label: 'Withdraw',
          style: 'btn-light'
        }
      ],
      externalRoute: {
        label: 'Add New Account',
        route: '/'
      },
      statusTitle: 'Portfolio Distribution',
      records: [
        {
          label: 'Bitcoin',
          value: '8.74',
          percentage: 78,
          circleProgress: {
            percent: 88,
            radius: 55,
            thickness: 20,
            color: '#59c100'
          }
        },
        {
          label: 'Etherium',
          value: '3.68',
          percentage: 38,
          circleProgress: {
            percent: 55,
            radius: 55,
            thickness: 20,
            color: '#4f35ac'
          }
        },
        {
          label: 'Ripple',
          value: '1.25',
          percentage: 15,
          circleProgress: {
            percent: 26,
            radius: 55,
            thickness: 20,
            color: '#ff4081'
          }
        }
      ]
    },
    balanceHistory: {
      title: 'Balance History',
      chart: {
        type: 'Line',
        events: {},
        lineSmooth: true,
        options: {
          height: 200,
          showArea: true,
          showPoint: false,
          fullWidth: true,
          chartPadding: 0,
          axisX: {
            showGrid: false,
            showLabel: true
          },
          axisY: {
            showGrid: false,
            low: 20,
            scaleMinSpace: 50,
            showLabel: false,
            offset: 0,
          }
        },
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: [
            [51, 61, 62, 54, 41, 37, 40, 48, 64, 75, 78, 74, 65]
          ]
        }
      }
    },
    pricing: [
      {
        icon: {
          name: 'ripple2',
          color: 'text-primary'
        },
        name: 'Ripple',
        percentage: {
          value: 2.3,
          color: 'text-success',
          icon: 'pointer-up'
        },
        lowPrice: 129,
        highPrice: 150
      },
      {
        icon: {
          name: 'etherium2',
          color: 'text-primary'
        },
        name: 'Etherium',
        percentage: {
          value: 5.3,
          color: 'text-success',
          icon: 'pointer-up'
        },
        lowPrice: 130,
        highPrice: 190
      },
      {
        icon: {
          name: 'bitcoin',
          color: 'text-primary'
        },
        name: 'Bitcoin',
        percentage: {
          value: 4.3,
          color: 'text-success',
          icon: 'pointer-up'
        },
        lowPrice: 140,
        highPrice: 170
      },
      {
        icon: {
          name: 'litcoin',
          color: 'text-primary'
        },
        name: 'Litecoin',
        percentage: {
          value: 5.2,
          color: 'text-success',
          icon: 'pointer-up'
        },
        lowPrice: 150,
        highPrice: 160
      }
    ],
    downloadApp: {
      heading: 'Download our app and start quickly',
      subHeading: 'Available on',
      thumb: 'assets/images/dashboard/iphone.png',
      apps: [
        {
          title: 'Android App',
          thumb: 'assets/images/dashboard/google-play-store.png'
        },
        {
          title: 'IOS App',
          thumb: 'assets/images/dashboard/apple-app-store.png'
        }
      ]
    },
    cryptoNews: {
      title: 'Latest News',
      categories: [
        {
          id: 1,
          name: 'Bitcoin'
        },
        {
          id: 2,
          name: 'Ripple'
        },
        {
          id: 3,
          name: 'Litecoin'
        }
      ],
      newsData: [
        {
          title: '5 Steps to consider before bying Bitcoins',
          media: 'https://via.placeholder.com/640X420',
          content: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar felis pharetra in vestibulum sed.',
          tags: 'BTC, Crypto, Trading, Tips, Crypto Currency',
          category: 1
        },
        {
          title: 'Is crypto currency investment a trap or opportunity?',
          media: 'https://via.placeholder.com/640X420',
          content: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar felis pharetra in vestibulum sed.',
          tags: 'Trading, Tips, Crypto Currency',
          category: 3
        },
        {
          title: 'Getting started with cryptocurrency',
          media: 'https://via.placeholder.com/640X420',
          content: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar felis pharetra in vestibulum sed.',
          tags: 'Blockchain, tutorial, Crypto currency',
          category: 2
        },
        {
          title: '10 things you must know before trading in crypto currency',
          media: 'https://via.placeholder.com/640X420',
          content: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar felis pharetra in vestibulum sed.',
          tags: 'BTC, Crypto, Trading, Tips, Crypto Currency',
          category: 3
        },
        {
          title: 'How online conversion works for crypto currency?',
          media: 'https://via.placeholder.com/640X420',
          content: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar felis pharetra in vestibulum sed.',
          tags: 'Blockchain, tutorial, Cryptocurrency',
          category: 1
        },
        {
          title: 'Is crypto currency investment a trap or opportunity?',
          media: 'https://via.placeholder.com/640X420',
          content: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar felis pharetra in vestibulum sed.',
          tags: 'Trading, Tips, Crypto Currency',
          category: 2
        },
        {
          title: '10 things you must know before trading in crypto currency',
          media: 'https://via.placeholder.com/640X420',
          content: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar felis pharetra in vestibulum sed.',
          tags: 'BTC, Crypto, Trading, Tips, Crypto Currency',
          category: 2
        },
        {
          title: 'Getting started with cryptocurrency - what is blockchain',
          media: 'https://via.placeholder.com/640X420',
          content: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar felis pharetra in vestibulum sed.',
          tags: 'Blockchain, tutorial, Cryptocurrency',
          category: 3
        },
        {
          title: 'Lock your crypto with top 5 wallets.',
          media: 'https://via.placeholder.com/640X420',
          content: 'Cras tincidunt sit amet massa at accumsan. Mauris tincidunt tincidunt est, et pulvinar felis pharetra in vestibulum sed.',
          tags: 'Trading, Tips, Crypto Currency',
          category: 1
        }
      ]
    }
  };
}
