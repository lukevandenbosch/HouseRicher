import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gx-clients-list',
  templateUrl: './gx-clients-list.component.html',
  styleUrls: ['./gx-clients-list.component.scss']
})
export class GxClientsListComponent implements OnInit {
  @Input() clients: any[];

  constructor() { }

  ngOnInit() {
  }

}
