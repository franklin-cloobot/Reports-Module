import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewreportComponent } from './newreport/newreport.component';
import { BarchartComponent } from './barchart/barchart.component';
import { PiecharyComponent } from './piechary/piechary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewreportComponent,
    BarchartComponent,
    PiecharyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
