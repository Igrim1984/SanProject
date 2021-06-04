import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightDetailsService } from './../../services/flight-details.service';
import { HomeComponent } from './../home/home.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  whereFrom: any;
  whereTo:any;
  whereFromArray;


  constructor(
    public fromData: FlightDetailsService
  ) { }


  ngOnInit(): void {

  }
  log() {
    console.log(this.whereFromArray)
  }
  getDataFrom() {
    this.whereFrom = this.fromData.whereFrom
    console.log(this.whereFrom)
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${this.whereFrom}&lat=0&lon=0&lang=pl&units=%22metric%22`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "3b8e40e930mshf5781c1d8947291p1bbca2jsn80dc425cb20a",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
    })
    .then(response => {
      return response.json();
    })
    .then(response => console.log(response))
    .catch(err => {
      console.error(err);
    });

   }
  getDataTo() {
    this.whereTo = this.fromData.whereTo
    console.log(this.whereTo)
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${this.whereTo}&lat=0&lon=0&callback=test&id=2172797&lang=pl&units=%22metric%22&mode=xml%2C%20html`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "3b8e40e930mshf5781c1d8947291p1bbca2jsn80dc425cb20a",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
    })
    .then(response => response.json()) 
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    });
  }
}
