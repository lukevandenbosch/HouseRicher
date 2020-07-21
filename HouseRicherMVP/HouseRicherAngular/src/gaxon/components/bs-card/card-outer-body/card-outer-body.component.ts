import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'bs-card-outer-body',
  template: `
    <ng-content></ng-content>
  `,
  styles: [':host{display: block;}']
})
export class CardOuterBodyComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
