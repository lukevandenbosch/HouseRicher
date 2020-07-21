import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'gx-slider-header',
  template: `<ng-content></ng-content>`,
  styles: [':host{display: block;}']
})
export class GxSliderHeaderComponent {

  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.classList.add('dt-slider__header');
  }

}
