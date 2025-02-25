import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesByFuelChartComponent } from './vehicles-by-fuel-chart.component';

describe('VehiclesByFuelChartComponent', () => {
  let component: VehiclesByFuelChartComponent;
  let fixture: ComponentFixture<VehiclesByFuelChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesByFuelChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclesByFuelChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
