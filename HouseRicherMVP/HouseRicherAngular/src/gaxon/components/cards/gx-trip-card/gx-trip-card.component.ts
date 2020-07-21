import {Component, Input} from '@angular/core';

@Component({
  selector: 'gx-trip-card',
  templateUrl: './gx-trip-card.component.html',
  styleUrls: ['./gx-trip-card.component.scss']
})
export class GxTripCardComponent {
  @Input() bodyClasses: string = 'py-sm-0';
  @Input() textStyle: string = 'mb-5';
  @Input() data: any;

  constructor() {
  }

}
