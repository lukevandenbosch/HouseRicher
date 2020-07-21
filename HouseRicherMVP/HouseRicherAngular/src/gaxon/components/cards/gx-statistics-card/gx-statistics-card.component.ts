import {Component, Input, OnInit} from '@angular/core';

interface StatisticsCard {
  amount: string;
  heading?: {
    text: string,
    color?: string
  };
  trending?: {
    text?: string,
    icon?: string,
    color?: string
  };
  tagLine?: {
    text?: string,
    color?: string
  };
  progressBar?: {
    val: number,
    maxVal?: number,
    color?: string
  };
}

@Component({
  selector: 'gx-statistics-card',
  templateUrl: './gx-statistics-card.component.html',
  styleUrls: ['./gx-statistics-card.component.scss']
})
export class GxStatisticsCardComponent implements OnInit {
  @Input() data: StatisticsCard;
  headingColor = 'text-body';

  constructor() {
  }

  ngOnInit() {
    if (this.data.heading.color) {
      this.headingColor = this.data.heading.color;
    }
  }

}
