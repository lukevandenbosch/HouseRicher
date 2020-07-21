import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngbd-example-box',
  templateUrl: './example-box.component.html'
})
export class ExampleBoxComponent {
  @Input() demoTitle: string;
  @Input() component: string;
  @Input() demo: string;
  @Input() snippets: Object;

  constructor() {}
}
