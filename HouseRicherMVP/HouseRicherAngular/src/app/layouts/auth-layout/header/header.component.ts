import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'auth-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('class') headerClasses = 'dt-login__bg-section';
  @HostBinding('style') style = "background-image: none;"
  @Input() title: string;
  @Input() desc: string;
  @Input() step: string;

  constructor() { }

  ngOnInit() {
  }

}
