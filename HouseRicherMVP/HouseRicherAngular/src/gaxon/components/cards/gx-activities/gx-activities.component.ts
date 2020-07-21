import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gx-activities',
  templateUrl: './gx-activities.component.html',
  styleUrls: ['./gx-activities.component.scss']
})
export class GxActivitiesComponent implements OnInit {
  @Input() title: string;
  @Input() activities: any[];
  @Input() bodyClasses: string = 'px-0';

  constructor() {
  }

  ngOnInit() {
  }

}
