export * from './tooltip.component';

import {NgModule} from '@angular/core';
import {NgbdComponentsSharedModule} from '../shared';
import {NgbdTooltip} from './tooltip.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [NgbdComponentsSharedModule],
  exports: [NgbdTooltip],
  declarations: [NgbdTooltip, ...DEMO_DIRECTIVES]
})
export class NgbdTooltipModule {}
