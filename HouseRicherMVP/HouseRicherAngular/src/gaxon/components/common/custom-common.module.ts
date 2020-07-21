import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryHeaderComponent } from './entry-header/entry-header.component';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EntryHeaderComponent,
    PageHeaderComponent
  ],
  exports: [
    EntryHeaderComponent,
    PageHeaderComponent
  ]
})
export class CustomCommonModule { }
