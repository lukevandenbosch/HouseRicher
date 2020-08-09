import {Component, OnInit} from '@angular/core';
import { AuthenticationService } from '@app/_services/authentication.service';
import { FeedService } from '@app/_services/feed.service';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/_services/alert.service';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { annonymousValidation } from '@app/_utiltlies/validators';

@Component({
    selector: 'app-wall-page',
    templateUrl: './wall-page.component.html',
    styleUrls: ['./wall-page.component.scss']
})
export class WallPageComponent implements OnInit {
    postId: number;
    submitted: boolean;
    loading: boolean;

    public post: any;
    public comments: any;
    public currentUser: any;

    public commentForm: FormGroup;

    constructor(private activeRoute: ActivatedRoute,
                private authenticationService: AuthenticationService,
                private formBuilder: FormBuilder,
                private feedService: FeedService,
                private alertService: AlertService) {
    }

    ngOnInit() {
        this.postId = parseInt(decodeURIComponent(this.activeRoute.snapshot.paramMap.get('id')));
        
        this.currentUser = this.authenticationService.currentUserValue;

        this.commentForm = this.formBuilder.group({
            message: ['', Validators.required],
            termsAndConditions: ['']
        }, {
            validator: annonymousValidation('termsAndConditions', (this.currentUser == null ? null : this.currentUser.token))
        });

        var token = this.currentUser == null ? null : this.currentUser.token;

        this.feedService.getFeed(token, 0, 1, this.postId.toString())
            .subscribe(
                data => {
                    this.post = data;
                    this.post = this.post.feed[0];
                    this.loadComments();
                },
                error => {
                    this.alertService.error("Post Could Not be Loaded");
                });
    }

    loadComments() {
        var token = this.currentUser == null ? null : this.currentUser.token;
        this.feedService.getComment(token, this.postId)
            .subscribe(
                data => {
                    this.comments = data;
                },
                error => {
                    this.alertService.error("Comments Could Not be Loaded");
                });
    }

    get f() { return this.commentForm.controls; }

    toggleLike(post: any, isComment: boolean) {
        if (this.currentUser == null) {
            return;
        }

        if (isComment) {
            this.feedService.likePostComment(this.currentUser, null, post.id)
                .subscribe(
                    data => {
                    },
                    error => {
                        this.alertService.error("Failed to like Comment");
                    }); 
        } else {
            this.feedService.likePostComment(this.currentUser, post.id, null)
                .subscribe(
                    data => {
                    },
                    error => {
                        this.alertService.error("Failed to like Post");
                    }); 
        }
        
        post.isLiked = !post.isLiked;
        if (post.isLiked) {
            post.likes++;
        } else {
            post.likes--;
        }
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.commentForm.invalid) {
            return;
        }
        this.loading = true;
 
        this.feedService.postFeed(this.currentUser, null, this.f.message.value, this.f.termsAndConditions.value, this.postId)
            .subscribe(
                data => {
                    this.commentForm.reset();
                    this.submitted = false;
                    this.loading = false;
                    this.loadComments();
                },
                error => {
                    this.loading = false;
                    this.submitted = false;
                    this.alertService.error("Comment failed to send.");
                });   
            }
}
