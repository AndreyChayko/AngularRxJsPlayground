import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlainRxjsComponentComponent } from './components/plain-rxjs-component/plain-rxjs-component.component';

const routes: Routes = [
  {
    path: '',
    component: PlainRxjsComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
