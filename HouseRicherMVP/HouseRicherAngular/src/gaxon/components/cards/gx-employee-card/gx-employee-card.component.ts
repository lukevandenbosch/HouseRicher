import {Component, Input} from '@angular/core';

@Component({
  selector: 'gx-employee-card',
  templateUrl: './gx-employee-card.component.html',
  styleUrls: ['./gx-employee-card.component.scss']
})
export class GxEmployeeCardComponent {
  @Input() bodyClasses: string;
  @Input() actionItems: any;
  @Input() employee: any;

  constructor() {
  }
}
