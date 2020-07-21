import {Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'gx-ibox',
  templateUrl: './gx-ibox.component.html'
})
export class GxIboxComponent {
  defaultClasses = ['card', 'text-center'];
  @Input('icon') icon: string;
  @Input() label: string;
  @Input('icon-size') iconSize: string = '3x';
  @Input('icon-class') iconClasses: string;

  constructor(private eleRef: ElementRef) {
    this.defaultClasses.forEach((className) => {
      this.eleRef.nativeElement.classList.add(className);
    });
  }

}
