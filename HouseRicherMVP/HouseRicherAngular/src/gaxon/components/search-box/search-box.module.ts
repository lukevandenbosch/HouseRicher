import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GxIconModule} from './../gx-icon/gx-icon.module';
import { SearchBoxComponent } from './search-box.component';

@NgModule({
  imports: [
    CommonModule,
    GxIconModule
  ],
  declarations: [SearchBoxComponent],
  exports: [
    SearchBoxComponent
  ]
})
export class SearchBoxModule { }
