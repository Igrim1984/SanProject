import { Component, OnInit, ViewChild } from '@angular/core';
import { homeCitiesExport } from './homeCities-export'
import { WcagService} from './../../services/wcag.service'
import { FlightDetailsService } from './../../services/flight-details.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  @ViewChild("whereFrom") whereFrom:any;
  @ViewChild("whereTo") whereTo:any;
  @ViewChild("whenFrom") whenFrom:any;
  @ViewChild("whenReturn") whenReturn:any;
  @ViewChild("passangers") passangers: any;

  darkMode = false;
  bigFont = false;
  letterSpacing = false;
  lineSpacing = false;
  constructor(
    private wcag:WcagService,
    public formData:FlightDetailsService,
    private route:Router
  ){

  }
  
  homeCities:any[] = homeCitiesExport;

  ngOnInit(): void {
  }
  ngDoCheck(){
    this.darkMode = this.wcag.darkMode
    this.bigFont = this.wcag.bigFont
    this.letterSpacing = this.wcag.letterSpacing
    this.lineSpacing = this.wcag.lineSpacing
  }
  getDataFromForm(){
    this.formData.whereFrom = this.whereFrom.nativeElement.value;
    this.formData.whereTo = this.whereTo.nativeElement.value;
    this.formData.whenFrom = this.whenFrom.nativeElement.value;
    this.formData.whenReturn = this.whenReturn.nativeElement.value;
    this.formData.passangers = this.passangers.nativeElement.value;

    this.route.navigate(["flight"])
  }
}
