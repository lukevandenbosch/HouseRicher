import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gx-report-card',
  templateUrl: './gx-report-card.component.html',
  styleUrls: ['./gx-report-card.component.scss']
})
export class GxReportCardComponent implements OnInit {
  @Input() title: string;
  @Input() data: any;
  @Input() chart: any;

  constructor() {
  }

  ngOnInit() {
  }

}
