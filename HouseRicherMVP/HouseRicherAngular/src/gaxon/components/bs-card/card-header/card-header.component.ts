import {AfterViewInit, Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'bs-card-header',
  template: `<ng-content></ng-content>`,
  styles: [':host{display: block;}']
})
export class CardHeaderComponent implements OnInit, AfterViewInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.renderer.addClass(this.elRef.nativeElement, 'card-header');
  }

}
