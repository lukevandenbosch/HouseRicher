import {Component} from '@angular/core';
import {ProfilePageService} from '@app/content/user-views/profile/profile-page.service';

@Component({
    selector: 'profile-banner',
    templateUrl: './profile-banner.component.html',
    styleUrls: ['./profile-banner.component.scss']
})
export class ProfileBannerComponent {
    bannerData: any;

    constructor(public profilePageService: ProfilePageService) {
        this.bannerData = this.profilePageService.bannerData;
    }

    aboutClick(value: string) {
        this.profilePageService.aboutButton = value;
    }

    profilePicEdit() {
        this.profilePageService.aboutButton = 'about'
        this.profilePageService.editDescription = true;
        this.profilePageService.editProfilePicture = true;
        console.log(this.profilePageService.editProfilePicture)
    }
}
