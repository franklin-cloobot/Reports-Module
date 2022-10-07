import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { GridsterModule } from 'angular-gridster2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';
import { LayoutItemDirective } from './layout-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ChartComponent,
    TableComponent,
    LayoutItemDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridsterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ChartComponent,
    TableComponent
  ]
})
export class AppModule { }

