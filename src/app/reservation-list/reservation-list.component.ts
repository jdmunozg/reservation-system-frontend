import { Component, OnInit } from '@angular/core';
import { ReservationService, Reservation } from '../services/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getAllReservations().subscribe((data) => {
      this.reservations = data;
    });
  }

  deleteReservation(id: number) {
    this.reservationService.deleteReservation(id).subscribe(() => {
      this.reservations = this.reservations.filter(r => r.id !== id);
    });
  }
}
