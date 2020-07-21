export * from './carousel.component';

import {NgModule} from '@angular/core';
import {NgbdComponentsSharedModule} from '../shared';
import {NgbdCarousel} from './carousel.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [NgbdComponentsSharedModule],
  exports: [NgbdCarousel],
  declarations: [NgbdCarousel, ...DEMO_DIRECTIVES]
})
export class NgbdCarouselModule {}
