import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './home/index.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { SharedLandingModule } from './shared-landing/shared-landing.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: IndexComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedLandingModule,
    ScrollToModule.forRoot(),
    NgbModalModule,
    NgxYoutubePlayerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    IndexComponent
  ]
})
export class IndexModule {
}
