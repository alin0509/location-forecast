import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureDayForecastComponent } from './future-day-forecast.component';

describe('FutureDayForecastComponent', () => {
  let component: FutureDayForecastComponent;
  let fixture: ComponentFixture<FutureDayForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureDayForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureDayForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
