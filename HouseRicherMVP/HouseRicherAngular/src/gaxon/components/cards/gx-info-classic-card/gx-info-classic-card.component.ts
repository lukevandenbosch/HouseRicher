import {Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'gx-info-classic-card',
  templateUrl: './gx-info-classic-card.component.html',
})
export class GxInfoClassicCardComponent {
  @Input() bodyClasses: string;
  @Input() data: any;

  constructor(private eleRef: ElementRef) {
    this.eleRef.nativeElement.classList.add('dt-card');
  }
}
