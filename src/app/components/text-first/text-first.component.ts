import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-text-first',
  templateUrl: './text-first.component.html',
  styleUrls: ['./text-first.component.css']
})
export class TextFirstComponent implements OnInit {
  faHeart = faHeart;
  faCoffee = faCoffee;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
  liked(r: ElementRef, event:any) {
    const hasClass = event.target.classList.contains('like');

    if (hasClass) {
      this.renderer.removeClass(event.target, 'like');
    } else {
      this.renderer.addClass(event.target, 'like');
    }
    // this.renderer.setStyle(event.target,'color','red');

  }

}
