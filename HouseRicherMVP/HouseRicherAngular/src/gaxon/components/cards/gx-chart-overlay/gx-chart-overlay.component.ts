import {Component, ElementRef, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'gx-chart-overlay',
  templateUrl: './gx-chart-overlay.component.html',
  styleUrls: ['./gx-chart-overlay.component.scss']
})
export class GxChartOverlayComponent {
  @HostBinding('class.dt-chart__reveal') isOverlayOut = false;
  @Input() bodyClasses: string;
  @Input() chart: any;
  @Input() data: any;

  hostClasses = ['dt-card', 'dt-chart'];

  constructor(private eleRef: ElementRef) {
    this.hostClasses.forEach((classname) => {
      this.eleRef.nativeElement.classList.add(classname);
    });
  }

  toggleOverlay() {
    this.isOverlayOut = !this.isOverlayOut;
  }

}
