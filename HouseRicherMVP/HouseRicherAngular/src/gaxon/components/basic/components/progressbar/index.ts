export * from './progressbar.component';

import {NgModule} from '@angular/core';
import {NgbdComponentsSharedModule} from '../shared';
import {NgbdProgressbar} from './progressbar.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [NgbdComponentsSharedModule],
  exports: [NgbdProgressbar],
  declarations: [NgbdProgressbar, ...DEMO_DIRECTIVES]
})
export class NgbdProgressbarModule {}
