import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgxMasonryComponent} from 'ngx-masonry';

@Component({
  selector: 'app-bs-card',
  templateUrl: './bs-card.component.html',
  styleUrls: ['./bs-card.component.scss']
})
export class BsCardComponent implements OnInit, AfterViewInit {
  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;
  cardTab = 1;
  cardPillsTab = 1;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.masonry.reloadItems();
      this.masonry.layout();
    }, 1000);
  }

  onClickTab(event, tab) {
    event.preventDefault();

    this.cardTab = tab;
  }

  onClickPillosTab(event, tab) {
    event.preventDefault();

    this.cardPillsTab = tab;
  }

}
