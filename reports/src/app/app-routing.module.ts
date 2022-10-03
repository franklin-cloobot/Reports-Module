import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewReportComponent } from './newreport/newreport.component';
import { BarChartComponent } from './barchart/barchart.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'newrpt', component: NewReportComponent},
  {path: 'barchart', component: BarChartComponent},
  // {path: 'linechart', component: LinechartComponent},
  // {path: 'pie', component: PieComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
