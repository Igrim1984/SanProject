import { Component, OnInit } from '@angular/core';
import { WcagService } from './../../services/wcag.service'
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-wcag',
  templateUrl: './wcag.component.html',
  styleUrls: ['./wcag.component.scss']
})
export class WcagComponent implements OnInit {


  langPl = false;
  langEn = false;
  langEs = false;
  darkModeTemp = false;
  bigFontTemp = false;
  letterSpacingTemp = false;
  lineSpacingTemp = false;
  constructor(
    private wcag:WcagService,
    private fromLogin: LoginService

  ) { }

  ngOnInit(): void {
  }

  lang: any
  
  darkMode(){
    this.darkModeTemp = !this.darkModeTemp;
    this.wcag.darkMode = !this.wcag.darkMode
  }

  bigFont(){
    this.bigFontTemp = !this.bigFontTemp;
    this.wcag.bigFont = !this.wcag.bigFont;
  }
  letterSpacing(){
    this.letterSpacingTemp = !this.letterSpacingTemp;
    this.wcag.letterSpacing = !this.wcag.letterSpacing
  }

  lineSpacing(){
    this.lineSpacingTemp = !this.lineSpacingTemp;
    this.wcag.lineSpacing = !this.wcag.lineSpacing;
  }
  ngDoCheck(){
    this.darkModeTemp = this.wcag.darkMode
    this.bigFontTemp = this.wcag.bigFont
    this.letterSpacingTemp = this.wcag.letterSpacing
    this.lineSpacingTemp = this.wcag.lineSpacing
    this.lang = this.fromLogin.lang

  }
  langPol(){
    this.langPl = !this.langPl;
    this.langEn = false
    this.langEs = false
  }
  langEng(){
    this.langEn = !this.langEn;
    this.langPl = false
    this.langEs = false
  }
  langEsp(){
    this.langEs = !this.langEs;
    this.langEn = false
    this.langPl = false
  }
}
