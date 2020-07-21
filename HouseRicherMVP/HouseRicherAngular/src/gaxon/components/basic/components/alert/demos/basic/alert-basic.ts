import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngbd-alert-basic',
  templateUrl: './alert-basic.html'
})
export class NgbdAlertBasic {
  @Input()
  public alerts: Array<any> = [];

  constructor() {
    this.alerts.push({
      id: 5,
      type: 'primary',
      message: 'A simple primary alert—check it out! ',
    }, {
      id: 6,
      type: 'secondary',
      message: 'A simple secondary alert—check it out! ',
    }, {
      id: 1,
      type: 'success',
      message: 'A simplen success alert—check it out! ',
    }, {
      id: 4,
      type: 'danger',
      message: 'A simple danger alert—check it out! ',
    }, {
      id: 3,
      type: 'warning',
      message: 'A simple warning alert—check it out! ',
    }, {
      id: 2,
      type: 'info',
      message: 'A simplen info alert—check it out! ',
    }, {
      id: 7,
      type: 'light',
      message: 'A simple light alert—check it out! ',
    }, {
      id: 8,
      type: 'dark',
      message: 'A simple dark alert—check it out! ',
    });
  }
}
