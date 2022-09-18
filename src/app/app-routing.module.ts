import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './core/components/main-container/main-container.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MainContainerComponent,
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'rxjs',
    component: MainContainerComponent,
    loadChildren: () =>
      import('./pages/rx-js-ultimate-course/rx-js-ultimate-course.module').then(
        (m) => m.RxJsUltimateCourseModule
      ),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
