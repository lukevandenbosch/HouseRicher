import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@gaxon/modules';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {OrderModule} from 'ngx-order-pipe';
import {UtiltiesModule} from '../../utitlies/utilties.module';

import { ForumListComponent } from './forum-list/forum-list.component';
import { WallPageComponent } from './forum-item/wall-page.component';

const routes: Routes = [
  {
    path: 'forum-list',
    component: ForumListComponent
  },
  {
    path: 'forum-item/:id',
    component: WallPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OrderModule,
    CarouselModule,
    UtiltiesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ForumListComponent,
    WallPageComponent
  ]
})
export class ForumModule {
}
