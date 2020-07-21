import {AfterViewInit, Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'bs-card-footer',
  template: `<ng-content></ng-content>`,
  styles: [':host{display: block;}']
})
export class CardFooterComponent implements OnInit, AfterViewInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.renderer.addClass(this.elRef.nativeElement, 'card-footer');
  }

}
