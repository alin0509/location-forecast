import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast.component';
import { TodayForecastComponent } from 'src/app/components/today-forecast/today-forecast.component';
import { FutureDayForecastComponent } from 'src/app/components/future-day-forecast/future-day-forecast.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ForecastComponent,
    TodayForecastComponent,
    FutureDayForecastComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class ForecastModule { }
