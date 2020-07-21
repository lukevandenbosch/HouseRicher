import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WallPageService implements Resolve<any> {
    private wallPageUrl = 'api/wall-page-data';  // URL to web api
    private postUrl = 'api/wall-page-posts';  // URL to web api

    wallPageData: any;
    posts: any;
    currentUserData = {name: 'Chelsea Jones', small_image: 'https://via.placeholder.com/150X150'};

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
                this.getWallPage(),
                this.fetchPosts(),
            ]).then(() => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get wall page data
     * @return {Promise<any>}
     */
    fetchPosts(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(this.postUrl).subscribe((data: any[]) => {
                this.posts = data;
                resolve(data);
            }, reject);
        });
    }

    /**
     * Get wall page data
     * @return {Promise<any>}
     */
    getWallPage(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(this.wallPageUrl).subscribe((data: any[]) => {
                this.wallPageData = data;
                resolve(data);
            }, reject);
        });
    }


    /**
     *  Save wall page user post
     */
    saveWallPost(post) {
        const noOfPosts = this.posts.length;
        post.id = noOfPosts + 1;
        post.user_name = this.currentUserData.name;
        post.user_image = this.currentUserData.small_image;
        post.created_at = new Date();
        this.posts.push(post);
    }

    private savePostComment(post_id, comment) {
        this.posts.find(item => item.id === post_id).comments.push(comment);
    }

    private saveReplyOnComment(post_id, comment_id, newComment) {
        const postComments = this.posts.find(item => item.id === post_id).comments;
        const comment = postComments.find(item => item.id === comment_id);

        if (!comment.hasOwnProperty('replies')) {
            postComments.find(item => item.id === comment_id).replies = [];
        }
        postComments.find(item => item.id === comment_id).replies.push(newComment);
        this.posts.find(item => item.id === post_id).comments = postComments;
    }

    /**
     *
     * @param comment
     */
    saveComment(comment) {
        const newComment = {
            name: this.currentUserData.name,
            image: this.currentUserData.small_image,
            created_at: new Date(),
            text: comment.message
        };

        if (comment.is_reply) {
            this.saveReplyOnComment(comment.post_id, comment.comment_id, newComment);
        } else {
            this.savePostComment(comment.post_id, newComment);
        }
    }
}
