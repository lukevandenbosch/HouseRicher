import {Component} from '@angular/core';

@Component({
  selector: 'gx-list-footer',
  template: `
    <ng-content></ng-content>`,
  styles: [':host {height: 100%}']
})
export class GxListFooterComponent {

  constructor() {
  }

}
