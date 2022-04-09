import { Component, Input } from '@angular/core';
import { ForecastData } from '../../interfaces/forecast.interface';

@Component({
  selector: 'app-future-day-forecast',
  templateUrl: './future-day-forecast.component.html',
  styleUrls: ['./future-day-forecast.component.scss']
})
export class FutureDayForecastComponent   {
  @Input() data?: ForecastData;  

}
