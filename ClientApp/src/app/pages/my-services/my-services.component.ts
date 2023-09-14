import { Component } from '@angular/core';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent {
  webDevDiv: boolean = false;
  standProgDiv: boolean = false;
  dbAdminDiv: boolean = false;
  resHostDiv: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  ShowWebDev() {
    this.webDevDiv = true;
    this.standProgDiv = false;
    this.dbAdminDiv = false;
    this.resHostDiv = false;
  }
  ShowStandProg() {
    this.webDevDiv = false;
    this.standProgDiv = true;
    this.dbAdminDiv = false;
    this.resHostDiv = false;
  }
  ShowDbAdmin() {
    this.webDevDiv = false;
    this.standProgDiv = false;
    this.dbAdminDiv = true;
    this.resHostDiv = false;
  }
  ShowResHost() {
    this.webDevDiv = false;
    this.standProgDiv = false;
    this.dbAdminDiv = false;
    this.resHostDiv = true;
  }
}
