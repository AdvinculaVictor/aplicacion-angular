import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { MsalGuard } from '@azure/msal-angular';

import {
  ConsumirApiADComponent,
} from './components/consumir-api-ad/consumir-api-ad.component';
import {
  ConsumirApiComponent,
} from './components/consumir-api/consumir-api.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [MsalGuard]},
  { path: 'home', component: HomeComponent},
  { path: 'consumirApi', component: ConsumirApiComponent},
  { path: 'comsumirApiAd', component: ConsumirApiADComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      initialNavigation:'enabledNonBlocking'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
