import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListingLayoutComponent} from './listing-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ListingLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@app/content/nav-views/nav-views.module').then(m => m.NavViewsModule),
      },
      {
        path: 'user',
        loadChildren: () => import('@app/content/user-views/user-views.module').then(m => m.UserViewsModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
