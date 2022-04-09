import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastService } from 'src/app/services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  getForecast$: Observable<any> = this.forecastService.getForecast();

  constructor(private forecastService: ForecastService) { }
  ngOnInit(): void {
  }


}
