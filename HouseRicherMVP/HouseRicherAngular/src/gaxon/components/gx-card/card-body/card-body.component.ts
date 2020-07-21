import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'card-body',
  template: `<ng-content></ng-content>`,
  styles: [':host{display: block;}']
})
export class CardBodyComponent implements OnInit {

  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.classList.add('dt-card__body');
  }

  ngOnInit() {
  }

}
