import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {CardHeadingComponent} from './card-heading/card-heading.component';
import {CardToolComponent} from './card-tool/card-tool.component';

@Component({
  selector: 'gx-card',
  templateUrl: './gx-card.component.html',
  styleUrls: ['./gx-card.component.scss']
})
export class GxCardComponent implements OnInit {
  @ContentChild(CardHeadingComponent) cardHeading;
  @ContentChild(CardToolComponent) cardTool;

  @Input('card-title') cardTitle: any = '';
  @Input('card-subtitle') cardSubTitle: any = '';
  @Input('body-class') bodyClasses: string = '';
  @Input('header-class') headerClasses: string = '';

  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.classList.add('dt-card');
  }

  @Input()
  set fullHeight(isFullHeight: boolean) {

    if (isFullHeight !== false) {
      this.elRef.nativeElement.classList.add('dt-card__full-height');
    }
  }

  ngOnInit() {
  }

}
