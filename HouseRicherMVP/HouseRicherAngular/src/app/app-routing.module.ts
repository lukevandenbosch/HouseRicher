import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteErrorComponent} from './content/route-error/route-error.component';
import {AuthGuard} from './_guards/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/portal/forum/forum-list'
  },
  {
    path: 'portal',
    loadChildren: () => import('./layouts/listing-layout/listing-layout.module').then(m => m.ListingLayoutModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./layouts/auth-layout/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'navigation-error',
    component: RouteErrorComponent,
  },
  {
    path: '**',
    redirectTo: 'navigation-error'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
