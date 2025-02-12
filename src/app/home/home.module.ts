import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FeaturesComponent } from './features/features.component';
import { AuthModule } from 'src/app/auth/auth.module';

@NgModule({
  declarations: [
    HomeComponent,
    FeaturesComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    AuthModule
  ]
})
export class HomeModule { }
