import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gx-download-apps-card',
  templateUrl: './gx-download-apps-card.component.html',
  styleUrls: ['./gx-download-apps-card.component.scss']
})
export class GxDownloadAppsCardComponent implements OnInit {
  @Input() cardData: any;

  constructor() {
  }

  ngOnInit() {
  }

}
