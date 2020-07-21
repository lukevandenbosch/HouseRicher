import {Component} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-carousel-navigation',
  templateUrl: './carousel-navigation.html',
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class NgbdCarouselNavigation {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [
    'https://via.placeholder.com/950x350',
    'https://via.placeholder.com/950x350',
    'https://via.placeholder.com/950x350',
    'https://via.placeholder.com/950x350',
    'https://via.placeholder.com/950x350',
    'https://via.placeholder.com/950x350',
  ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
      config.showNavigationArrows = true;
      config.showNavigationIndicators = true;
  }
}
