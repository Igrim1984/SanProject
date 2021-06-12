import { Component, OnInit } from '@angular/core';
import { WcagService } from './../../services/wcag.service';

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
  constructor(
    private wcag: WcagService
  ) {
    }
     ngOnInit(): void {
  }
  ngDoCheck(){
    this.darkMode = this.wcag.darkMode
    this.bigFont = this.wcag.bigFont
    this.letterSpacing = this.wcag.letterSpacing
    this.lineSpacing = this.wcag.lineSpacing
}
}