import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
    selector: 'gx-media-icon-card',
    templateUrl: './gx-media-icon-card.component.html',
})
export class GxMediaIconCardComponent implements OnInit {

    @HostBinding('class') classList = 'media';
    @Input() class: string;
    @Input() label: string;

    constructor() {
    }

    ngOnInit(): void {
        if (this.class) {
            this.classList += ' ' + this.class;
        }
    }

}
