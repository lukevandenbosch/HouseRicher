import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[bsCard]'
})
export class BsCardDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add('card');
  }

  @Input()
  set fullHeight(isFullHeight: boolean) {

    if (isFullHeight !== false) {
      this.el.nativeElement.classList.add('dt-card__full-height');
    }
  }
}
