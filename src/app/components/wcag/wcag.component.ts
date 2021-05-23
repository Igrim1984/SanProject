import { Component, OnInit } from '@angular/core';
import { WcagService } from './../../services/wcag.service'



@Component({
  selector: 'app-wcag',
  templateUrl: './wcag.component.html',
  styleUrls: ['./wcag.component.scss']
})
export class WcagComponent implements OnInit {

  darkModeTemp = false;
  bigFontTemp = false;
  letterSpacingTemp = false;
  lineSpacingTemp = false;
  constructor(
    private wcag:WcagService,

  ) { }

  ngOnInit(): void {
  }

  langPl = false;
  langEn = false;
  langEs = false;
  
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

  }
}
