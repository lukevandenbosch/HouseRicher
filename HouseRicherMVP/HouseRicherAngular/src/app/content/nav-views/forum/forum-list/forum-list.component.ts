import {Component, OnInit} from '@angular/core';
import {FeedService} from './../../../../_services/feed.service';
import {AuthenticationService} from './../../../../_services/authentication.service';
import {AlertService} from './../../../../_services/alert.service';

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.scss']
})
export class ForumListComponent implements OnInit {
  public posts: any;
  private maxPage: number = 10;
  public pageNumber: number = 1;
  public monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]; 

  constructor(private feedService: FeedService, private authenticationService: AuthenticationService, private alertService: AlertService) {
  }

  ngOnInit() {
    const token = this.authenticationService.currentUserValue
    this.feedService.getFeed(token, ((this.pageNumber * this.maxPage) - this.maxPage), (this.pageNumber * this.maxPage))
    .subscribe(
      data => {
        this.posts = data;
        for (var i = 0; i < this.posts.length; i++) {
          var dp = new Date(this.posts[i].datePosted);
          var hoursp = dp.getHours();
          var ampmp;
          if (hoursp > 12) {
            ampmp = "pm"
            hoursp = hoursp - 12
          }
          else if (hoursp == 12) {
            ampmp = "pm"
          }
          else {
            ampmp = "am"
          }
          var minutesp = dp.getMinutes() < 10 ? "0" + dp.getMinutes() : dp.getMinutes();
          this.posts[i].datePosted = dp.getDate() + " " + this.monthNames[dp.getMonth() - 1] + ", " + dp.getFullYear() + " at " + hoursp + ":" + minutesp + " " + ampmp;
        }
      },
      error => {
        this.alertService.error("Could not load Posts");
      });
  }

}
