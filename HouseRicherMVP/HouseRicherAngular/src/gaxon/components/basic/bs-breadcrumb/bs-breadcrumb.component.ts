import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-breadcrumb',
  templateUrl: './bs-breadcrumb.component.html',
  styleUrls: ['./bs-breadcrumb.component.scss']
})
export class BsBreadcrumbComponent implements OnInit {
  breadcrumb = [{label: 'Home', active: true}];
  breadcrumb2 = [{label: 'Home'}, {label: 'Library', active: true}];
  breadcrumb3 = [{label: 'Home'}, {label: 'Library'}, {label: 'Data', active: true}];
  breadcrumb4 = [{label: 'Home'}, {label: 'Library'}, {label: 'Data'}, {label: 'Bootstrap', active: true}];

  constructor() { }

  ngOnInit() {
  }

}
