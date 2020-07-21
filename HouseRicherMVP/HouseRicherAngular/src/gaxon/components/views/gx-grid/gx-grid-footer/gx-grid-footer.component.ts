import { Component } from '@angular/core';

@Component({
  selector: 'gx-grid-footer',
  template: `<ng-content></ng-content>`,
  styles: [':host{display: block;}']
})
export class GxGridFooterComponent {

  constructor() { }
}
