import {Component, Input} from '@angular/core';
import {IChartistData, IChartOptions, Interpolation} from 'chartist';
import {ChartEvent, ChartType, ResponsiveOptions} from 'ng-chartist';

@Component({
  selector: 'gx-chartist-chart',
  template: `
    <x-chartist
      [type]="type"
      [data]="data"
      [options]="options"
      [responsiveOptions]="responsiveOptions"
      [events]="events"
      [ngClass]="classNames"
    ></x-chartist>`
})
export class GxChartistChartComponent {
  @Input() data: IChartistData;
  @Input() options: any;
  @Input() type: ChartType;
  @Input() responsiveOptions: ResponsiveOptions;
  @Input() events: ChartEvent;
  @Input() lineSmooth: any;
  @Input() classNames: string;

  constructor() {

  }

  ngOnInit() {
    if (this.lineSmooth && this.options) {
      this.options.lineSmooth = Interpolation.cardinal({
        tension: 1
      });
    }
  }
}
