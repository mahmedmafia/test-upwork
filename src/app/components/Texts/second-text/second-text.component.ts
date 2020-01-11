import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-text',
  templateUrl: './second-text.component.html',
  styleUrls: ['./second-text.component.css']
})
export class SecondTextComponent implements OnInit {

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
