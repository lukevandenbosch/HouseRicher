import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {SharedModule} from '@gaxon/modules';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {OrderModule} from 'ngx-order-pipe';
import {ProfilePageService} from './profile/profile-page.service';
import {UtiltiesModule} from '../utitlies/utilties.module';

import {ProfilePageComponent} from './profile/profile-page.component';
import {ProfileBannerComponent} from './profile/banner/profile-banner.component';
import {ProfileContentComponent} from './profile/content/profile-content.component';
import {ProfileContactComponent} from './profile/content/contact/profile-contact.component';
import {ProfileAboutComponent} from './profile/content/about/profile-about.component';
import {ProfileEventsComponent} from './profile/content/events/profile-events.component';
import {ProfilePostsComponent} from './profile/content/posts/profile-posts.component';
import {TabsAboutProfileComponent} from './profile/content/about/tabs-about-profile/tabs-about-profile.component';
import {TabAboutProfileComponent} from './profile/content/about/tab-about-profile/tab-about-profile.component';

const appsRoutes: Routes = [
  {
    path: 'profile/:isRealtor/:id',
    component: ProfilePageComponent,
    resolve: {
      data: ProfilePageService
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    SharedModule,
    OrderModule,
    UtiltiesModule,
    RouterModule.forChild(appsRoutes)
  ],
  declarations: [
    ProfileContactComponent,
    ProfilePageComponent,
    ProfileBannerComponent,
    ProfileContentComponent,
    ProfileAboutComponent,
    ProfileEventsComponent,
    ProfilePostsComponent,
    TabsAboutProfileComponent,
    TabAboutProfileComponent
  ]
})
export class UserViewsModule {
}
