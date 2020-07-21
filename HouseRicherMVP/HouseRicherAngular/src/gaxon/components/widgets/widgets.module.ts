import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GxStatusBarComponent} from './gx-status-bar/gx-status-bar.component';
import {GxSliderComponent} from './gx-slider/gx-slider.component';
import {GxSliderHeaderComponent} from './gx-slider/gx-slider-header/gx-slider-header.component';
import { GxAvatarComponent } from './gx-avatar/gx-avatar.component';
import {PipesModule} from './../../pipes/pipes.module';
import { GxLoaderComponent } from './gx-loader/gx-loader.component';

@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  declarations: [
    GxStatusBarComponent,
    GxSliderComponent,
    GxSliderHeaderComponent,
    GxAvatarComponent,
    GxLoaderComponent
  ],
  exports: [
    GxStatusBarComponent,
    GxSliderComponent,
    GxSliderHeaderComponent,
    GxAvatarComponent,
    GxLoaderComponent
  ]
})
export class WidgetsModule {
}
