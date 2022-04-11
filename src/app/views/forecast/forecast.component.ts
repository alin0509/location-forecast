import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastService } from '../../services';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {
  getForecast$: Observable<any> = this.forecastService.getForecast();

  constructor(private forecastService: ForecastService) { } 
}
