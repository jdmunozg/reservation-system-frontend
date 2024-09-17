import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-delete-reservation',
  templateUrl: './delete-reservation.component.html',
  styleUrls: ['./delete-reservation.component.css']
})
export class DeleteReservationComponent implements OnInit {
  id: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  confirmDelete() {
    if (this.id) {
      this.reservationService.deleteReservation(this.id).subscribe(() => {
        this.router.navigate(['/reservations']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/reservations']);
  }
}
