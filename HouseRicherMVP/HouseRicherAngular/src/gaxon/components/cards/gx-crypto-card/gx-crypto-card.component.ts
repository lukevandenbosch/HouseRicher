import {Component, Input, OnInit} from '@angular/core';

interface CryptoCard {
  amount?: {
    value: string,
    color?: string
  };
  trending?: {
    text?: string,
    icon?: string,
    color?: string
  },
  tagLine?: {
    text: string,
    color?: string
  },
  crypto?: {
    icon: string,
    color?: string
  };
}

@Component({
  selector: 'gx-crypto-card',
  templateUrl: './gx-crypto-card.component.html'
})
export class GxCryptoCardComponent implements OnInit {
  @Input() data: CryptoCard;
  @Input() isVertical = false;

  amountColor = 'text-dark';

  constructor() {
  }

  ngOnInit() {
    if (this.data.amount && this.data.amount.color) {
      this.amountColor = this.data.amount.color;
    }
  }

}
