import {Component} from '@angular/core';

@Component({
  selector: 'ngbd-tabs',
  templateUrl: './tabset.component.html'
})
export class NgbdTabs {
  snippets: string = '';
  navsAlignment: string = 'start';
  navsOrientation: string = 'horizontal';
}
