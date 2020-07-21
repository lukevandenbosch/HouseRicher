import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Register_User } from '../_model/register_user';
import { DOCUMENT, LocationStrategy } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: String;

  constructor(private http: HttpClient, @Inject(DOCUMENT) private readonly document: any, private readonly locationStrategy: LocationStrategy) {
    this.url = this.document.location.origin;
  }

  register(user: Register_User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post(`${this.url}/api/registration/post`, user, httpOptions);
  }
}
