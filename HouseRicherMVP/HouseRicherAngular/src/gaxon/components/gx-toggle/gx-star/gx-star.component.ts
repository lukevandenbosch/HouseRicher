import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

let nextUniqueId = 0;

@Component({
  selector: 'gx-star',
  templateUrl: './gx-star.component.html',
  styleUrls: ['./gx-star.component.scss']
})
export class GxStarComponent implements OnInit {
  @Input() gxModel: boolean;
  @Output() gxInputChange = new EventEmitter<boolean>();
  uniqueId = 'gx-star-' + ++nextUniqueId;
  defaultHostClasses = 'dt-checkbox dt-checkbox-icon dt-checkbox-only';

  constructor(private eleRef: ElementRef) {
    this.defaultHostClasses.split(' ').forEach(className => {
      this.eleRef.nativeElement.classList.add(className);
    });
  }

  ngOnInit() {
  }

  /**
   * Stop Event propagation on click host
   * @param event
   */
  @HostListener('click', ['$event'])
  onHostCLick(event) {
    event.stopPropagation();
  }

  /**
   * On toggle change
   */
  onInputChange() {
    this.gxInputChange.emit(this.gxModel);
  }

}
