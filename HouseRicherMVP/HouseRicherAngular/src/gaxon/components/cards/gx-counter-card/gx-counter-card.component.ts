import {Component, ElementRef, Input, OnInit} from '@angular/core';

interface CounterData {
  icon: {
    name: string,
    color?: string
  };
  counter: {
    number: number,
    currency?: string,
    symbol?: string,
    color?: string
  };
  tagLine: {
    text: string,
    color?: string
  };
}

@Component({
  selector: 'gx-counter-card',
  templateUrl: './gx-counter-card.component.html',
  styleUrls: ['./gx-counter-card.component.scss']
})
export class GxCounterCardComponent implements OnInit {
  @Input() data: CounterData;
  @Input() isVertical = false;
  iconSize = '6x';
  classNames = 'mr-6 align-self-center';

  constructor() {
  }

  ngOnInit() {
    if (this.isVertical) {
      this.iconSize = '7x';
      this.classNames = 'mb-6';
    }
  }

}
