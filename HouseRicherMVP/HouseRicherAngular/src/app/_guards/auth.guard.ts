import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
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

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authenticationService.currentUserValue;
    //TODO: Fix this shit

    if (!currentUser) {
        return true;
    }

    this.authenticationService.refreshToken(currentUser.token, true)
      .subscribe(
            user => {
              //TODO: current user add
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
