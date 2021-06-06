import { Component, OnInit, ViewChild } from '@angular/core';
import { usersExports} from './users'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users = usersExports;
  userEmail: any; 
  userPassword: any;
  login: any;
  noLogin: false
  constructor() { 
    
  }

  ngOnInit(): void {
  }

    logIn() {
      if (this.userEmail == "jan.kowalski@gmail.com" && this.userPassword == "qwerty") {
        alert('Zalogowano poprawnie')

      } else {
      !this.noLogin
      alert('Podano niepoprawny adres email lub hasło')
    }}
}
