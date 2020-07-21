import {Component} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-carousel-config',
  templateUrl: './carousel-config.html',
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class NgbdCarouselConfig {
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
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}
