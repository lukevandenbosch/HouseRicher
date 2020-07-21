import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gx-currency-calculator',
  templateUrl: './gx-currency-calculator.component.html',
  styleUrls: ['./gx-currency-calculator.component.scss']
})
export class GxCurrencyCalculatorComponent implements OnInit {
  @Input() cardTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
