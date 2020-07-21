import {Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'gx-basic-card',
  templateUrl: './gx-basic-card.component.html',
  styleUrls: ['./gx-basic-card.component.scss']
})
export class GxBasicCardComponent {
  @Input() bodyClasses: string = 'text-center';
  @Input() titleColor: string;
  @Input() data: any;

  constructor(private eleRef: ElementRef) {
    this.eleRef.nativeElement.classList.add('dt-card');
  }
}
