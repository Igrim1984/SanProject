import { Component, OnInit, ViewChild } from '@angular/core';
import { homeCitiesExport } from './homeCities-export'
import { WcagService} from './../../services/wcag.service'
import { FlightDetailsService } from './../../services/flight-details.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  whereFrom:any;
  whereTo:any;
  whenFrom:any;
  whenReturn:any;
  passengers: any;

  darkMode = false;
  bigFont = false;
  letterSpacing = false;
  lineSpacing = false;
  constructor(
    private wcag:WcagService,
    public formData:FlightDetailsService,
    private route:Router
  ){

  }
  
  homeCities:any[] = homeCitiesExport;

  whereFroms: string;
  ngOnInit(): void {
  }
  ngDoCheck(){
    this.darkMode = this.wcag.darkMode
    this.bigFont = this.wcag.bigFont
    this.letterSpacing = this.wcag.letterSpacing
    this.lineSpacing = this.wcag.lineSpacing
  }
  getDataFrom(){
    this.formData.whereFrom = this.whereFrom;
    this.formData.whereTo = this.whereTo;
    this.formData.whenFrom = this.whenFrom;
    this.formData.whenReturn = this.whenReturn;
    this.formData.passengers = this.passengers;

    this.route.navigate(["flight"])
  }
  changeWhereFrom() {
      this.formData.whereFrom = this.whereFrom;
      console.log(this.whereFrom, this.whereTo);
  }
  changeWhereTo() {
    this.formData.whereTo = this.whereTo;
    console.log(this.whereFrom, this.whereTo);
}
}
