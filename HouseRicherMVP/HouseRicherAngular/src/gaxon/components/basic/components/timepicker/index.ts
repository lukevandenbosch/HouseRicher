export * from './timepicker.component';

import {NgModule} from '@angular/core';
import {NgbdComponentsSharedModule} from '../shared';
import {NgbdTimepicker} from './timepicker.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [NgbdComponentsSharedModule],
  exports: [NgbdTimepicker],
  declarations: [NgbdTimepicker, ...DEMO_DIRECTIVES]
})
export class NgbdTimepickerModule {}
