import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'forum',
    loadChildren: () => import('./forum/forum.module').then(m => m.ForumModule)
  },
  {
    path: 'realtor',
    loadChildren: () => import('./realtor/realtor.module').then(m => m.RealtorModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/home.module').then(m => m.IndexModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class NavViewsModule {
}
