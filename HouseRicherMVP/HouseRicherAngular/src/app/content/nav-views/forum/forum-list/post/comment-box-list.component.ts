import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../../../_services/authentication.service';
import {Token} from '../../../../../_model/token'

@Component({
    selector: 'comment-box-list',
    templateUrl: './comment-box-list.component.html'
})
export class CommentBoxListComponent implements OnInit {
    @Input() additionalClass = '';
    @Input() imageSize = '35';
    @Input() formSize = 'large';
    @HostBinding('class') classList = 'media';
    @Input() class: string;
    @Input() isReply = false;
    @Input() postId: number;
    @Input() commentId = 0;

    currentUser: any;

    commentForm = new FormGroup({
        message: new FormControl(null, Validators.required)
    });

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit() {

        this.currentUser = this.authenticationService.currentUserValue

        if (this.currentUser === null) {
            this.currentUser = {
                firstName: "Anonymous",
                profilePicture: ""
            };
        }

        if (this.class) {
            this.classList += ' ' + this.class;
        }
    }

    submitComment() {
        const commentData = this.commentForm.value;
        commentData.is_reply = this.isReply;
        commentData.post_id = this.postId;
        commentData.comment_id = this.commentId;
        this.commentForm.reset();
    }
}
