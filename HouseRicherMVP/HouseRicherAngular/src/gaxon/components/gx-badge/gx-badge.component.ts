import {Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'gx-badge',
  template: `
    <ng-content></ng-content>`
})
export class GxBadgeComponent {

  @Input()
  set type(type: string) {

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

  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add('badge');
  }

}
