import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[gxCard]'
})
export class GxCardDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add('dt-card');
  }

  @Input()
  set fullHeight(isFullHeight: boolean) {

    if (isFullHeight !== false) {
      this.el.nativeElement.classList.add('dt-card__full-height');
    }
  }
}
