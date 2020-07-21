import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {GxChartComponent} from './../gx-chart/gx-chart.component';

interface TrendingCard {
  heading?: {
    value: string,
    color?: string
  };
  trending?: {
    value?: string,
    icon?: string,
    color?: string
  },
  tagLine?: {
    text: string,
    color?: string
  },
  crypto?: {
    icon: string,
    classes?: string
  };
}

@Component({
  selector: 'gx-trending-card',
  templateUrl: './gx-trending-card.component.html',
  styleUrls: ['./gx-trending-card.component.scss']
})
export class GxTrendingCardComponent implements OnInit {
  classNames = ['dt-chart'];
  @Input() data: TrendingCard;
  @Input() isVertical = false;
  @Input() cardStyle = 'default';

  @ContentChild(GxChartComponent) chart;

  iconSize = '';
  styleClasses = '';

  constructor(private eleRef: ElementRef) {
    this.classNames.forEach((className) => {
      this.eleRef.nativeElement.classList.add(className);
    });
  }

  ngOnInit() {
    if (this.isVertical) {
      this.iconSize = '1x';
    }

    if (this.cardStyle) {
      this.styleClasses = 'style-' + this.cardStyle;
    }
  }

}
