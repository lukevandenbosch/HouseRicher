import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {SharedModule} from '@gaxon/modules';
import {OrderModule} from 'ngx-order-pipe';
import {ProfilePageService} from './profile/profile-page.service';

import {ProfilePageComponent} from './profile/profile-page.component';
import {ProfileBannerComponent} from './profile/banner/profile-banner.component';
import {ProfileContentComponent} from './profile/content/profile-content.component';
import {ProfileContactComponent} from './profile/content/contact/profile-contact.component';
import {ProfileAboutComponent} from './profile/content/about/profile-about.component';
import {ProfileEventsComponent} from './profile/content/events/profile-events.component';
import {TabsAboutProfileComponent} from './profile/content/about/tabs-about-profile/tabs-about-profile.component';
import {TabAboutProfileComponent} from './profile/content/about/tab-about-profile/tab-about-profile.component';

const appsRoutes: Routes = [
  {
    path: 'user-views',
    component: ProfilePageComponent,
    resolve: {
      data: ProfilePageService
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OrderModule,
    RouterModule.forChild(appsRoutes)
  ],
  declarations: [
    ProfileContactComponent,
    ProfilePageComponent,
    ProfileBannerComponent,
    ProfileContentComponent,
    ProfileAboutComponent,
    ProfileEventsComponent,
    TabsAboutProfileComponent,
    TabAboutProfileComponent
  ]
})
export class UserViewsModule {
}
