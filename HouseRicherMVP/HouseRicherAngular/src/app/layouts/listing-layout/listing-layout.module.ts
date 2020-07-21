import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {SharedModule} from '@gaxon/modules';
import {SearchBoxModule} from '@gaxon/components';
import {NavigationModule} from '@gaxon/components/navigation/navigation.module';
import {PagesRoutingModule} from './pages-routing.module';

import {ListingLayoutComponent} from './listing-layout.component';
import {HeaderComponent} from './partials/header/header.component';
import {MessagesComponent} from './partials/messages/messages.component';
import {NotificationsComponent} from './partials/notifications/notifications.component';
import {NavbarVerticalComponent} from './partials/navbar/navbar-vertical/navbar-vertical.component';
import {FooterComponent} from './partials/footer/footer.component';
import {CustomizerComponent} from './partials/customizer/customizer.component';
import {HeaderTopComponent} from './partials/header-top/header-top.component';
import {TopbarComponent} from './partials/topbar/topbar.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    PagesRoutingModule,
    NavigationModule,
    SweetAlert2Module.forRoot(),
    PerfectScrollbarModule,
    SearchBoxModule
  ],
  declarations: [
    ListingLayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavbarVerticalComponent,
    NotificationsComponent,
    MessagesComponent,
    CustomizerComponent,
    HeaderTopComponent,
    TopbarComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class ListingLayoutModule {
}
