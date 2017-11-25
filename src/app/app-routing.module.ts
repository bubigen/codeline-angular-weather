import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';

import { DefaultLayoutComponent }       from './layouts/default/default.component';
import { HomePageComponent }            from './pages/home-page/home-page.component';
import { WeatherDetailComponent }       from './pages/weather-detail/weather-detail.component';

const defaultRoutes: Routes = [
  { path: '', component: HomePageComponent, },
  {
    path: 'weather/:woeid',
    component: WeatherDetailComponent,
  },
];

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: defaultRoutes
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: defaultRoutes,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: DefaultLayoutComponent,
    children: defaultRoutes
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true, enableTracing: true  }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}