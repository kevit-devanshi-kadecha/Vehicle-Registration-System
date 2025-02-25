import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalVehiclesWidgetComponent } from './total-vehicles-widget.component';

describe('TotalVehiclesWidgetComponent', () => {
  let component: TotalVehiclesWidgetComponent;
  let fixture: ComponentFixture<TotalVehiclesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalVehiclesWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalVehiclesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
