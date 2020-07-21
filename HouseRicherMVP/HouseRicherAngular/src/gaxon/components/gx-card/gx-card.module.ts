import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GxCardComponent} from './gx-card.component';
import {CardToolComponent} from './card-tool/card-tool.component';
import {CardHeadingComponent} from './card-heading/card-heading.component';
import {CardBodyComponent} from './card-body/card-body.component';
import { CardHeaderComponent } from './card-header/card-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GxCardComponent,
    CardToolComponent,
    CardHeadingComponent,
    CardBodyComponent,
    CardHeaderComponent
  ],
  exports: [
    GxCardComponent,
    CardToolComponent,
    CardHeadingComponent,
    CardBodyComponent,
    CardHeaderComponent
  ]
})
export class GxCardModule {
}
