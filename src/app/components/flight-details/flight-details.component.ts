import { Component, OnInit } from '@angular/core';
import { FlightDetailsService } from '../../services/flight-details.service';
import { WcagService } from './../../services/wcag.service';
import { Router } from '@angular/router';
import { NbpService } from './../../services/nbp.service'


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
  result: any
  result2: any

  constructor(
    public formData: FlightDetailsService,
    private wcag:WcagService,
    private route:Router,
    private currency:NbpService
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
  getCurrency() {
    this.result = this.currency.getCurrency().subscribe(result => {
      this.result2 = Object(result).rates[0].mid});
      console.log(this.result2)
  
  }
  
}
