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
  selector: 'gx-intro-card',
  templateUrl: './gx-intro-card.component.html',
  styleUrls: ['./gx-intro-card.component.scss']
})
export class GxIntroCardComponent implements OnInit {
  @Input() titlePos: string = 'top';
  @Input() data: Intro;

  constructor(private eleRef: ElementRef) {
    this.eleRef.nativeElement.classList.add('dt-intro-card');
  }

  ngOnInit() {
  }

}
