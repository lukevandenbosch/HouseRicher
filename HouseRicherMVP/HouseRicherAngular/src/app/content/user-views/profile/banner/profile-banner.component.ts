import {Component} from '@angular/core';
import {ProfilePageService} from '@app/content/user-views/profile/profile-page.service';

@Component({
    selector: 'profile-banner',
    templateUrl: './profile-banner.component.html'
})
export class ProfileBannerComponent {
    bannerData: any;

    constructor(private profilePageService: ProfilePageService) {
        this.bannerData = this.profilePageService.bannerData;
    }
}
