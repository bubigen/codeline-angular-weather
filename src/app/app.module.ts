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
import { WeatherSearchComponent } from './widgets/weather-search/weather-search.component';
import { WeatherDetailComponent } from './pages/weather-detail/weather-detail.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';

// Services
import { WeatherService } from './services/weather.service';

// Pipes
import { KeyIterablePipe } from './pipes/key_iterable.pipe';

@NgModule({
  declarations: [
    // Layout
    DefaultLayoutComponent,

    // Pages
    AppComponent,
    HomePageComponent,
    WeatherComponent,
    WeatherDetailComponent,
    WeatherSearchComponent,
    SearchResultsComponent,

    // Pipes
    KeyIterablePipe,
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
