import {Component} from '@angular/core';

@Component({
  selector: 'ngbd-collapse-basic',
  templateUrl: './collapse-basic.html'
})
export class NgbdCollapseBasic {
  public isCollapsed = false;
  public multiple = {
    option1: true,
    option2: true
  };

  collapsedWithAnchor(event) {
    event.preventDefault();

    this.multiple.option1 = !this.multiple.option1;
  }

  toggleCollapsed(event) {
    event.preventDefault();

    this.multiple.option1 = !this.multiple.option1;
    this.multiple.option2 = !this.multiple.option2;
  }
}
