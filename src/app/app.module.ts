import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodayComponent } from './dashboard/today/today.component';
@NgModule({
  // declarations: [AppComponent],
  // imports: [BrowserModule, SharedModule, WelcomeComponent],
  providers: [],
  declarations: [
    AboutComponent,
    DashboardComponent,
    TodayComponent
  ],
  // bootstrap: [AppComponent],
})
export class AppModule {}
