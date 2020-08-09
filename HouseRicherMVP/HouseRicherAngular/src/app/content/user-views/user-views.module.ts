import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {SharedModule} from '@gaxon/modules';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {OrderModule} from 'ngx-order-pipe';
import {UtiltiesModule} from '../utitlies/utilties.module';

import {ProfilePageComponent} from './profile/profile-page.component';
import {TabsAboutProfileComponent} from './profile/tabs-about-profile/tabs-about-profile.component';
import {TabAboutProfileComponent} from './profile/tab-about-profile/tab-about-profile.component';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {ToastContainerModule} from 'ngx-toastr';

const appsRoutes: Routes = [
  {
    path: 'profile/:id',
    component: ProfilePageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    SharedModule,
    OrderModule,
    UtiltiesModule,
    RouterModule.forChild(appsRoutes),
    SweetAlert2Module.forRoot(),
    ToastContainerModule,
  ],
  declarations: [
    ProfilePageComponent,
    TabsAboutProfileComponent,
    TabAboutProfileComponent
  ]
})
export class UserViewsModule {
}
