import {Component, Input} from '@angular/core';

@Component({
    selector: 'profile-contact',
    templateUrl: './profile-contact.component.html'
})
export class ProfileContactComponent {
    @Input() contactDetail:any;
    constructor() {
    }
}
