import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngbd-tabset-basic',
  templateUrl: './tabset-basic.html'
})
export class NgbdTabsetBasic {
  @Input() orientation = 'horizontal'
}
