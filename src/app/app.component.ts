import { Component, ViewChild } from '@angular/core';
import { ButtonComponent } from './components/button/button.components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ButtonComponent)
  viewChild: ButtonComponent = new ButtonComponent;
  title = "app"
  counter: number = 0
  randomNumber: number = Math.floor(Math.random()*100)

  constructor() {}

  counterUp = () => {
    this.counter++
  }

  setRandomNumber = () => {
    this.randomNumber = Math.floor(Math.random()*100)
  }
}
