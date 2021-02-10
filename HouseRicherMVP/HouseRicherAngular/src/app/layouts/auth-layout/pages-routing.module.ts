import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {SignupRealtorComponent} from './signup-realtor/signup-realtor.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordResetGuard } from '@app/_guards/password-reset.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'password-reset/:token',
        component: PasswordResetComponent,
        canActivate: [PasswordResetGuard]
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'signup-realtor',
        component: SignupRealtorComponent
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
