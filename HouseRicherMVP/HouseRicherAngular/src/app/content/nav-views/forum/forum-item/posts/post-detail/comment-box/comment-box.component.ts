import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WallPageService} from '@app/content/nav-views/forum/forum-item/wall-page.service';

@Component({
    selector: 'comment-box',
    templateUrl: './comment-box.component.html'
})
export class CommentBoxComponent implements OnInit {
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

    constructor(private wallPageService: WallPageService) {
    }

    ngOnInit() {
        if (this.class) {
            this.classList += ' ' + this.class;
        }
        this.currentUser = this.wallPageService.currentUserData;
    }

    submitComment() {
        const commentData = this.commentForm.value;
        commentData.is_reply = this.isReply;
        commentData.post_id = this.postId;
        commentData.comment_id = this.commentId;
        this.wallPageService.saveComment(commentData);
        this.commentForm.reset();
    }
}
