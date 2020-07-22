import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@gaxon/modules';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {UtiltiesModule} from '../../utitlies/utilties.module';

import {RealtorListComponent} from './realtor-list/realtor-list.component';
import {RealtorService} from './realtor.service';

const routes: Routes = [
  {
    path: 'realtor-list',
    component: RealtorListComponent,
    resolve: {
      usersList: RealtorService
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule,
    UtiltiesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RealtorListComponent
  ]
})
export class RealtorModule {
}
