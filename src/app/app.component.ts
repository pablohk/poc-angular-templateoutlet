import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  value = 4;
  value2 = 3;

  handleClick() {
    this.value = Math.round(Math.random() * 100);
  }

  handleClick2() {
    this.value2 = Math.round(Math.random() * 100);
  }
}
