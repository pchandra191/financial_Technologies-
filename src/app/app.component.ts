import { Component } from '@angular/core';
// import { HeaderComponent} from './components/header.component'
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'finance';
  myValue: number;
  Teures: String[];
  color: ThemePalette = 'primary';
  mySliderValue: number;

  constructor() {
    this.myValue = 0;
    this.Teures = ['3 Months', '6 Months', '12 Months', '24 Months'];
    this.mySliderValue = 0;
  }

  // Slider1 Values-->
  changeMyValue(value: number) {
    this.myValue = value;
  }

  // Slider1 Values-->
  changeMyValue2(value: number) {
    this.mySliderValue = value;
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }
}
