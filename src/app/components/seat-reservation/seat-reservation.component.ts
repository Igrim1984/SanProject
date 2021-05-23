import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seat-reservation',
  templateUrl: './seat-reservation.component.html',
  styleUrls: ['./seat-reservation.component.scss']
})
export class SeatReservationComponent implements OnInit {

  constructor(
    private route:Router
  ) { }

  ngOnInit(): void {
  }
  return(){
    this.route.navigate(["flight"])
  }
}
