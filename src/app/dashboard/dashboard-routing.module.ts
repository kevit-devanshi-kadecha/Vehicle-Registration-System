import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { VehicleStatusChartComponent } from './charts/vehicle-status-chart/vehicle-status-chart.component';
import { RecentVehiclesWidgetComponent } from './widgets/recent-vehicles-widget/recent-vehicles-widget.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'charts/vehicle-status', component: VehicleStatusChartComponent },
    { path: 'charts/vehicles-byfuel', component: VehicleStatusChartComponent },
    { path: 'widgets/recent-vehicles', component: RecentVehiclesWidgetComponent },
    { path: 'widgets/total-vehicles', component: RecentVehiclesWidgetComponent }
  ] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
