import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gx-ratings',
  templateUrl: './gx-ratings.component.html',
  styleUrls: ['./gx-ratings.component.scss']
})
export class GxRatingsComponent implements OnInit {
  @Input() reviews: any[];

  constructor() {
  }

  ngOnInit() {
  }

  getPercentageWidth(review) {
    const pctValue = (review.avgRating / review.masRating) * 100;
    return pctValue + '%';
  }

}
