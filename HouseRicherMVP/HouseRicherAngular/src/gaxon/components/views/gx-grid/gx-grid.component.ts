import {
  Component, ContentChild, ElementRef, Input
} from '@angular/core';
import {GxGridHeaderComponent} from './gx-grid-header/gx-grid-header.component';
import {GxGridFooterComponent} from './gx-grid-footer/gx-grid-footer.component';

@Component({
  selector: 'gx-grid',
  templateUrl: './gx-grid.component.html',
  styles: ['./gx-grid.component.scss']
})
export class GxGridComponent {
  @ContentChild(GxGridHeaderComponent) gridHeader;
  @ContentChild(GxGridFooterComponent) gridFooter;

  @Input('body-class') body_classlist = '';

  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.classList.add('card');
  }
}
