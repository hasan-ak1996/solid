import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatisticsComponent } from './Single responsibility principle/before/statistics/statistics.component';
import { ReportComponent } from './Single responsibility principle/after/report/report.component';
import { ButtonComponent } from './Open-Closed-Principle/before/button/button.component';
import { ButtonAfterComponent } from './Open-Closed-Principle/after/button-after/button-after.component';
import { PrintService } from './Dependency-Inversion/after/print.service';
import { SalesReportComponent } from './Dependency-Inversion/after/slaes-report/sales-report.component';

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    ReportComponent,
    ButtonComponent,
    ButtonAfterComponent,
    SalesReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: 'PrintReport' , useClass: PrintService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
