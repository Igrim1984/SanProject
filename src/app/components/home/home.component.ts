import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { homeCitiesExport } from './homeCities-export'
import { WcagService} from './../../services/wcag.service'
import { FlightDetailsService } from './../../services/flight-details.service'
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


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
  passengers: number;
  day: any



  darkMode = false;
  bigFont = false;
  letterSpacing = false;
  lineSpacing = false;
  constructor(
    private wcag:WcagService,
    public formData:FlightDetailsService,
    private route:Router,
    private fromLogin: LoginService
  ){

  }
  
  homeCities:any[] = homeCitiesExport;

  whereFroms: string;
  ngOnInit(
    
  ): void {
    this.flightSearch()
  }
  ngDoCheck(){
    this.darkMode = this.wcag.darkMode
    this.bigFont = this.wcag.bigFont
    this.letterSpacing = this.wcag.letterSpacing
    this.lineSpacing = this.wcag.lineSpacing
    this.day = this.fromLogin.day
  }
  getDataFrom(){
    this.formData.whereFrom = this.whereFrom;
    this.formData.whereTo = this.whereTo;
    this.formData.whenFrom = this.whenFrom;
    this.formData.whenReturn = this.whenReturn;
    this.formData.passengers = this.passengers;
    let flag = false;

    if(this.passengers < 1 || this.passengers == undefined) {
      alert('Nie można wybrać mniej niż jednego pasażera!');
    }else flag = true
    
    if (this.whereFrom == this.whereTo)
     {
      alert('Miasto startowe i docelowe musi się różnić');
     }else flag = true

     console.log(flag)
    if (flag === false) { 
     return false
    }else this.route.navigate(["flight"])
  }
  changeWhereFrom() {
      this.formData.whereFrom = this.whereFrom;

  }
  changeWhereTo() {
    this.formData.whereTo = this.whereTo;

}

setWhenDate() {
  document.getElementById('whenFrom').setAttribute("min",this.day);
}
setWhenReturnDate() {
  document.getElementById('whenReturn').setAttribute("min",this.day);
}

flightSearch(){
  fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/PL/PLN/en-US/SFO-sky/jfk/2021-06-13?inboundpartialdate=2021-06-17", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "3b8e40e930mshf5781c1d8947291p1bbca2jsn80dc425cb20a",
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
	}
})
.then(response => {return response.json()})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
}
}
