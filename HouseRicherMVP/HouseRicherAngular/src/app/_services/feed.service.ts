import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { PostList } from '../_model/post';
import { Token } from '../_model/token'
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private url: String;
  private feedSubject: BehaviorSubject<PostList>;
  public feed: Observable<PostList>;

  private commentSubject: BehaviorSubject<Comment[]>;
  public comment: Observable<Comment[]>;

  constructor(private http: HttpClient, @Inject(DOCUMENT) private readonly document: any) {
    this.url = this.document.location.origin;
    
    this.feedSubject = new BehaviorSubject<PostList>(JSON.parse(localStorage.getItem('feed')));
    this.feed = this.feedSubject.asObservable();
    
    this.commentSubject = new BehaviorSubject<Comment[]>(JSON.parse(localStorage.getItem('comment')));
    this.comment = this.commentSubject.asObservable();
  }

  public get currentfeedValue(): PostList {
    return this.feedSubject.value;
  }

  public get currentCommentValue(): Comment[] {
    return this.commentSubject.value;
  }

  getFeed(token: string, postNumberMin: number, postNumberMax: number, postId: string) {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'RangeMin': postNumberMin.toString(),
        'RangeMax': postNumberMax.toString()
      })
    };
    if (token !== null) {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'RangeMin': postNumberMin.toString(),
          'RangeMax': postNumberMax.toString(),
          'Authorization': ('Bearer ' + token)
        })
      };
      if (postId !== null) {
        httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'RangeMin': postNumberMin.toString(),
            'RangeMax': postNumberMax.toString(),
            'Authorization': ('Bearer ' + token),
            'PostId': postId
          })
        };
      }
    } else {
      if (postId !== null) {
        httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'RangeMin': postNumberMin.toString(),
            'RangeMax': postNumberMax.toString(),
            'PostId': postId
          })
        };
      }
    }

    return this.http.get(`${this.url}/api/feed/getposts`, httpOptions)
      .pipe(map(feed => {
        localStorage.setItem('feed', JSON.stringify(feed));
        this.feedSubject.next(<any>feed);
        return feed;
      }));
  }

  getComment(token: string, postId: number) {
    var httpOptions;
    if (token == null) {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'PostId': postId.toString()
        })
      };
    }
    else {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + token,
          'PostId': postId.toString()
        })
      };
    }

    return this.http.get(`${this.url}/api/feed/getcomments`, httpOptions)
      .pipe(map(feed => {
        localStorage.setItem('comment', JSON.stringify(feed));
        this.feedSubject.next(<any>feed);
        return feed;
      }));
  }

  postFeed(currentUser: Token, subject: string, message: string, termsAndConditions: boolean, postId: number) {
    const formData = new FormData();
    if (postId == null) {
      formData.append('PostId', "");
    } else {
      formData.append('PostId', postId.toString());
    }
    formData.append('Subject', subject);
    formData.append('Message', message);
    if (termsAndConditions == null) {
      formData.append('TermsAndConditions', "");
    } else {
      formData.append('TermsAndConditions', termsAndConditions.toString());
    }

    if (currentUser == null) {
      return this.http.post(`${this.url}/api/feed/post`, formData);
    } else {
      return this.http.post(`${this.url}/api/feed/post`, formData, {
        headers: { 'Authorization': ('Bearer ' + currentUser.token) }
      });
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
      return this.http.post(`${this.url}/api/feed/like`, { postId }, httpOptions);
    }
    else {
      return this.http.post(`${this.url}/api/feed/like`, { commentId }, httpOptions);
    }
  }
}
