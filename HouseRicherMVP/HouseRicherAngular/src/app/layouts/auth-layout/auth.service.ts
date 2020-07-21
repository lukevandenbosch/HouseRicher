import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        (response) => {
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;

                localStorage.setItem('currentUser', this.token);
              }
            );

          this.router.navigate(['/']);
        }
      )
      .catch(
        (error) => {
          console.log(error);
        }
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response) => {
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;

                localStorage.setItem('currentUser', this.token);
                if (this.activatedRoute.snapshot.queryParams.returnUrl) {
                  this.router.navigate([this.activatedRoute.snapshot.queryParams.returnUrl]);
                } else {
                  this.router.navigate(['/']);
                }
              }
            );
        }
      )
      .catch(
        (error) => {
          console.log(error);
        }
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/signin']);
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => {
          this.token = token;
          localStorage.setItem('currentUser', this.token);
        }
      );

    return this.token;
  }

  isAuthenticated() {
    return localStorage.getItem('currentUser');
  }
}
