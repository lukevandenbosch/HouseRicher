import {Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'gx-icon',
  template: `
    <ng-content></ng-content>`
})
export class GxIconComponent {
  private _previewsName: string;
  private _previewsSize: string;

  @Input()
  set name(name: string) {
    if (this._previewsName) {
      this.elRef.nativeElement.classList.remove('icon-' + this._previewsName);
    }

    this._previewsName = name;
    this.elRef.nativeElement.classList.add('icon-' + this._previewsName);
  }

  @Input()
  set size(size: string) {
    if (this._previewsSize) {
      this.elRef.nativeElement.classList.remove('icon-' + this._previewsSize);
    }

    this._previewsSize = size;
    this.elRef.nativeElement.classList.add('icon-' + this._previewsSize);
  }

  @Input()
  set fw(input: boolean | string) {
    if (input === true || input === 'true') {
      this.elRef.nativeElement.classList.add('icon-fw');
    } else {
      this.elRef.nativeElement.classList.remove('icon-fw');
    }
  }

  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.classList.add('icon');
  }

}
