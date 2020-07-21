import {Component, Input} from '@angular/core';

@Component({
  selector: 'gx-top-vendors',
  templateUrl: './gx-top-vendors.component.html',
  styleUrls: ['./gx-top-vendors.component.scss']
})
export class GxTopVendorsComponent {
  categories = [
    {name: 'Premium', slug: 'premium'},
    {name: 'Full', slug: 'full'}
  ];
  currentCat: any;
  visibleItems: any[];
  private _data: any[];

  constructor() {

  }

  @Input()
  set vendors(vendors: any[]) {
    this._data = vendors;
    this.onChangeCategory('premium');
  }

  onChangeCategory(category?) {
    if (category) {
      this.currentCat = category;
      this.visibleItems = this._data.filter((item) => {
        return item.category === this.currentCat;
      });
    } else {
      this.currentCat = null;
      this.visibleItems = this._data;
    }
  }

}
