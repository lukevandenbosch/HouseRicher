import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Post } from '../_model/post';
import { Token } from '../_model/token'
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private url: String;
  private feedSubject: BehaviorSubject<Post>;
  public feed: Observable<Post>;

  constructor(private http: HttpClient, @Inject(DOCUMENT) private readonly document: any) {
    this.feedSubject = new BehaviorSubject<Post>(JSON.parse(localStorage.getItem('feed')));
    this.feed = this.feedSubject.asObservable();
    this.url = this.document.location.origin;
  }

  public get currentfeedValue(): Post {
    return this.feedSubject.value;
  }

  getFeed(currentUser: Token, postNumber: number) {
    var httpOptions;
    if (currentUser == null) {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Range': postNumber.toString()
        })
      };
    }
    else {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + currentUser.token,
          'Range': postNumber.toString()
        })
      };
    }

    return this.http.get(`${this.url}/api/feed/get`, httpOptions)
      .pipe(map(feed => {
        localStorage.setItem('feed', JSON.stringify(feed));
        this.feedSubject.next(<any>feed);
        return feed;
      }));
  }

  postFeed(currentUser: Token, message: String, postId: number) {
    var httpOptions;
    if (currentUser == null) {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
    }
    else {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + currentUser.token
        })
      };
    }

    if (postId == null) {
      return this.http.post(`${this.url}/api/feed/post`, { message }, httpOptions);
    }
    else {
      return this.http.post(`${this.url}/api/feed/post`, { postId, message }, httpOptions);
    }
  }

  likePostComment(currentUser: Token, postId: number, commentId: number) {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + currentUser.token
      })
    };

    if (commentId == null) {
      return this.http.post(`${this.url}/api/like/post`, { postId }, httpOptions);
    }
    else {
      return this.http.post(`${this.url}/api/like/post`, { commentId }, httpOptions);
    }
  }
}
