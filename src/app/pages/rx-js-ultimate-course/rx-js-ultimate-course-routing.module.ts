import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxJsBasicsComponent } from './rx-js-basics/rx-js-basics.component';
import { RxJsMasterComponent } from './rx-js-master/rx-js-master.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basics',
    pathMatch: 'full',
  },
  {
    path: 'basics',
    component: RxJsBasicsComponent,
  },
  {
    path: 'master',
    component: RxJsMasterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxJsUltimateCourseRoutingModule {}
