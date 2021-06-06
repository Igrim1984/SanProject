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
  ngOnInit(
    
  ): void {
    this.flightSearch()
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

  }
  changeWhereTo() {
    this.formData.whereTo = this.whereTo;

}

flightSearch(){
  fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/PL/PLN/en-US/SFO-sky/jfk/2021-06-06?inboundpartialdate=2021-06-08", {
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
