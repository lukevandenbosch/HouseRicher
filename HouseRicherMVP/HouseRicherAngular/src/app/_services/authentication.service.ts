import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service'; 
import { Router } from '@angular/router';

import { Token } from '../_model/token';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Token>;
    public currentUser: Observable<Token>;
    private url: String;

    constructor(private http: HttpClient, 
                @Inject(DOCUMENT) private readonly document: any,
                private cookieService: CookieService,
                private router: Router) {
        this.currentUserSubject = new BehaviorSubject<Token>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.url = this.document.location.origin;
    }

    public get currentUserValue(): Token {
        return this.currentUserSubject.value;
    }

    login(username, password) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
        };

        return this.http.post<any>(`${this.url}/api/authentication/post`, { username, password }, httpOptions)
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                this.cookieService.set('token', user.token);
                return user;
            }));
    }

    refreshToken(token: string, saveToken: boolean) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Bearer ' + token,
            })
        };

        return this.http.post<any>(`${this.url}/api/authentication/refresh`, null, httpOptions)
            .pipe(map(user => {
                if (saveToken) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    this.cookieService.set('token', user.token);
                    return user;
                }
            }));
    }

    forgotPassword(email: string) {
        const formData = new FormData();
        formData.append('Email', email);

        return this.http.post<any>(`${this.url}/api/Email/PasswordReset`, formData)
            .pipe(map(user => {
                return user;
            }));
    }

    passwordReset(password: string, token: string) {
        const formData = new FormData();
        formData.append('PasswordValue', password);

        return this.http.post(`${this.url}/api/Authentication/PasswordReset`, formData, {
            headers: { 'Authorization': ('Bearer ' + token) }
          });
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.cookieService.deleteAll();
        this.currentUserSubject.next(null);
        this.router.navigate(['auth/signin']);
    }
}
