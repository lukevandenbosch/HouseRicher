import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-entry-header',
  templateUrl: './entry-header.component.html',
  styleUrls: ['./entry-header.component.scss']
})
export class EntryHeaderComponent {
  @Input('heading') heading: any = '';
  @ViewChild('headingHtml') headingHtml: any = '';

  constructor(private eleRef: ElementRef) {
    this.eleRef.nativeElement.classList.add('dt-entry__header');
  }

}
