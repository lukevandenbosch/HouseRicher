import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'; 
import { map } from 'rxjs/operators';

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
    //TODO: Fix this shit

    if (!currentUser) {
        return true;
    }

    this.authenticationService.refreshToken(currentUser.token)
      .subscribe(
            user => {
            },
            error => {
              this.cookieService.deleteAll();
              localStorage.removeItem('currentUser');
              this.router.navigateByUrl('auth/signin');
              this.alertService.information("Logged Out");
      });

    return true;
}
  
}
