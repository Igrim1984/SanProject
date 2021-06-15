import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightDetailsService } from 'src/app/services/flight-details.service';

@Component({
  selector: 'app-seat-reservation',
  templateUrl: './seat-reservation.component.html',
  styleUrls: ['./seat-reservation.component.scss']
})
export class SeatReservationComponent implements OnInit {

  passengers;
  constructor(
    private route:Router,
    private fromData: FlightDetailsService
  ) { }

  ngOnInit(): void {
  }
  goBack(){
    this.route.navigate(["flight"])
  }
  ngDoCheck(){
    this.passengers = this.fromData.passengers
  }
}
