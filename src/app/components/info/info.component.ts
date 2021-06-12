import { Component, OnInit } from '@angular/core';
import { WcagService } from './../../services/wcag.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {


  darkMode = false;
  bigFont = false;
  letterSpacing = false;
  lineSpacing = false;
  lang = 'pl'
  constructor(
    private wcag: WcagService,
    private fromLogin: LoginService
  ) {
    }
     ngOnInit(): void {
  }
  ngDoCheck(){
    this.darkMode = this.wcag.darkMode
    this.bigFont = this.wcag.bigFont
    this.letterSpacing = this.wcag.letterSpacing
    this.lineSpacing = this.wcag.lineSpacing
    this.lang = this.fromLogin.lang
}
}