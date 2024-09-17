import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';
import { DeleteReservationComponent } from './delete-reservation/delete-reservation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservationListComponent,
    CreateReservationComponent,
    EditReservationComponent,
    DeleteReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
