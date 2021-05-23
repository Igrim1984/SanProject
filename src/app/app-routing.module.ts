import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './components/home/home.component'
import { WcagComponent} from './components/wcag/wcag.component'
import { InfoComponent } from './components/info/info.component'
import { ContactComponent } from './components/contact/contact.component'
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { SeatReservationComponent } from './components/seat-reservation/seat-reservation.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'wcag', component: WcagComponent},
  {path: 'info', component: InfoComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'flight', component: FlightDetailsComponent},
  {path: 'seat', component: SeatReservationComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
