import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'card-header',
  templateUrl: './card-header.component.html'
})
export class CardHeaderComponent implements OnInit {
  @Input('card-title') cardTitle: any = '';
  @Input('card-subtitle') cardSubTitle: any = '';

  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.classList.add('dt-card__header');
  }

  ngOnInit() {
  }

}
