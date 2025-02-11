import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthRoutingModule } from './auth/auth-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
