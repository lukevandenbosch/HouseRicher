import {Component, OnInit} from '@angular/core';
import {FeedService} from './../../../../_services/feed.service';
import {AuthenticationService} from './../../../../_services/authentication.service';
import {AlertService} from './../../../../_services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { annonymousValidation } from '@app/_utiltlies/validators';

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.scss']
})
export class ForumListComponent implements OnInit {
  public posts: any;

  private maxPage: number = 10;
  public pageNumber: number = 1;
  public pageList: number[] = [];
  
  currentUser: any;
  submitted: boolean = false;
  loading: boolean = false;

  postForm: FormGroup;

  constructor(private authenticationService: AuthenticationService,
              private formBuilder: FormBuilder,
              private feedService: FeedService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.currentUser = this.authenticationService.currentUserValue

    this.postForm = this.formBuilder.group({
            message: ['', Validators.required],
            subject: ['', Validators.required],
            termsAndConditions: ['']
        }, {
            validator: annonymousValidation('termsAndConditions', (this.currentUser == null ? null : this.currentUser.token))
        });
      
    this.loadPosts();
  }

  loadPosts() {
    const token = (this.currentUser == null ? null : this.currentUser.token);

    this.feedService.getFeed(token, ((this.pageNumber * this.maxPage) - this.maxPage), (this.pageNumber * this.maxPage), null)
    .subscribe(
      data => {
        this.posts = data;
        this.pageList = [];
        for (var i = 1; i < (1 + (this.posts.count / this.maxPage)); i++) {
          this.pageList.push(i);
        }
      },
      error => {
        this.alertService.error("Could not load Posts");
      });
  }

  get f() { return this.postForm.controls; }

  changePage(page: number) {
    this.pageNumber = page;
    this.loadPosts()
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.postForm.invalid) {
        return;
    }
    this.loading = true;

    this.feedService.postFeed(this.currentUser, this.f.subject.value, this.f.message.value, this.f.termsAndConditions.value, null)
        .subscribe(
            data => {
                this.postForm.reset();
                this.alertService.information("Question Posted.");
                this.submitted = false;
                this.loading = false;
                this.loadPosts();
            },
            error => {
                this.loading = false;
                this.submitted = false;
                this.alertService.error("Post failed to send.");
            });        
  }
}
