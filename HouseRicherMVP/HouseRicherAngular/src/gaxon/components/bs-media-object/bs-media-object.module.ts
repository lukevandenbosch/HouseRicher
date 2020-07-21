import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GxIconModule} from '../../components/gx-icon/gx-icon.module';
import {BsMediaObjectComponent} from './bs-media-object.component';


@NgModule({
  imports: [
    CommonModule,
    GxIconModule
  ],
  declarations: [
    BsMediaObjectComponent
  ],
  exports: [
    BsMediaObjectComponent
  ]
})
export class BsMediaObjectModule {
}
