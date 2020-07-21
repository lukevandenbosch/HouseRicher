import {Component, ElementRef, Input, OnInit} from '@angular/core';

interface Intro {
  title: string;
  subtitle?: string;
  content?: string;
  badge?: string;
  media: string;
  route?: string;
}

@Component({
  selector: 'gx-flex-card',
  templateUrl: './gx-flex-card.component.html'
})
export class GxFlexCardComponent implements OnInit {
  @Input() data: Intro;
  @Input() titlePos: string;

  constructor(private eleRef: ElementRef) {
    this.eleRef.nativeElement.classList.add('flex-row');
  }

  ngOnInit() {
  }

}
