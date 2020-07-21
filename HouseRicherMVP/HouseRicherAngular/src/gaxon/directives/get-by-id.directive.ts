import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[getbyid]',
  exportAs: 'item'
})
export class GetByIdDirective {
  data: any;
  @Input() items: any[];

  @Input()
  set getbyid(id: any) {
    this.data = this.items.find(item => {
      return id && item.id === id;
    });
  }

}
