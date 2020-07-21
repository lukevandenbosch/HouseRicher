import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'gx-client-card',
  templateUrl: './gx-client-card.component.html',
  styleUrls: ['./gx-client-card.component.scss']
})
export class GxClientCardComponent implements OnInit {
  @Input() client: any;

  hostClasses = ['card', 'user-bg-card', 'mb-1', 'mb-sm-0'];

  constructor(private eleRef: ElementRef, private sanitizer: DomSanitizer) {
    this.hostClasses.forEach((classname) => {
      this.eleRef.nativeElement.classList.add(classname);
    });
  }

  ngOnInit() {
    this.eleRef.nativeElement.classList.add('bg-primary');

    if(this.client.thumb ) {
      this.eleRef.nativeElement.style.backgroundImage = 'url(' + this.client.thumb + ')';
    } else {
      this.eleRef.nativeElement.classList.add('bg-image');
    }
  }

}
