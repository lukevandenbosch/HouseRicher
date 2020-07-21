import {Component, Input} from '@angular/core';

export interface IAlert {
  id: number;
  type: string;
}

@Component({
  selector: 'ngbd-link-color',
  templateUrl: './link-color.component.html'
})
export class LinkColorComponent  {
  @Input()
  public alerts: Array<IAlert> = [];

  constructor() {
    this.alerts.push({
      id: 5,
      type: 'primary'
    }, {
      id: 6,
      type: 'secondary'
    }, {
      id: 1,
      type: 'success'
    }, {
      id: 4,
      type: 'danger'
    }, {
      id: 3,
      type: 'warning'
    }, {
      id: 2,
      type: 'info'
    }, {
      id: 7,
      type: 'light'
    }, {
      id: 8,
      type: 'dark'
    });
  }
}
