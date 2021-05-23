import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightDetailsService {

  constructor() { }
  whereFrom;
  whereTo;
  whenFrom;
  whenReturn;
  passangers;
}
