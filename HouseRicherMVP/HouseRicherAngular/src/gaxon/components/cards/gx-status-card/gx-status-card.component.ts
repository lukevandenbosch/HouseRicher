import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gx-status-card',
  templateUrl: './gx-status-card.component.html',
  styleUrls: ['./gx-status-card.component.scss']
})
export class GxStatusCardComponent implements OnInit {
  @Input() badge: { name: string, color?: string };
  @Input() items: any[];
  @Input() icon: { name: string, color?: string };

  constructor(private viewRef: ElementRef) {
    this.viewRef.nativeElement.classList.add('dt-card');
  }

  ngOnInit() {
  }

}
