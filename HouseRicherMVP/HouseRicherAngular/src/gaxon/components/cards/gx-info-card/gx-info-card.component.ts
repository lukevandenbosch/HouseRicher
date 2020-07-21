import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gx-info-card',
  templateUrl: './gx-info-card.component.html',
  styleUrls: ['./gx-info-card.component.scss']
})
export class GxInfoCardComponent implements OnInit{
  @Input() bodyClasses: string;
  @Input() data: any;
  @Input() style: string = 'basic';

  constructor(private eleRef: ElementRef) {
  }

  ngOnInit() {
    if(this.style === 'basic') {
      this.bodyClasses += ' px-5';
    } else if(this.style === 'classic') {
      this.bodyClasses += ' px-5';
    } else if(this.style === 'panel') {
      this.bodyClasses += ' text-center';
    }

    if(this.style === 'panel' || this.style === 'classic') {
      this.eleRef.nativeElement.classList.add('overflow-hidden');
    }
  }
}
