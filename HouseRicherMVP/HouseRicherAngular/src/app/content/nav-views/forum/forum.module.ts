import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@gaxon/modules';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {OrderModule} from 'ngx-order-pipe';
import {UtiltiesModule} from '../../utitlies/utilties.module';

import { ForumListComponent } from './forum-list/forum-list.component';
import { WallPageComponent } from './forum-item/wall-page.component';
import { ForumService } from './forum.service';
import { WallPageService } from './forum-item/wall-page.service';

import {PostsComponent} from './forum-item/posts/posts.component';
import {PostDetailComponent} from './forum-item/posts/post-detail/post-detail.component';
import {CommentBoxComponent} from './forum-item/posts/post-detail/comment-box/comment-box.component';

import {CommentBoxListComponent} from './forum-list/post/comment-box-list.component';

const routes: Routes = [
  {
    path: 'forum-list',
    component: ForumListComponent,
    resolve: {
      usersList: ForumService
    }
  },
  {
    path: 'forum-item/:id',
    component: WallPageComponent,
    resolve: {
      data: WallPageService
    }
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
    WallPageComponent,
    PostDetailComponent,
    CommentBoxComponent,
    PostsComponent,
    CommentBoxListComponent
  ]
})
export class ForumModule {
}
