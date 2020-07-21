import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {GxListHeaderComponent} from './gx-list-header/gx-list-header.component';
import {GxListFooterComponent} from './gx-list-footer/gx-list-footer.component';
import {GxSliderComponent} from './../../widgets/gx-slider/gx-slider.component';

@Component({
  selector: 'gx-list',
  templateUrl: './gx-list.component.html',
  styles: ['./gx-list.component.scss']
})
export class GxListComponent implements OnInit {
  @ContentChild(GxListHeaderComponent) listHeader;
  @ContentChild(GxListFooterComponent) listFooter;
  @ContentChild(GxSliderComponent) slider;

  @Input() classNames = '';
  @Input() bodyClass = '';
  @Input() footerClass = '';

  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.classList.add('card');
  }

  ngOnInit() {
  }
}
