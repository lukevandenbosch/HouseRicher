import {Component, ElementRef, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'gx-loader',
  templateUrl: './gx-loader.component.html',
  styleUrls: ['./gx-loader.component.scss']
})
export class GxLoaderComponent implements OnInit {
  @HostBinding('class') loaderClasses = 'dt-loader';

  constructor(private eleRef: ElementRef) {
    // this.eleRef.nativeElement.classList.add();
  }

  ngOnInit() {
  }

}
