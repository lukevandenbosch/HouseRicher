import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgxMasonryComponent} from 'ngx-masonry';

@Component({
  selector: 'app-bs-typography',
  templateUrl: './bs-typography.component.html',
  styleUrls: ['./bs-typography.component.scss']
})
export class BsTypographyComponent implements OnInit, AfterViewInit {
  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.masonry.reloadItems();
    this.masonry.layout();
  }

}
