import {Component} from '@angular/core';

@Component({
  selector: 'ngbd-buttons',
  templateUrl: './buttons.component.html'
})
export class NgbdButtons {
  snippets: string = '';
  toggle_btn_primary: boolean = true;
  toggle_btn_secondary: boolean = false;

  togglePrimaryButton() {
    this.toggle_btn_primary = !this.toggle_btn_primary;
  }

  toggleSecondaryButton() {
    this.toggle_btn_secondary = !this.toggle_btn_secondary;
  }
}
