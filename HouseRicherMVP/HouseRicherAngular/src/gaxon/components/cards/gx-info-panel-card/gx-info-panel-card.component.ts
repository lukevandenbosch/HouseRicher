import {Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'gx-info-panel-card',
  templateUrl: './gx-info-panel-card.component.html',
})
export class GxInfoPanelCardComponent {
  @Input() bodyClasses: string;
  @Input() data: any;

  constructor(private eleRef: ElementRef) {
    this.eleRef.nativeElement.classList.add('dt-card');
  }
}
