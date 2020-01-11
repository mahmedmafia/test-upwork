import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-nav',
  templateUrl: './text-nav.component.html',
  styleUrls: ['./text-nav.component.css']
})
export class TextNavComponent implements OnInit {

  constructor() { }
  text1 = false;
  text2 = false;
  text3 = false;
  text4 = false;
  ngOnInit() {
    this.text1=true;
  }
  handleTab(tab) {
    console.log(this[tab]);
    this.resetState();
    this[tab] = true;
  }
  resetState() {
    this.text1 = false;
    this.text2 = false;
    this.text3 = false;
    this.text4 = false;
  }
}
