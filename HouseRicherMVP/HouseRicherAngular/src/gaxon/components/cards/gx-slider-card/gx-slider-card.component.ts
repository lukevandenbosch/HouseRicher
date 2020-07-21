import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
    selector: 'gx-slider-card',
    templateUrl: './gx-slider-card.component.html'
})
export class GxSliderCardComponent implements OnInit {
    @Input() data: any;
    activeSlideImage: string;

    constructor(private elementRef: ElementRef) {
    }

    ngOnInit(): void {
        this.activeSlideImage = this.data.imageUrls[0];
    }

    onSlideChange(event) {
        const currentSliderId = event.current.replace('ngb-slider-', '');
        this.activeSlideImage = this.data.imageUrls[currentSliderId];
    }
}
