export * from './rating.component';

import {NgModule} from '@angular/core';
import {NgbdComponentsSharedModule} from '../shared';
import {NgbdRating} from './rating.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [NgbdComponentsSharedModule],
  exports: [NgbdRating],
  declarations: [NgbdRating, ...DEMO_DIRECTIVES]
})
export class NgbdRatingModule {}
