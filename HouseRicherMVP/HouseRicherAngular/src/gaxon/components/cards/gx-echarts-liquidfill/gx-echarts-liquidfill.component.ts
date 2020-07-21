import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as echarts from 'echarts';
import 'echarts-liquidfill';

@Component({
  selector: 'gx-echarts-liquidfill',
  templateUrl: './gx-echarts-liquidfill.component.html',
  styleUrls: ['./gx-echarts-liquidfill.component.scss']
})
export class GxEchartsLiquidfillComponent implements OnInit {
  @ViewChild('realTimeUsers', {static: true}) realTimeUsers: ElementRef;
  @Input() title: string;
  @Input() figure: string;
  @Input() data: any;

  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.classList.add('real-time-widget');
  }

  ngOnInit() {
    this.drawLiquidFillChart();
  }

  drawLiquidFillChart() {
    const realTimeUsersChart = echarts.init(this.realTimeUsers.nativeElement);
    const figureAmont = this.figure;
    const option = {
      series: [{
        type: 'liquidFill',
        data: [{
          value: 0.6,
          itemStyle: {
            color: '#fec000'
          }
        }],
        name: this.title,
        center: ['50%', '50%'],
        radius: '95px',
        // shape: 'container',
        outline: {
          show: false
        },
        backgroundStyle: {
          borderColor: 'transparent',
          borderWidth: 0,
          color: '#fff'
        },
        label: {
          position: ['50%', '50%'],
          formatter: function () {
            return figureAmont;
          },
          fontSize: 26,
          color: '#212121',
          insideColor: '#212121'
        }
      }],
      tooltip: {
        show: true
      }
    };

    realTimeUsersChart.setOption(option);
  }

}
