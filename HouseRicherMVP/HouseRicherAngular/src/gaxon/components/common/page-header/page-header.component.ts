import {Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {

  @Input('pageTitle') pageTitle: any = '';

  constructor(private eleRef: ElementRef) {
    this.eleRef.nativeElement.classList.add('dt-page__header');
  }

}
