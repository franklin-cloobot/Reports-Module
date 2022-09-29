import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Chart } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewReportComponent } from './newreport/newreport.component';
import { BarChartComponent } from './barchart/barchart.component';
import { ReportComponent } from './report/report.component';
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewReportComponent,
    BarChartComponent,
    NgChartsModule,
    ReportComponent,
    ChartComponent,
    TableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
