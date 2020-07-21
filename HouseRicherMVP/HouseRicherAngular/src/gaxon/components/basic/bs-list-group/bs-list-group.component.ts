import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgxMasonryComponent} from 'ngx-masonry';

@Component({
  selector: 'app-bs-list-group',
  templateUrl: './bs-list-group.component.html',
  styleUrls: ['./bs-list-group.component.scss']
})
export class BsListGroupComponent implements OnInit, AfterViewInit {
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
