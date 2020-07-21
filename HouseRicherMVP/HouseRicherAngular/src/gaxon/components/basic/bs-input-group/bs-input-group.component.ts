import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgxMasonryComponent} from 'ngx-masonry';

@Component({
  selector: 'app-bs-input-group',
  templateUrl: './bs-input-group.component.html',
  styleUrls: ['./bs-input-group.component.scss']
})
export class BsInputGroupComponent implements OnInit, AfterViewInit {
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
