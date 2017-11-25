import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Layout
import { DefaultLayoutComponent } from './layouts/default/default.component';

// Component
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WeatherComponent } from './widgets/weather/weather.component';

// Services
import { WeatherService } from './services/weather.service';

// Pipes
import { KeyIterablePipe } from './pipes/key_iterable.pipe';
import { WeatherDetailComponent } from './pages/weather-detail/weather-detail.component';

@NgModule({
  declarations: [
    // Layout
    DefaultLayoutComponent,

    // Pages
    AppComponent,
    HomePageComponent,
    WeatherComponent,

    // Pipes
    KeyIterablePipe,

    WeatherDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AppRoutingModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
