import {Component, HostBinding, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../../_services/authentication.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  @HostBinding('class') classNames = 'dt-topbar';
  public currentUser: any;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {

    this.currentUser = this.authService.currentUserValue
  }  
}
