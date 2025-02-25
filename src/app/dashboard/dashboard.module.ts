import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VehiclesByFuelChartComponent } from './charts/vehicles-by-fuel-chart/vehicles-by-fuel-chart.component';
import { VehicleStatusChartComponent } from './charts/vehicle-status-chart/vehicle-status-chart.component';
import { TotalVehiclesWidgetComponent } from './widgets/total-vehicles-widget/total-vehicles-widget.component';
import { RecentVehiclesWidgetComponent } from './widgets/recent-vehicles-widget/recent-vehicles-widget.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    VehiclesByFuelChartComponent,
    VehicleStatusChartComponent,
    TotalVehiclesWidgetComponent,
    RecentVehiclesWidgetComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class DashboardModule { }
