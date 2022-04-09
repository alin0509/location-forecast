import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ForecastService {
  resultMap: any

  constructor(private http: HttpClient) { }

  getForecast(): Observable<any> {
    return this.http.get('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=51.5&lon=0').pipe(
      map((res: any) => res?.properties?.timeseries),
      // tap(res => console.log(res)),
      map((res: any) => (
        res.map((r: any) => ({
          time: r?.time,
          air_temperature: r?.data?.instant?.details.air_temperature,
          wind_speed: r?.data?.instant?.details.wind_speed,
          symbol_code_url: `assets/svg/${r?.data?.next_12_hours?.summary?.symbol_code}.svg`,
          symbol_code: r?.data?.next_12_hours?.summary?.symbol_code,
        }))
      )),
      tap(res => console.log(res)),

      map((res: any[]) => {
        this.resultMap = {};
        res.forEach(day => this.resultMap[day.time] = day);
        // console.log(this.resultMap);
        return {
          now: res[0],
          next_7_days: this.getNextSevenDays().map(day => this.getDayForecast(day))
        }
      }),
      tap(res => {
        console.log(res)
      })
    );
  }

  private getNextSevenDays(): string[] {
    let today = new Date()
    today.setHours(11, 0, 0,);
    let next7daysNoon: string[] = []
    for (let i = 1; i < 8; i++) {
      next7daysNoon.push(new Date(today.setDate(today.getDate() + 1)).toISOString().slice(0, 10) + "T00:00:00Z");
    }
    return next7daysNoon;
  }

  private getDayForecast(day: string) {
    return this.resultMap[day]
  }
}

