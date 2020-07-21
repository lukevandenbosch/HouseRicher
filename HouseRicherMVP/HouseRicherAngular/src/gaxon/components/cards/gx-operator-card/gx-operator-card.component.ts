import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gx-operator-card',
  templateUrl: './gx-operator-card.component.html',
  styleUrls: ['./gx-operator-card.component.scss']
})
export class GxOperatorCardComponent implements OnInit {
  @Input() operator: any;
  @Input() cardTitle: string;
  @Input() isLiked: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
