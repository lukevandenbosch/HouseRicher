import {Component} from '@angular/core';
import {ProfilePageService} from '@app/content/user-views/profile/profile-page.service';

@Component({
    selector: 'profile-content',
    templateUrl: './profile-content.component.html'
})
export class ProfileContentComponent {
    data: any;
    friendsCardTitle = 'Friends - 530 <span class="f-12 text-light-gray">(27 Mutual)</span>';

    constructor(private profilePageService: ProfilePageService) {
        this.data = this.profilePageService.contentData;
    }
}
