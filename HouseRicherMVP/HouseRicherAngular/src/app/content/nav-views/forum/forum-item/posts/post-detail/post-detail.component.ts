import {Component, Input} from '@angular/core';

@Component({
    selector: 'post-detail',
    templateUrl: './post-detail.component.html'
})
export class PostDetailComponent {
    @Input() post: any;
    currentUser: any;
    likePost = false;

    constructor() {
    }

    toggleShowHideClass(element: Element) {
        if (element.classList.contains('show')) {
            element.classList.remove('show');
            element.classList.add('hide');
        } else {
            element.classList.add('show');
            element.classList.remove('hide');
        }
    }

    toggleLike() {
        this.likePost = !this.likePost;
        if (!this.likePost) {
            this.post.feeds.likes -= 1;
        } else {
            this.post.feeds.likes += 1;
        }
    }
}
