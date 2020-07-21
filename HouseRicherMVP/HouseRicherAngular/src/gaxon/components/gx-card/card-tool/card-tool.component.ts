import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'card-tool',
  template: `<ng-content></ng-content>`,
  styles: [':host{display: block;}']
})
export class CardToolComponent implements OnInit {

  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.classList.add('dt-card__tools');
  }

  ngOnInit() {
  }

}
