import {Component} from '@angular/core';

@Component({
  selector: 'ngbd-buttons-checkbox',
  templateUrl: './buttons-checkbox.html'
})
export class NgbdButtonsCheckbox {
  model = {
    button1: true,
    button2: false,
    left: true,
    middle: false,
    right: false
  };
}
