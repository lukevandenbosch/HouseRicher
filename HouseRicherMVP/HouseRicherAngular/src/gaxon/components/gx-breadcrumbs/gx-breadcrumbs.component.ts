import {Component, Input} from '@angular/core';

interface BreadcrumbItem {
  label: string;
  route?: string;
  active?: boolean;
}

@Component({
  selector: 'gx-breadcrumbs',
  templateUrl: './gx-breadcrumbs.component.html',
  styles: [':host{display: block;}']
})
export class GxBreadcrumbsComponent {
  @Input() displayAs: string = 'list';
  @Input() data: Array<BreadcrumbItem> = [];

  constructor() { }
}
