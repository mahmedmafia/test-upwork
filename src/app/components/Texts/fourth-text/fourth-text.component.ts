import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-text',
  templateUrl: './fourth-text.component.html',
  styleUrls: ['./fourth-text.component.css']
})
export class FourthTextComponent implements OnInit {

  constructor() { }
  questions = [];
  ngOnInit() {
  }
  showQuestions(id) {
    if (this.questions.indexOf(id) == -1) {
      this.questions.pop();
      this.questions.push(id);
    } else {
      this.questions.pop();
    }
  }

}
