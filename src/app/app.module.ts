import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Layout
import { DefaultLayoutComponent } from './layouts/default/default.component';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WeatherComponent } from './widgets/weather/weather.component';

@NgModule({
  declarations: [
    // Layout
    DefaultLayoutComponent,

    // Pages
    AppComponent,
    HomePageComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
