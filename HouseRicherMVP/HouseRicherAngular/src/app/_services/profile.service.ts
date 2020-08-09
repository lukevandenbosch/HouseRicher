import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Profile } from '../_model/profile';
import { Review } from '../_model/review';
import { UserPost } from '@app/_model/user-post';
import { Realtor } from '@app/_model/realtor';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private url: String;

  private profileSubject: BehaviorSubject<Profile>;
  public profile: Observable<Profile>;

  private reviewSubject: BehaviorSubject<Review[]>;
  public review: Observable<Review[]>;
  
  private userPostsSubject: BehaviorSubject<UserPost[]>;
  public userPosts: Observable<UserPost[]>;
  
  private followingSubject: BehaviorSubject<Realtor[]>;
  public following: Observable<Realtor[]>;

  constructor(private http: HttpClient, @Inject(DOCUMENT) private readonly document: any) {
    this.profileSubject = new BehaviorSubject<Profile>(JSON.parse(localStorage.getItem('profile')));
    this.profile = this.profileSubject.asObservable();

    this.reviewSubject = new BehaviorSubject<Review[]>(JSON.parse(localStorage.getItem('review')));
    this.review = this.reviewSubject.asObservable();

    this.userPostsSubject = new BehaviorSubject<UserPost[]>(JSON.parse(localStorage.getItem('userposts')));
    this.userPosts = this.userPostsSubject.asObservable();

    this.followingSubject = new BehaviorSubject<Realtor[]>(JSON.parse(localStorage.getItem('following')));
    this.following = this.followingSubject.asObservable();

    this.url = this.document.location.origin;
  }

  public get currentProfileValue(): Profile {
    return this.profileSubject.value;
  }

  public get currentReviewValue(): Review[] {
    return this.reviewSubject.value;
  }

  public get currentUserPostsValue(): UserPost[] {
    return this.userPostsSubject.value;
  }

  public get currentFollowingValue(): Realtor[] {
    return this.followingSubject.value;
  }

  getProfile(id: number, token: string) {
    var httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'ProfileId': id.toString()
        })
      };
    if (token != null) {
      var httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'ProfileId': id.toString(),
          'Authorization': 'Bearer ' + token
        })
      };
    }

    return this.http.get(`${this.url}/api/profile/get`, httpOptions)
      .pipe(map(profile => {
        localStorage.setItem('profile', JSON.stringify(profile));
        this.profileSubject.next(<any>profile);
        return profile;
      }));
  }

  getReviews(id: number) {
    var httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'ProfileId': id.toString()
        })
      };

    return this.http.get(`${this.url}/api/review/get`, httpOptions)
      .pipe(map(review => {
        localStorage.setItem('review', JSON.stringify(review));
        this.reviewSubject.next(<any>review);
        return review;
      }));
  }

  getUserPosts(id: number) {
    var httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'ProfileId': id.toString()
        })
      };

    return this.http.get(`${this.url}/api/feed/GetUserPosts`, httpOptions)
      .pipe(map(userposts => {
        localStorage.setItem('userposts', JSON.stringify(userposts));
        this.userPostsSubject.next(<any>userposts);
        return userposts;
      }));
  }

  getFollowing(id: number, token: string) {
    if (token == null) {
      var httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'ProfileId': id.toString()
          })
        };
    } else {
      var httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'ProfileId': id.toString(),
            'Authorization': 'Bearer ' + token
          })
        };
    } 

    return this.http.get(`${this.url}/api/follow/following`, httpOptions)
      .pipe(map(followingUsers => {
        localStorage.setItem('following', JSON.stringify(followingUsers));
        this.followingSubject.next(<any>followingUsers);
        return followingUsers;
      }));
  }

  follow(personId: number, token: string) {
    var httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'PersonId': personId.toString(),
          'Authorization': 'Bearer ' + token
        })
      };

    return this.http.post(`${this.url}/api/follow/follow`, {}, httpOptions);
  }

  postReview(personId: number, message: string, rating: number, token: string) {
    const formData = new FormData();
    formData.append('PersonId', personId.toString());
    formData.append('Message', message);
    formData.append('Rating', rating.toString());

    return this.http.post(`${this.url}/api/review/post`, formData, {
      headers: { 'Authorization': ('Bearer ' + token) }
    });
  }

  updateProfile(profile: Profile, token: string) {
    const formData = new FormData();
    if (profile.firstName !== undefined) {
      formData.append('FirstName', profile.firstName);
    }
    if (profile.lastName !== undefined) {
      formData.append('LastName', profile.lastName);
    }
    if (profile.email !== undefined) {
      formData.append('Email', profile.email);
    }
    if (profile.phoneNumberOffice !== undefined) {
      formData.append('PhoneNumberOffice', profile.phoneNumberOffice);
    }
    if (profile.phoneNumberCell !== undefined) {
      formData.append('PhoneNumberCell', profile.phoneNumberCell);
    }
    if (profile.website !== undefined) {
      formData.append('Website', profile.website);
    }
    if (profile.facebook !== undefined) {
      formData.append('Facebook', profile.facebook);
    }
    if (profile.linkedin !== undefined) {
      formData.append('Linkedin', profile.linkedin);
    }
    if (profile.twitter !== undefined) {
      formData.append('Twitter', profile.twitter);
    }
    if (profile.instagram !== undefined) {
      formData.append('Instagram', profile.instagram);
    }
    if (profile.about !== undefined) {
      formData.append('About', profile.about);
    }
    if (profile.brokerage !== undefined) {
      formData.append('Brokerage', profile.brokerage);
    }
    if (profile.profilePicture !== undefined) {
      formData.append('ProfilePicture', profile.profilePicture, profile.profilePicture.name);
    }
    if (profile.fileType !== undefined) {
      formData.append('FileType', profile.fileType);
    }
    if (profile.address !== undefined) {
      formData.append('Address', profile.address);
    }
    if (profile.city !== undefined) {
      formData.append('City', profile.city);
    }
    if (profile.provinceState !== undefined) {
      formData.append('ProvinceState', profile.provinceState);
    }

    return this.http.post(`${this.url}/api/profile/update`, formData, {
      headers: { 'Authorization': ('Bearer ' + token) }
    });
  }
}
