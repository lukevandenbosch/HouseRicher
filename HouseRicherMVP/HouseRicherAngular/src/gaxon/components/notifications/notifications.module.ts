import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PinkToastComponent} from './pink.toast';
import {NotyfToastComponent} from './notyf.toast';

@NgModule({
  declarations: [
    PinkToastComponent,
    NotyfToastComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PinkToastComponent,
    NotyfToastComponent
  ],
  entryComponents: [
    PinkToastComponent,
    NotyfToastComponent
  ]
})
export class NotificationsModule { }
