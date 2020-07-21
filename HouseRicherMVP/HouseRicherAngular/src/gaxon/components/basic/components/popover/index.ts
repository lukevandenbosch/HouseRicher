export * from './popover.component';

import {NgModule} from '@angular/core';
import {NgbdComponentsSharedModule} from '../shared';
import {NgbdPopover} from './popover.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [NgbdComponentsSharedModule],
  exports: [NgbdPopover],
  declarations: [NgbdPopover, ...DEMO_DIRECTIVES]
})
export class NgbdPopoverModule {}
