import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProfilePageService implements Resolve<any> {
    private profileContentApiUrl = 'api/profile-content';  // URL to web api
    private profileBannerApiUrl = 'api/profile-banner';  // URL to web api

    bannerData: any;
    contentData: any;

    constructor(private http: HttpClient) {
    }

    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.fetchProfileBannerData(),
                this.fetchProfileContentData(),
            ]).then(() => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get profile page banner data
     * @return {Promise<any>}
     */
    fetchProfileBannerData(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(this.profileBannerApiUrl).subscribe((data: any[]) => {
                this.bannerData = data;
                resolve(data);
            }, reject);
        });
    }

    /**
     * Get profile page content
     * @return {Promise<any>}
     */
    fetchProfileContentData(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(this.profileContentApiUrl).subscribe((data: any[]) => {
                this.contentData = data;
                resolve(data);
            }, reject);
        });
    }
}
