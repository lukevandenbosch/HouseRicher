import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BsCardModule} from './../bs-card/bs-card.module';

import {GxGridComponent} from './gx-grid/gx-grid.component';
import {GxGridFooterComponent} from './gx-grid/gx-grid-footer/gx-grid-footer.component';
import {GxGridHeaderComponent} from './gx-grid/gx-grid-header/gx-grid-header.component';

import {GxListComponent} from './gx-list/gx-list.component';
import {GxListFooterComponent} from './gx-list/gx-list-footer/gx-list-footer.component';
import {GxListHeaderComponent} from './gx-list/gx-list-header/gx-list-header.component';

@NgModule({
  imports: [
    CommonModule,
    BsCardModule
  ],
  declarations: [
    GxGridComponent,
    GxGridHeaderComponent,
    GxGridFooterComponent,
    GxListComponent,
    GxListFooterComponent,
    GxListHeaderComponent
  ],
  exports: [
    GxGridComponent,
    GxGridHeaderComponent,
    GxGridFooterComponent,
    GxListComponent,
    GxListFooterComponent,
    GxListHeaderComponent
  ]
})
export class ViewsModule {
}
