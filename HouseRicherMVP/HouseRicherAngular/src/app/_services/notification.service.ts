import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  // private url: String;
  // private notificationSubject: BehaviorSubject<PostList>;
  // public notification: Observable<PostList>;

  constructor(private http: HttpClient, @Inject(DOCUMENT) private readonly document: any) {
    // this.url = this.document.location.origin;
    
    // this.notificationSubject = new BehaviorSubject<PostList>(JSON.parse(localStorage.getItem('notifications')));
    // this.notification = this.notificationSubject.asObservable();
  }

  // public get currentfeedValue(): PostList {
  //   return this.notificationSubject.value;
  // }

  // getNotifications(currentUser: Token) {
  //   return this.http.post(`${this.url}/api/feed/post`, formData);
  // }
}
