import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {ProfilePageService} from '../../profile-page.service'

@Component({
    selector: 'profile-about',
    templateUrl: './profile-about.component.html',
    styleUrls: ['./profile-about.component.scss']
})
export class ProfileAboutComponent implements OnInit{
    @Input('aboutProfile') data: any;
    @HostBinding('class') classList = '';
    @Input() class: string;
    public followers: any;
    public ratings: any;

    public editPersonal: boolean = false;


    constructor(public profilePageService: ProfilePageService) {
        this.followers = this.profilePageService.contentData;
    }

    ngOnInit(): void {
        console.log(this.profilePageService.editProfilePicture);
        if (this.class) {
            this.classList += ' ' + this.class;
        }
        this.ratings = [
            {
                rating: 5,
                firstName: "bob",
                lastName: "Dylan",
                description: "Hello this is my name and I am rating this as 5 stars because he is a great guy.",
                image: 'https://via.placeholder.com/150X150'
            },
            {
                rating: 3,
                firstName: "bob",
                lastName: "Dylan",
                description: "Hello this is my name and I am rating this as 5 stars because he is a great guy.",
                image: 'https://via.placeholder.com/150X150'
            },
            {
                rating: 2,
                firstName: "bob",
                lastName: "Dylan",
                description: "Hello this is my name and I am rating this as 5 stars because he is a great guy.",
                image: 'https://via.placeholder.com/150X150'
            },
            {
                rating: 1,
                firstName: "bob",
                lastName: "Dylan",
                description: "Hello this is my name and I am rating this as 5 stars because he is a great guy.",
                image: 'https://via.placeholder.com/150X150'
            },
            {
                rating: 4,
                firstName: "bob",
                lastName: "Dylan",
                description: "Hello this is my name and I am rating this as 5 stars because he is a great guy.",
                image: 'https://via.placeholder.com/150X150'
            }
          ];
    }
}
