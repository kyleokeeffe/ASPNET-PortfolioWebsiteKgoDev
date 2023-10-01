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
    if (this.webDevDiv == true)
      this.webDevDiv = false;
    else if (this.webDevDiv == false)
      this.webDevDiv = true;
    this.standProgDiv = false;
    this.dbAdminDiv = false;
    this.resHostDiv = false;
  }
  ShowStandProg() {
    if (this.standProgDiv == true)
      this.standProgDiv = false;
    else if (this.standProgDiv == false)
      this.standProgDiv = true;
    this.webDevDiv = false;
    this.dbAdminDiv = false;
    this.resHostDiv = false;
  }
  ShowDbAdmin() {
    if (this.dbAdminDiv == true)
      this.dbAdminDiv = false;
    else if (this.dbAdminDiv == false)
      this.dbAdminDiv = true;
    this.webDevDiv = false;
    this.standProgDiv = false;
    this.resHostDiv = false;
  }
  ShowResHost() {
    if (this.resHostDiv == true)
      this.resHostDiv = false;
    else if (this.resHostDiv == false)
      this.resHostDiv = true;
    this.webDevDiv = false;
    this.standProgDiv = false;
    this.dbAdminDiv = false;
  }
}
