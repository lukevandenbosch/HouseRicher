import {NgModule} from '@angular/core';
import {GetByIdDirective} from './get-by-id.directive';
import {GxCardDirective} from './gx-card.directive';
import {BsCardDirective} from './bs-card.directive';
import {StatusDirective} from '@gaxon/directives/status.directive';
import { GxBadgeDirective } from './gx-badge.directive';

@NgModule({
  imports: [],
  declarations: [
    GetByIdDirective,
    GxCardDirective,
    BsCardDirective,
    StatusDirective,
    GxBadgeDirective
  ],
  exports: [
    GetByIdDirective,
    GxCardDirective,
    BsCardDirective,
    StatusDirective,
    GxBadgeDirective
  ]
})
export class DirectivesModule {
}
