import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'gx-chart',
  templateUrl: './gx-chart.component.html',
  styles: [':host{display: block}']
})
export class GxChartComponent implements OnInit {
  @Input() labels: Array<any>;
  @Input() data: Array<number[]> | number[];
  @Input() datasets: Array<any>;
  @Input() colors: Array<any>;
  @Input() chartType: string;
  @Input() gradients: any;
  @Input() shadowType: string;
  @Input() chartClasses: string;
  @Output() chartHover = new EventEmitter<any>();
  @Output() chartClick = new EventEmitter<any>();
  @ViewChild('chartRef', {static: true}) chartRef: ElementRef;

  private __options: any;

  defaultOptions = {
    responsive: true,
    legend: {
      display: false
    },
    layout: {
      padding: 0
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    }
  };

  @Input()
  set options(options: any) {
    // options
    if (options) {
      this.__options = Object.assign(this.defaultOptions, options);
    } else {
      this.__options = Object.assign({}, this.defaultOptions);
    }
  }

  get options() {
    return this.__options;
  }

  constructor() {
  }

  ngOnInit() {
    this.createChartGradient();
    this.createChartShadow();
    this.writeCenteredText();

    if (this.options.height) {
      this.chartRef.nativeElement.height = this.options.height;
    }

    if (this.options.width) {
      this.chartRef.nativeElement.width = this.options.width;
    }
  }

  /**
   * Write text incenter of doughnut, and pie chart
   */
  writeCenteredText() {
    // creating center text
    (<any>window).Chart.pluginService.register({
      beforeDraw: function (chart) {
        const width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;

        const centerText = chart.options.centerText;

        if (centerText) {
          ctx.restore();
          const fontSize = (height / 114).toFixed(2);
          ctx.font = 3 + 'rem Source Sans Pro';
          ctx.textBaseline = 'middle';

          const textX = Math.round((width - ctx.measureText(centerText).width) / 2),
            textY = height / 2;

          ctx.fillText(centerText, textX, textY);
          ctx.save();
        }
      }
    });
  }

  /**
   * Creating chart shadow
   */
  createChartShadow(): void {
    if (this.shadowType) {
      const shadowType = this.shadowType;
      const chartColor = (<any>window).Chart.helpers.color;

      const draw = (<any>window).Chart.controllers.line.prototype.draw;
      (<any>window).Chart.controllers.line = (<any>window).Chart.controllers.line.extend({
        draw: function () {
          draw.apply(this, arguments);
          const ctx = this.chart.chart.ctx;

          if (shadowType === 'area') {
            const _fill = ctx.fill;
            ctx.fill = function () {
              ctx.save();
              ctx.shadowColor = chartColor('#5c5c5c').alpha(0.5).rgbString();
              ctx.shadowBlur = 16;
              ctx.shadowOffsetX = 0;
              ctx.shadowOffsetY = 0;
              _fill.apply(this, arguments);
              ctx.restore();
            };
          } else if (shadowType === 'line') {
            const _stroke = ctx.stroke;
            ctx.stroke = function () {
              ctx.save();
              ctx.shadowColor = '#07C';
              ctx.shadowBlur = 10;
              ctx.shadowOffsetX = 0;
              ctx.shadowOffsetY = 4;
              _stroke.apply(this, arguments);
              ctx.restore();
            };
          }
        }
      });
    }
  }

  /**
   * Creating Chart gradient
   */
  createChartGradient(): void {
    if (this.gradients) {
      const chartColor = (<any>window).Chart.helpers.color;
      const context: CanvasRenderingContext2D = this.chartRef.nativeElement.getContext('2d');
      this.colors = [];

      this.gradients.forEach((dataset) => {
        const gradRef = context.createLinearGradient(dataset.position[0], dataset.position[1], dataset.position[2], dataset.position[3]);
        dataset.colors.forEach((color) => {
          gradRef.addColorStop(color.point, chartColor(color.code).alpha(color.opacity).rgbString());
        });

        if (dataset.borderColor) {
          this.colors.push({
            backgroundColor: gradRef,
            borderColor: dataset.borderColor,
            pointBackgroundColor: gradRef,
            pointBorderColor: dataset.borderColor,
            pointHoverBackgroundColor: gradRef,
            pointHoverBorderColor: gradRef
          });
        } else {
          this.colors.push({
            backgroundColor: gradRef,
            borderColor: gradRef,
            pointBackgroundColor: gradRef,
            pointBorderColor: gradRef,
            pointHoverBackgroundColor: gradRef,
            pointHoverBorderColor: gradRef
          });
        }
      });
    }
  }

  // events
  public chartClicked(e: any): void {
    this.chartClick.next(e);
  }

  public chartHovered(e: any): void {
    this.chartHover.emit(e);
  }
}
