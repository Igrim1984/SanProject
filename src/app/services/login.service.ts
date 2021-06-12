import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login: boolean = false;
  email: string;

  constructor() { }
}
