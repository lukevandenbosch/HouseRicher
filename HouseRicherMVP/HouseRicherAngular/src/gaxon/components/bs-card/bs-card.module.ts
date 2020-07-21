import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BsCardComponent} from './bs-card.component';
import {CardHeaderComponent} from './card-header/card-header.component';
import {CardBodyComponent} from './card-body/card-body.component';
import {CardFooterComponent} from './card-footer/card-footer.component';
import {CardImgOverlayComponent} from './card-img-overlay/card-img-overlay.component';
import {CardOuterBodyComponent} from './card-outer-body/card-outer-body.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BsCardComponent,
    CardHeaderComponent,
    CardImgOverlayComponent,
    CardBodyComponent,
    CardOuterBodyComponent,
    CardFooterComponent
  ],
  exports: [
    BsCardComponent,
    CardHeaderComponent,
    CardImgOverlayComponent,
    CardBodyComponent,
    CardOuterBodyComponent,
    CardFooterComponent
  ]
})
export class BsCardModule {
}
