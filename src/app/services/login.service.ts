import { Injectable } from '@angular/core';
import { usersExports } from '../components/login/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login: boolean = false;
  email: string;
  users: any = usersExports;


  constructor( ) { }
}
