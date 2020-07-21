export * from './datepicker.component';
import {RouterModule} from '@angular/router';

import {NgModule} from '@angular/core';
import {NgbdComponentsSharedModule} from '../shared';
import {NgbdDatepicker} from './datepicker.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [
    NgbdComponentsSharedModule,
    RouterModule
  ],
  exports: [
    NgbdDatepicker,
    RouterModule
  ],
  declarations: [NgbdDatepicker, ...DEMO_DIRECTIVES],
})
export class NgbdDatepickerModule {}
