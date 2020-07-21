import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'gx-project-card',
  templateUrl: './gx-project-card.component.html',
  styleUrls: ['./gx-project-card.component.scss']
})
export class GxProjectCardComponent implements OnInit {
  @Input() cardTitle: string;
  @Input() bodyClasses: string;
  @Input() project: any;
  @Output() onClickAddMember = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * On click add member
   * @param event
   * @param {ElementRef} btnAddMember
   */
  onAddMember(event, btnAddMember: ElementRef): void {
    event.preventDefault();
    this.onClickAddMember.emit(btnAddMember);
  }

}
