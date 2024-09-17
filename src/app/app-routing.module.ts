import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reservations', component: ReservationListComponent },
  { path: 'reservations/new', component: CreateReservationComponent },
  { path: 'reservations/edit/:id', component: EditReservationComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
