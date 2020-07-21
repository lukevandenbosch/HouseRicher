import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[gxBadge]'
})
export class GxBadgeDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add('badge');
  }

  @Input()
  set gxBadge(type: string) {

    if (type) {
      this.el.nativeElement.classList.add('badge-' + type);
    }
  }

  @Input()
  set pill(isPill: boolean) {

    if (isPill !== false) {
      this.el.nativeElement.classList.add('badge-pill');
    }
  }

}
