import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ForumService implements Resolve<any> {
  usersList: any[];
  realestates: any;

  constructor(private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {

      Promise.all([
        this.getUsers(),
        this.getRealEstates()
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  getUsers(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('api/list-views-users')
        .subscribe((response: any) => {
          this.usersList = response;
          resolve(response);
        }, reject);
    });
  }

  getpost(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('api/list-views-posts')
        .subscribe((response: any) => {
          this.usersList = response;
          resolve(response);
        }, reject);
    });
  }

  getRealEstates(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('api/list-views-realestates')
        .subscribe((response: any) => {
          this.realestates = response;
          resolve(response);
        }, reject);
    });
  }
}
