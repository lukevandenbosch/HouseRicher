import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'card-heading',
  template: `<ng-content></ng-content>`,
  styles: [':host{display: block;}']
})
export class CardHeadingComponent implements OnInit {

  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.classList.add('dt-card__heading');
  }

  ngOnInit() {
  }

}
