import { Component, OnInit } from '@angular/core';
import { FakeGeneratorService } from '../../../shared/services/fake-generator.service';
import {
  animationFrameScheduler,
  fromEvent,
  map,
  Observable,
  observeOn,
} from 'rxjs';
import { calculateScrollPercent } from './helpers';

@Component({
  selector: 'app-rx-js-basics',
  templateUrl: './rx-js-basics.component.html',
  styleUrls: ['./rx-js-basics.component.scss'],
})
export class RxJsBasicsComponent implements OnInit {
  text;
  scrollEvent$: Observable<Event>;
  progress$: Observable<number>;

  constructor(private fakeGenerator: FakeGeneratorService) {
    this.text = fakeGenerator.generateBigText();
    this.scrollEvent$ = fromEvent(document, 'scroll').pipe(
      observeOn(animationFrameScheduler)
    );
    this.progress$ = this.scrollEvent$.pipe(
      map(({ target }) =>
        calculateScrollPercent((<Document>target).documentElement)
      )
    );
  }

  ngOnInit(): void {}
}
