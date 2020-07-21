export * from './collapse.component';

import {NgModule} from '@angular/core';
import {NgbdComponentsSharedModule} from '../shared';
import {NgbdCollapse} from './collapse.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [NgbdComponentsSharedModule],
  exports: [NgbdCollapse],
  declarations: [NgbdCollapse, ...DEMO_DIRECTIVES]
})
export class NgbdCollapseModule {}
