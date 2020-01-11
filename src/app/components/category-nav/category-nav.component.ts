import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.css']
})
export class CategoryNavComponent implements OnInit {
  first = false;
  second = false;
  third = false;
  constructor() { }

  ngOnInit() {
    this.third = true;
  }
  handleTab(tab) {
    console.log(this[tab]);
    this.resetState();
    this[tab]=true;
  }
  resetState() {
    this.first = false;
    this.second = false;
    this.third = false;
  }
}
