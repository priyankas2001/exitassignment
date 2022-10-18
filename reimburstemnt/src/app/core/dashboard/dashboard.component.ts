

import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  show=false;
 
  constructor() { }
 
 
 ngOnInit(): void {
     
   
 }
 showModal(){
  this.show=true;
  console.warn(this.show);
  
 }

}
