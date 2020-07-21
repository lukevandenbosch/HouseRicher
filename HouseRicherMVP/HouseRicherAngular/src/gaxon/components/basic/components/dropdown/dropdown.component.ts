import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgxMasonryComponent} from 'ngx-masonry';

@Component({
  selector: 'ngbd-dropdown',
  templateUrl: './dropdown.component.html'
})

export class NgbdDropdown implements OnInit, AfterViewInit {
  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;
  snippets = '';

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.masonry.reloadItems();
    this.masonry.layout();
  }

}
