import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'auth-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('class') headerClasses = 'dt-login__bg-section';
  @Input() title: string;
  @Input() desc: string;

  constructor() { }

  ngOnInit() {
  }

}
