import {Component, OnInit} from '@angular/core';
import { ProfilePageService } from '../../profile-page.service'

@Component({
    selector: 'profile-posts',
    templateUrl: './profile-posts.component.html'
})
export class ProfilePostsComponent implements OnInit{
    public posts: any;


    constructor(public profilePageService: ProfilePageService) {
    }

    ngOnInit(): void {
        this.posts = [
            {
                type: "question",
                question: "This is a question on a forum.",
                date: "2020-01-01",
                link: ""
            },
            {
                type: "Answer",
                question: "This is an anwser on a forum.",
                date: "2020-01-01",
                link: ""
            },
            {
                type: "Answer",
                question: "This is an anwser on a forum.",
                date: "2020-01-01",
                link: ""
            },
            {
                type: "Answer",
                question: "This is an anwser on a forum.",
                date: "2020-01-01",
                link: ""
            },
            {
                type: "question",
                question: "This is a question on a forum.",
                date: "2020-01-01",
                link: ""
            }
          ];
    }
}
