import { NgModule } from '@angular/core';
import { TodayComponent } from './today/today.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [TodayComponent],
  imports: [DashboardRoutingModule],
})
export class DashboardModule {}
