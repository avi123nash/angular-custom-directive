import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-division1',
  templateUrl: './division1.component.html',
  styleUrls: ['./division1.component.sass']
})
export class Division1Component implements OnInit {

  bgColor: string;
  txtColor: string;
  fontSize: number;

  constructor() { }

  ngOnInit() {
  }

  setBackColor(event) {
    this.bgColor= event.target.value;
  }

  settextColor(event) {
    this.txtColor= event.target.value;
  }

  setfontSize(event) {
    this.fontSize= event.target.value;
  }

}
