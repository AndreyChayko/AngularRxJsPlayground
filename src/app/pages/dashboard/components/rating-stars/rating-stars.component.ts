import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingStarsComponent implements OnInit {
  @Input()
  numberOfStars = 5;

  @Output()
  ratingChange = new EventEmitter<number>();

  selectedIndex: number | undefined = undefined;
  stars: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.stars = new Array(this.numberOfStars);
  }

  onStarClick(index: number) {
    this.selectedIndex = index;
    this.ratingChange.emit(this.numberOfStars - index);
  }
}
