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
  temp: any
  temp2: any;
  
  



  constructor(
    public fromData: FlightDetailsService,
    private home:HomeComponent
  ) { }


  ngOnInit(): void {

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
    .then((response) => {
      return response.json();
    })
    .then((data) => { console.log(data); 
      this.temp = Math.floor((data.main.temp-273.15)*10)/10
      document.querySelector('#temp').innerHTML = this.temp + '&deg C';
      document.querySelector('#humidity').innerHTML = data.main.humidity + ' %';
      document.querySelector('#pressure').innerHTML = data.main.pressure + " hPa"})
    .catch(err => {
      console.error(err);
    }); 
 
   }


  getDataTo() {
    this.whereTo = this.fromData.whereTo
    console.log(this.whereTo)
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${this.whereTo}&lat=0&lon=0&lang=pl&units=%22metric%22`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "3b8e40e930mshf5781c1d8947291p1bbca2jsn80dc425cb20a",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => { console.log(data); 
      this.temp2 = Math.floor((data.main.temp-273.15)*10)/10
      document.querySelector('#temp2').innerHTML = this.temp2 + '&deg C';
      document.querySelector('#humidity2').innerHTML = data.main.humidity + ' %';
      document.querySelector('#pressure2').innerHTML = data.main.pressure + ' hPa'})
    .catch(err => {
      console.error(err);
    }); 

  }
}
