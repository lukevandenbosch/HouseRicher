import {Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'gx-info-basic-card',
  templateUrl: './gx-info-basic-card.component.html',
})
export class GxInfoBasicCardComponent {
  @Input() bodyClasses: string;
  @Input() data: any;

  constructor(private eleRef: ElementRef) {
    this.eleRef.nativeElement.classList.add('dt-card');
  }
}
