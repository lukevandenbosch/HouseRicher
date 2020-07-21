import {Component, Input} from '@angular/core';

@Component({
  selector: 'gx-analytic-card',
  templateUrl: './gx-analytic-card.component.html',
  styleUrls: ['./gx-analytic-card.component.scss']
})
export class GxAnalyticCardComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() icon: any;
  @Input() number: string;
  @Input() percent: number;

  growthIcon = 'profit';

  @Input()
  set positiveGrowth(value: boolean) {
    if (!value) {
      this.growthIcon = 'loss';
    }
  }

  get positiveGrowth() {
    return (this.growthIcon !== 'loss');
  }

  constructor() {
  }
}
