import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {GxIconModule} from '../../components/gx-icon/gx-icon.module';

import {GxCheckboxComponent} from './gx-checkbox/gx-checkbox.component';
import {GxStarComponent} from './gx-star/gx-star.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GxIconModule
  ],
  declarations: [
    GxCheckboxComponent,
    GxStarComponent
  ],
  exports: [
    GxCheckboxComponent,
    GxStarComponent
  ]
})
export class GxToggleModule {
}
