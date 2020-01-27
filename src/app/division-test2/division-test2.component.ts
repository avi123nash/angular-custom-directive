import { Component, OnInit } from '@angular/core';

import { Division2TestService } from '../division2-test.service';

@Component({
  selector: 'app-division-test2',
  templateUrl: './division-test2.component.html',
  styleUrls: ['./division-test2.component.sass']
})
export class DivisionTest2Component implements OnInit {
  techName: string;
  latestVersion: string;
  MostUsingIn: string;
  totalRecords = [];
  constructor(private divisionService: Division2TestService) { }

  ngOnInit() {
    this.divisionService.getTechnologyList().subscribe((response) => {
      for (const key in response) {
        this.totalRecords[key] = response[key];
      }
    });
  }

  saveTechnologyInfo(){
    console.log(this.totalRecords);
    const data = {
      techName: this.techName,
      latestVersion: this.latestVersion,
      MostUsingIn: this.MostUsingIn
    };
    this.totalRecords.push(data);
    this.divisionService.pushNewTechnology(this.totalRecords).subscribe((response) => {
      
    });
  }

}
