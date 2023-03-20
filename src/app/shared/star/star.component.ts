import {
  Component,
  Input,
  OnInit,
  OnChanges,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent implements OnInit, OnChanges {
  startwith = 0;

  @Input() //parent(product) to child(star)
  rating = 3.5;

  @Output()
  ratingClick = new EventEmitter<number>();

  ratingClicked(): void {
    this.ratingClick.emit(this.rating);
  }

  ngOnChanges(): void {
    console.log('onChange', this.rating);
    this.startwith = this.rating * 16;
  }

  ngOnInit(): void {
    console.log('onInit', this.rating);
    // this.startwith=this.rating*16;
  }
}
