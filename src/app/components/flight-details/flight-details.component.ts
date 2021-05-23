import { Component, OnInit } from '@angular/core';
import { FlightDetailsService } from '../../services/flight-details.service';
import { WcagService } from './../../services/wcag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {

  darkMode = false;
  bigFont = false;
  letterSpacing = false;
  lineSpacing = false;
  constructor(
    public formData: FlightDetailsService,
    private wcag:WcagService,
    private route:Router
  ) { }

  ngOnInit(): void {
  }
  ngDoCheck(){
    this.darkMode = this.wcag.darkMode
    this.bigFont = this.wcag.bigFont
    this.letterSpacing = this.wcag.letterSpacing
    this.lineSpacing = this.wcag.lineSpacing
  }
  goToSeat() {
    this.route.navigate(["seat"])
  }
}
