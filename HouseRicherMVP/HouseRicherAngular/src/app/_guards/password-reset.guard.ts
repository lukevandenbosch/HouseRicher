import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '@app/_services/authentication.service';
import { AlertService } from '@app/_services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var token = next.params.token;

    this.authenticationService.refreshToken(token, false)
      .subscribe(
            user => {
            },
            error => {
              this.router.navigateByUrl('auth/signin');
              this.alertService.information("Token has expired or is invalid, please re-request password reset email.");
      });
      
    return true;
  }
}
