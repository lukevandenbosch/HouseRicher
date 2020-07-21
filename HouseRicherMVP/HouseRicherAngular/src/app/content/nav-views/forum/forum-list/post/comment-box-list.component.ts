import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ForumService} from '@app/content/nav-views/forum/forum.service';

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

    constructor(private wallPageService: ForumService) {
    }

    ngOnInit() {
        if (this.class) {
            this.classList += ' ' + this.class;
        }
        this.currentUser = this.wallPageService.usersList;
    }

    submitComment() {
        const commentData = this.commentForm.value;
        commentData.is_reply = this.isReply;
        commentData.post_id = this.postId;
        commentData.comment_id = this.commentId;
        this.commentForm.reset();
    }
}
