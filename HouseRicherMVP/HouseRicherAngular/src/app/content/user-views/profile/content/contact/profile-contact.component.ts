import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'profile-contact',
    templateUrl: './profile-contact.component.html',
    styleUrls: ['./profile-contact.component.scss']
})
export class ProfileContactComponent implements OnInit {
    public contactDetail: any;
    
    public editContact: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
        this.contactDetail = {
            email: 'kiley.brown@example.com', 
            website: 'https://www.example.com',
            brokerage: 'Century 21',
            phoneNumberOffice: '+1-987 (454) 987',
            PhoneNumberCell: '+1-987 (454) 987',
            facebook: 'https://www.facebook.com/user/bob',
            linkedin: 'https://www.linkedin.com/user/bob',
            twitter: 'https://www.twitter.com/user/bob',
            instagram: 'https://www.instagram.com/user/bob',
            about: "This is my paragraph about myself. I hope no one notices that is repeats after a while. But this won't go on forever. I am rambling at this point, but I need this to be a longer verson of an about page. please notice that this is myself talking an not anyone else. I am not a realtor, but I am trying to help. Please listen.",
            profilePicture: 'https://via.placeholder.com/150X150',
            address: '123 Fake Street',
            city: 'Toronto',
            provinceState: 'Ontario'
        };
    }
}
