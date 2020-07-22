import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarComponent} from './avatar/avatar.component';
import {AlertComponent} from './alert/alert.component';

import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {ToastContainerModule} from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    SweetAlert2Module.forRoot(),
    ToastContainerModule,
  ],
  declarations: [
    AvatarComponent,
    AlertComponent
  ],
  exports: [
      AvatarComponent,
      AlertComponent
  ]
})
export class UtiltiesModule {
}
