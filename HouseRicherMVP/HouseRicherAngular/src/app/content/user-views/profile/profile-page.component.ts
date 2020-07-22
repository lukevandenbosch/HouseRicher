import {Component, OnInit} from '@angular/core';
import {ProfilePageService} from './profile-page.service'
import {ActivatedRoute, Router} from '@angular/router'
import { isNumber } from 'util';

@Component({
    selector: 'profile-page',
    templateUrl: './profile-page.component.html'
})
export class ProfilePageComponent implements OnInit {

    constructor(private profilePageService: ProfilePageService, private route: ActivatedRoute, private router: Router) {
    }


    ngOnInit() {
    }

    loadHeaders() {
        var id = this.route.snapshot.paramMap.get("id");
        var realtor = this.route.snapshot.paramMap.get("isRealtor");
        if ((isNumber(id) || id == "current") && (realtor === "realtor" || realtor === "user")) {
            if (isNumber(id)) {
                this.profilePageService.userID = parseInt(id);
                this.profilePageService.isCurrentUser = false;
            }
            else {
                this.profilePageService.isCurrentUser = true;
            }
            this.profilePageService.isRealtor = realtor === "realtor" ? true : false;
        }
        else {
            this.router.navigateByUrl('navigation-error');
        }
    }
}
