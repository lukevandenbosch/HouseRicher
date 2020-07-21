import {Component} from '@angular/core';

@Component({
  selector: 'gx-grid-header',
  template: `<ng-content></ng-content>`,
  styles: [':host{display: block;}']
})
export class GxGridHeaderComponent {

  constructor() {
  }

}
