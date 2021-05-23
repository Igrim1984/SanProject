import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightDetailsService } from './../../services/flight-details.service';
import { HomeComponent } from './../home/home.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  whereFrom: any

  constructor(
    public fromData: FlightDetailsService, 
  ) { }

  ngOnInit(): void {}

  getData() {
    this.whereFrom = this.fromData.whereFrom;
    console.log(this.whereFrom)
    fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=${this.fromData.whenFrom}cnt=1&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=imperial%2C%20metric`, {
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
