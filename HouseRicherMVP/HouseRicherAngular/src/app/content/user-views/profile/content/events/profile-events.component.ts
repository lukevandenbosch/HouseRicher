import {Component, ElementRef, HostBinding, Input, Renderer2} from '@angular/core';

@Component({
    selector: 'profile-events',
    templateUrl: './profile-events.component.html',
})
export class ProfileEventsComponent {
    @Input() event: any;

    constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    }
}
