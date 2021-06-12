import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { usersExports} from './users'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users = usersExports;
  userEmail: string; 
  userPassword: any;
  login = false;
  constructor(
    private loginService: LoginService 
  ) { 
  }

  ngOnInit(): void {
  }

    logIn() {
      if (this.userEmail == "jan.kowalski@gmail.com" && this.userPassword == "qwerty") {
        this.userEmail = this.loginService.email
        alert('Zalogowano poprawnie')
        this.loginService.login = true;
        this.login = this.loginService.login
     
        console.log(this.userEmail)

      } else {
      alert('Podano niepoprawny adres email lub hasło')
    }}
}
