import {Component, OnInit} from '@angular/core';
import {ForumService} from './../forum.service';

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.scss']
})
export class ForumListComponent implements OnInit {
  usersList: any;

  constructor(private listService: ForumService) {
    this.usersList = this.listService.usersList;
  }

  ngOnInit() {
  }

}
