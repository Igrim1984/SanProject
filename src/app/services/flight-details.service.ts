import { Injectable, ViewChild } from '@angular/core';
import { HomeComponent } from '../components/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class FlightDetailsService {

  constructor() { }
  whereFrom;
  whereTo;
  whenFrom;
  whenReturn;
  passengers;


}
