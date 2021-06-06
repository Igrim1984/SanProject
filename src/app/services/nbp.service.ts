import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NbpService {

  constructor(
    private http:HttpClient
  ) { }

  getCurrency(){
    return this.http.get(`http://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json`).
      pipe(tap(console.log));
  }
}
