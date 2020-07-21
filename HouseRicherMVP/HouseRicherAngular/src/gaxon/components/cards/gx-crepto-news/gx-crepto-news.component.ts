import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gx-crepto-news',
  templateUrl: './gx-crepto-news.component.html',
  styleUrls: ['./gx-crepto-news.component.scss']
})
export class GxCreptoNewsComponent implements OnInit {
  @Input() title: string;
  @Input() maxVisibleItems = 3;
  @Input() categories: any[];

  visibleItems: any[];
  private _news: any[];
  activeCategory: any;

  @Input() set news(list: any[]) {
    this._news = list;
    this.visibleItems = this._news;
  }

  constructor() {
  }

  ngOnInit() {
  }

  onChangeCategory(category?) {
    if(category) {
      this.activeCategory = category;
      this.visibleItems = this._news.filter((item) => {
        return item.category === this.activeCategory;
      });
    } else {
      this.activeCategory = null;
      this.visibleItems = this._news;
    }
  }

}
