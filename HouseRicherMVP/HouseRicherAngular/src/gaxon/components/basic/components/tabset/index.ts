export * from './tabset.component';

import {NgModule} from '@angular/core';
import {NgbdComponentsSharedModule} from '../shared';
import {NgbdTabs} from './tabset.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [NgbdComponentsSharedModule],
  exports: [NgbdTabs],
  declarations: [NgbdTabs, ...DEMO_DIRECTIVES]
})
export class NgbdTabsModule {}
