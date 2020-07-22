import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
    selector: 'profile-about',
    templateUrl: './profile-about.component.html'
})
export class ProfileAboutComponent implements OnInit{
    @Input('aboutProfile') data: any;
    @HostBinding('class') classList = 'card';
    @Input() class: string;

    constructor() {
    }

    ngOnInit(): void {
        if (this.class) {
            this.classList += ' ' + this.class;
        }
    }
}
