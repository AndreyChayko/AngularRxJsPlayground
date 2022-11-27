import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PlainRxjsComponentComponent } from './components/plain-rxjs-component/plain-rxjs-component.component';
import { PlainNgrxLetComponentComponent } from './components/plain-ngrx-let-component/plain-ngrx-let-component.component';
import { LetModule } from '@ngrx/component';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component';

@NgModule({
  declarations: [
    PlainRxjsComponentComponent,
    PlainNgrxLetComponentComponent,
    RatingStarsComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, LetModule],
})
export class DashboardModule {}
