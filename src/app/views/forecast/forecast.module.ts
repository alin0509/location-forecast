import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FutureDayForecastComponent, TodayForecastComponent } from '../../components';
import { ForecastComponent } from './forecast.component';

@NgModule({
  declarations: [
    ForecastComponent,
    FutureDayForecastComponent,
    TodayForecastComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class ForecastModule { }
