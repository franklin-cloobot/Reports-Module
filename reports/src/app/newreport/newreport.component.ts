import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newreport',
  templateUrl: './newreport.component.html',
  styleUrls: ['./newreport.component.scss']
})
export class NewReportComponent {

  constructor(private router:Router) { }
  bchart(){
    this.router.navigate(['/barchart'])
  }
  // lchart(){
  //   this.router.navigate(['/linechart'])
  // }
  // pchart(){
  //   this.router.navigate(['/pie'])
  // }
  ngOnInit(): void {
  }

}
