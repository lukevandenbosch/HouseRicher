import {Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'gx-newsletter-card',
  templateUrl: './gx-newsletter-card.component.html',
  styleUrls: ['./gx-newsletter-card.component.scss']
})
export class GxNewsletterCardComponent {
  @Input() bodyClasses: string;
  @Input() newsletter: any;
  @Output() onSubmitted = new EventEmitter<any>();

  inputEmail: string;

  constructor() {
  }

  /**
   * On click add memeber
   * @param event
   * @param {ElementRef} btnAddMember
   */
  onSubmit(form: NgForm): void {
    this.onSubmitted.emit(form);
  }

}
