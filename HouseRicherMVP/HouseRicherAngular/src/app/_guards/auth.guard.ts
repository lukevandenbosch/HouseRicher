import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'; 

import { AuthenticationService } from '../_services/authentication.service';
import { AlertService } from '../_services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private cookieService: CookieService,
    private alertService: AlertService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (!currentUser) {
        return true;
    }

    this.authenticationService.refreshToken(currentUser.token)
    .subscribe(
      user => {
        return true;
      },
      error => {
        this.cookieService.deleteAll();
        localStorage.removeItem('currentUser');
        this.router.navigate(['auth/signin']);
        this.alertService.information("Logged Out");
        return false;
      });
    return true;
}
  
}
