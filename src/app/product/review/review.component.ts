import { Component, OnInit } from '@angular/core';
import { Review } from '../review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  reviewForm = new Review();
  constructor() {}

  ngOnInit(): void {}

  review(): void {
    console.log(this.reviewForm);
  }
}
