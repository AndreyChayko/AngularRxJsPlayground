import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxJsUltimateCourseRoutingModule } from './rx-js-ultimate-course-routing.module';
import { RxJsBasicsComponent } from './rx-js-basics/rx-js-basics.component';
import { RxJsMasterComponent } from './rx-js-master/rx-js-master.component';


@NgModule({
  declarations: [
    RxJsBasicsComponent,
    RxJsMasterComponent
  ],
  imports: [
    CommonModule,
    RxJsUltimateCourseRoutingModule
  ]
})
export class RxJsUltimateCourseModule { }
