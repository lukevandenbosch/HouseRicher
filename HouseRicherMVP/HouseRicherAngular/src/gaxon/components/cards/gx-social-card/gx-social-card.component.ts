import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gx-social-card',
  templateUrl: './gx-social-card.component.html',
  styleUrls: ['./gx-social-card.component.scss']
})
export class GxSocialCardComponent implements OnInit {
  @Input() title: string;
  @Input() color: string;
  @Input() likes: string;
  @Input() friends: string;
  @Input() followers: string;
  @Input() logoIcon: string;

  cardClasses = 'dt-card dt-social-card animate-slide border border-w-2';
  iconColor: string;
  circleColor: string;

  constructor(private viewRef: ElementRef) {
    this.cardClasses.split(' ').forEach((className) => {
      this.viewRef.nativeElement.classList.add(className);
    });
  }

  ngOnInit() {
    if (this.color) {
      this.iconColor = 'text-' + this.color;
      this.circleColor = 'bg-' + this.color;
      this.viewRef.nativeElement.classList.add('border-' + this.color);
    }
  }

}
