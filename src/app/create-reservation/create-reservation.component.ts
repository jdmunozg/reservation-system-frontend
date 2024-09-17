import { Component } from '@angular/core';
import { ReservationService, Reservation } from '../services/reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent {
  reservation: Reservation = {
    reservationDate: '',
    reservationTime: '',
    customer: { id: 0, name: '', email: '', phone: '' },
    service: { id: 0, serviceName: '' }
  };

  constructor(private reservationService: ReservationService, private router: Router) { }

  createReservation() {
    this.reservationService.createReservation(this.reservation).subscribe(() => {
      this.router.navigate(['/reservations']);
    });
  }
}
