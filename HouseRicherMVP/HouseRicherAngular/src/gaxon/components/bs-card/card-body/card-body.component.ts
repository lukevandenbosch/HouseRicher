import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'bs-card-body',
  template: `
    <ng-container>
      <h3 *ngIf="cardTitle" class="card-title" [innerHTML]="cardTitle"></h3>
      <h5 *ngIf="cardSubTitle" class="card-subtitle mb-2 text-muted" [innerHTML]="cardSubTitle"></h5>
      <p *ngIf="cardText" class="card-text" [innerHTML]="cardText"></p>
      <ng-content></ng-content>
    </ng-container>
  `,
  styles: [':host{display: block;}']
})
export class CardBodyComponent implements OnInit, AfterViewInit {
  @Input('card-title') cardTitle: any = '';
  @Input('card-subtitle') cardSubTitle: any = '';
  @Input('card-text') cardText: any = '';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.renderer.addClass(this.elRef.nativeElement, 'card-body');
  }

}
