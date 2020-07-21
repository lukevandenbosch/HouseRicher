import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gx-referral-traffic',
  templateUrl: './gx-referral-traffic.component.html',
  styleUrls: ['./gx-referral-traffic.component.scss']
})
export class GxReferralTrafficComponent implements OnInit {
  @Input() progressRecords: any[];
  @Input() chart: any;

  constructor() {
  }

  ngOnInit() {
  }

}
