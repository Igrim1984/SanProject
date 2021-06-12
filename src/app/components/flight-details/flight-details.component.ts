import { Component, OnInit } from '@angular/core';
import { FlightDetailsService } from '../../services/flight-details.service';
import { WcagService } from './../../services/wcag.service';
import { Router } from '@angular/router';
import { NbpService } from './../../services/nbp.service'
import { LoginService } from 'src/app/services/login.service';
import { emptyUsersExports } from './empty-user';



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
  result2: number
  login = false
  data = emptyUsersExports;
  currencyType: any;
  price: number;

  constructor(
    public formData: FlightDetailsService,
    private wcag:WcagService,
    private route:Router,
    private fromLogin: LoginService,
    private currency:NbpService
  ) { }

  ngOnInit(): void {

  }
  ngDoCheck(){
    this.darkMode = this.wcag.darkMode
    this.bigFont = this.wcag.bigFont
    this.letterSpacing = this.wcag.letterSpacing
    this.lineSpacing = this.wcag.lineSpacing
    this.login = this.fromLogin.login
    if (this.login === true) {
      this.data = this.fromLogin.users
    }
  }
  goToSeat() {
    this.route.navigate(["seat"])
  }
  getCurrency() {
    if (this.currencyType != "pln") {
    this.currency.currency = this.currencyType
    this.result = this.currency.getCurrency().subscribe(result => {
      this.result2 = Object(result).rates[0].mid});
      console.log(this.price, this.result2);
      this.price = Math.round(520/(this.result2)*100)/100;
    }
    else {
      this.price = 520.00
    }
  }
}
