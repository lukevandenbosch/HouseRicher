import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @HostBinding('class') classNames = 'dt-footer';
  currentYear: number;

  constructor() {
    const today = new Date();
    this.currentYear = today.getFullYear();
  }

  ngOnInit() {
  }

}
