import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { usersExports} from './users'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  userEmail: string; 
  userPassword: any;
  login = false;
  constructor(
    private loginService: LoginService 
  ) { 
  }
  users: any[] = usersExports

  ngOnInit(): void {
  }

    logIn() {
      if (this.userEmail == "jan.kowalski@gmail.com" && this.userPassword == "qwerty") {
        document.querySelector('#email').nodeValue = this.userEmail;
        this.loginService.email = this.userEmail
        alert('Zalogowano poprawnie')
        this.loginService.login = true;
        this.login = this.loginService.login
     
      } else {
      alert('Podano niepoprawny adres email lub hasło')
    }}

    logOut() {
      this.login = false;
      this.loginService.login = this.login
    }
}
