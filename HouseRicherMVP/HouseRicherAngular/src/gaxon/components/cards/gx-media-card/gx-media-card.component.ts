import {Component, Input} from '@angular/core';

@Component({
  selector: 'gx-media-card',
  templateUrl: './gx-media-card.component.html',
  styleUrls: ['./gx-media-card.component.scss']
})
export class GxMediaCardComponent {
  @Input() bodyClasses: string;
  @Input() textStyle = 'mb-3';
  @Input() data: any;

  constructor() {
  }

}
