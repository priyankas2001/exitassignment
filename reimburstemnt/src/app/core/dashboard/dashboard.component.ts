import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // body: string = 'Add content'
  testModal: Modal | undefined;
  constructor() { }  
  ngOnInit(): void {
  }
  save(){ 
  this.testModal?.toggle();
  }
  open() {
    var el_testModal = document.getElementById('testModal');
    if (el_testModal ) {
      this.testModal= new Modal(el_testModal , {
        keyboard: false
      });
    }
    this.testModal?.show();
  }
  
}
