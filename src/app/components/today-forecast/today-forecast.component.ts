import { Component, Input } from '@angular/core';
import { ForecastData } from '../../interfaces';

@Component({
  selector: 'app-today-forecast',
  templateUrl: './today-forecast.component.html',
  styleUrls: ['./today-forecast.component.scss']
})
export class TodayForecastComponent {
  @Input() data?: ForecastData;

}
