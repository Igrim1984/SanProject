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

  getCurrency(): Observable<Object[]> {
    return this.http.get<Object[]>(`http://api.nbp.pl/api/exchangerates/tables/a/?format=json`).
      pipe(tap(console.log));
  }
}
