import { Component, OnInit } from '@angular/core';
import {RealtorService} from '../realtor.service';

@Component({
  selector: 'app-realtor-list',
  templateUrl: './realtor-list.component.html',
  styleUrls: ['./realtor-list.component.scss']
})
export class RealtorListComponent implements OnInit {
  usersList: any;

  constructor(private gridService: RealtorService) {
    this.usersList = this.gridService.usersList;
  }

  ngOnInit() {
  }

  follow(id: number) {
    for (var i = 0; i < this.usersList.length; i++) {
      if (this.usersList[i].id === id) {
        this.usersList[i].followed = !this.usersList[i].followed
      }
    }
  }

}
