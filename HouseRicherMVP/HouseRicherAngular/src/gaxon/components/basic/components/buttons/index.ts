export * from './buttons.component';

import {NgModule} from '@angular/core';
import {NgbdComponentsSharedModule} from '../shared';
import {NgbdButtons} from './buttons.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [NgbdComponentsSharedModule],
  exports: [NgbdButtons],
  declarations: [NgbdButtons, ...DEMO_DIRECTIVES]
})
export class NgbdButtonsModule {}
