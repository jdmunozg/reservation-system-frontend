import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService, Reservation } from '../services/reservation.service';

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})
export class EditReservationComponent implements OnInit {
  reservation: Reservation | undefined;

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.reservationService.getReservationById(id).subscribe((data) => {
      this.reservation = data;
    });
  }

  updateReservation() {
    if (this.reservation && this.reservation.id) {
      this.reservationService.updateReservation(this.reservation.id, this.reservation).subscribe(() => {
        this.router.navigate(['/reservations']);
      });
    }
  }
}
