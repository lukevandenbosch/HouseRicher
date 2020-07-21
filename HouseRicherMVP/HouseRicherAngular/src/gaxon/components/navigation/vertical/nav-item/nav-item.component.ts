import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-vertical-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavVerticalItemComponent implements OnInit {
  @HostBinding('class') classes = 'dt-side-nav__item';
  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
