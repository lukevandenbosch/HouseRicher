import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gx-invoices',
  templateUrl: './gx-invoices.component.html',
  styleUrls: ['./gx-invoices.component.scss']
})
export class GxInvoicesComponent implements OnInit {
  @Input() invoices: any[];

  constructor() { }

  ngOnInit() {
  }

}
