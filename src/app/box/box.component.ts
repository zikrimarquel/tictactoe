import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  @Input() icon: string;
  @Input() isClicked: boolean;

  onClick() {
    this.isClicked = !this.isClicked;
  }

}
