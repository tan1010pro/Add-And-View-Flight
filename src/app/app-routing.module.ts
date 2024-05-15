import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightListComponent } from './flight-list/flight-list.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

const routes: Routes = [
  { path: 'flights', component: FlightListComponent },
  {path:'addFlight',component:AddFlightComponent},
  { path: 'flightDetail/:id', component: FlightDetailComponent },
  {path: '404', component: NotFoundComponentComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
