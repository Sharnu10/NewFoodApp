import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'about',
    //  component: AboutComponent
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'dashboard',
    // loadChildren: () =>
    //   import('./dashboard/dashboard-routing.module').then(
    //     (m) => m.DashboardRoutingModule
    //   ),
    loadChildren: () =>
      import('./dashboard/routes').then((m) => m.Dashboard_Routes),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
