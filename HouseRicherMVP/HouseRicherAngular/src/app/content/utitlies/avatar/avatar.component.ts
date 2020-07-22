import {Component, OnInit, Input} from '@angular/core';


@Component({
    selector: 'avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
    @Input() firstName: String;
    @Input() src: String;
    @Input() img_class: String;
    @Input() img_style: String;

    constructor() {
    }

    ngOnInit() {
    }
}
