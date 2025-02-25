import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentVehiclesWidgetComponent } from './recent-vehicles-widget.component';

describe('RecentVehiclesWidgetComponent', () => {
  let component: RecentVehiclesWidgetComponent;
  let fixture: ComponentFixture<RecentVehiclesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentVehiclesWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentVehiclesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
