import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-category',
  templateUrl: './third-category.component.html',
  styleUrls: ['./third-category.component.css']
})
export class ThirdCategoryComponent implements OnInit {

  graphs: number[] = [];
  constructor() { }

  ngOnInit() {
  }
  ShowGraph(id: number) {
    if(this.graphs.indexOf(id)==-1){
      this.graphs.pop();
      this.graphs.push(id);
    }else{
      this.graphs.pop();
    }
   
  }
}
