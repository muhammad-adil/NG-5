import { Component } from '@angular/core';
import { SliderService } from './slider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Slider [Service]';


constructor(public _sliderService: SliderService) {

}

}
