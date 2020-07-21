import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gx-tasks-report',
  templateUrl: './gx-tasks-report.component.html',
  styleUrls: ['./gx-tasks-report.component.scss']
})
export class GxTasksReportComponent implements OnInit {
  @Input() tasks: any;

  constructor() {
  }

  ngOnInit() {
    this.tasks.chart.listeners = [
      {
        event: 'init',
        method: function (event) {
          // get map object
          const map = event.chart;
          map.amLink.remove();
        }
      }
    ];
  }

}
