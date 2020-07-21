export class AmMapsDb {
  public static mapsList = {
    animationsMap: {
      title: 'Animations along lines',
      options: {
        'type': 'map',
        'theme': 'light',
        'responsive': {
          enabled: true
        },
        'dataProvider': {
          'map': 'worldLow',
          'zoomLevel': 2,
          'zoomLongitude': -20,
          'zoomLatitude': 42,
          'lines': [
            {
              'id': 'line1',
              'arc': -0.85,
              'alpha': 0.3,
              'latitudes': [28.673858, 48.8567, 43.8163, 34.3, 23],
              'longitudes': [77.815982, 2.3510, -79.4287, -118.15, -82]
            }, {
              'id': 'line2',
              'alpha': 0,
              'color': '#000000',
              'latitudes': [28.673858, 48.8567, 43.8163, 34.3, 23,],
              'longitudes': [77.815982, 2.3510, -79.4287, -118.15, -82]
            }
          ],
          'images': [
            {
              'svgPath': 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z',
              'title': 'Paris',
              'latitude': 48.8567,
              'longitude': 2.3510
            }, {
              'svgPath': 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z',
              'title': 'Toronto',
              'latitude': 43.8163,
              'longitude': -79.4287
            }, {
              'svgPath': 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z',
              'title': 'Los Angeles',
              'latitude': 34.3,
              'longitude': -118.15
            }, {
              'svgPath': 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z',
              'title': 'Havana',
              'latitude': 23,
              'longitude': -82
            }, {
              'svgPath': 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z',
              'title': 'India',
              'latitude': 28,
              'longitude': 77
            }, {
              'svgPath': 'm2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47',
              'positionOnLine': 0,
              'color': '#000000',
              'alpha': 0.1,
              'animateAlongLine': true,
              'lineId': 'line2',
              'flipDirection': true,
              'loop': true,
              'scale': 0.03,
              'positionScale': 1.3
            }, {
              'svgPath': 'm2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47',
              'positionOnLine': 0,
              'color': '#585869',
              'animateAlongLine': true,
              'lineId': 'line1',
              'flipDirection': true,
              'loop': true,
              'scale': 0.03,
              'positionScale': 1.8
            }
          ]
        },
        'areasSettings': {
          'unlistedAreasColor': '#8dd9ef'
        },
        'imagesSettings': {
          'color': '#585869',
          'rollOverColor': '#585869',
          'selectedColor': '#585869',
          'pauseDuration': 0.2,
          'animationDuration': 2.5,
          'adjustAnimationSpeed': true
        },
        'linesSettings': {
          'color': '#585869',
          'alpha': 0.4
        }
      }
    },
    trackingMap: {
      title: 'Custom HTML Elements as Map Markers with Patterns',
      options: {
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
          zoomControlEnabled: true,
          homeButtonEnabled: true
        }
      }
    },
    zoomingMap: {
      title: 'Zooming to Countries Map',
      options: {
        'type': 'map',
        'theme': 'light',
        'projection': 'miller',
        'responsive': {
          enabled: true
        },
        'dataProvider': {
          'map': 'worldLow',
          'getAreasFromMap': true
        },
        'areasSettings': {
          'autoZoom': true,
          'selectedColor': '#CC0000'
        },
        'smallMap': {}
      }
    }
  };
}
