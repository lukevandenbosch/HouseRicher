import {Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WallPageService} from '@app/content/nav-views/forum/forum-item/wall-page.service';
import {Post} from '@app/content/nav-views/forum/forum-item/post.model';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit, OnDestroy {
    posts: any;
    @HostBinding('class') classList = 'col-xl-12 col-md-12 col-sm-12';
    currentUser: any;
    postDataSubscribe: any;

    postForm = new FormGroup({
        message: new FormControl(null, Validators.required)
    });

    constructor(private wallPageService: WallPageService) {
        this.currentUser = this.wallPageService.currentUserData;
        this.posts = this.wallPageService.posts;
    }

    ngOnInit() {
        this.fetchPosts();
    }

    ngOnDestroy(): void {
        if (this.postDataSubscribe) {
            this.postDataSubscribe.unsubscribe();
        }
    }

    fetchPosts() {

    }

    onSubmitPost() {
        const post = this.postForm.value;
        post.attachments = [];
        post.feeds = {
            views: 1,
            likes: 0,
            comments: 0
        };
        post.comments = [];
        this.wallPageService.saveWallPost(post);
        this.postForm.reset();
    }

}
