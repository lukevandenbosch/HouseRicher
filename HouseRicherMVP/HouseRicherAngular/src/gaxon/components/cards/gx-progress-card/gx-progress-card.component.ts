import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {GxChartComponent} from './../gx-chart/gx-chart.component';

interface ProgressCard {
  amount: string;
  heading?: {
    value: string,
    color?: string
  };
  trending?: {
    value?: string,
    icon?: string,
    color?: string
  };
  tagLine?: {
    text: string,
    color?: string
  };
}

@Component({
  selector: 'gx-progress-card',
  templateUrl: './gx-progress-card.component.html',
  styleUrls: ['./gx-progress-card.component.scss']
})
export class GxProgressCardComponent implements OnInit {

  classlist = ['dt-card'];
  @Input() data: ProgressCard;
  @Input() coloums = [5, 7];

  @ContentChild(GxChartComponent) chart;

  constructor(private eleRef: ElementRef) {
    this.classlist.forEach((className) => {
      this.eleRef.nativeElement.classList.add(className);
    });
  }

  ngOnInit() {
  }

}
