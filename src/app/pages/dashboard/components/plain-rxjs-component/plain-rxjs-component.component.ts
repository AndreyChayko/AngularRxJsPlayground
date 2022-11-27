import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { interval, map, Observable, scan, startWith, Subject, tap } from 'rxjs';

@Component({
  selector: 'app-plain-rxjs-component',
  templateUrl: './plain-rxjs-component.component.html',
  styleUrls: ['./plain-rxjs-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlainRxjsComponentComponent implements OnInit {
  click$$ = new Subject<boolean>();
  action$: Observable<number>;
  counter$: Observable<number>;
  counter: number = 0;

  constructor() {
    this.action$ = this.click$$.pipe(
      map((isUp) => (isUp ? 1 : -1)),
      startWith(0),
      scan((acc, value) => acc + value, 0)
    );

    this.counter$ = interval(1000).pipe(
      tap(() => console.log('emission occurred'))
    );
  }

  ngOnInit(): void {}

  up() {
    this.click$$.next(true);
  }

  down() {
    this.click$$.next(false);
  }
}
