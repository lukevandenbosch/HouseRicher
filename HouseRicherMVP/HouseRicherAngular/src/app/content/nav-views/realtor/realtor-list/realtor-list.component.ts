import { Component, OnInit } from '@angular/core';
import {RealtorService} from '../../../../_services/realtor.service';
import { AlertService } from '@app/_services/alert.service';
import { AuthenticationService } from '@app/_services/authentication.service';
import { ProfileService } from '@app/_services/profile.service';

@Component({
  selector: 'app-realtor-list',
  templateUrl: './realtor-list.component.html',
  styleUrls: ['./realtor-list.component.scss']
})
export class RealtorListComponent implements OnInit {
  public currentUser: any;
  public realtors: any;
  public pageNumber: number = 1;
  public maxPage: number = 10;

  constructor(private realtorService: RealtorService, 
              private alertService: AlertService,
              private authenticationService: AuthenticationService,
              private profileService: ProfileService) {
  }

  ngOnInit() {
    this.currentUser = this.authenticationService.currentUserValue;

    this.realtorService.getRealtors(this.currentUser, ((this.pageNumber * this.maxPage) - this.maxPage), (this.pageNumber * this.maxPage))
    .subscribe(
      data => {
        this.realtors = data;
      },
      error => {
        this.alertService.error("Could not load Realtors");
      });
  }

  follow(realtor: any) {
    if (this.currentUser !== null) {
      this.profileService.follow(realtor.id, this.authenticationService.currentUserValue.token)
        .subscribe(
          data => {
          },
          error => {
          }); 

      realtor.followed = !realtor.followed
    }
  }

}
