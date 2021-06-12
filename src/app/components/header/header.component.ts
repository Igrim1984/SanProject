import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from 'src/app/services/login.service';
import { WcagService } from './../../services/wcag.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  private daysArray = ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Soboota'];
  private date = new Date();
  public hour: any;
  public minute: any;
  public secound: any;
  public ampm: string;
  public day: string;

  @ViewChild("langselect") lang:any
  
  login = false;
  darkMode = false;
  bigFont = false;
  letterSpacing = false;
  lineSpacing = false;
  email=""
  constructor(
    private wcag:WcagService,
    public translate:TranslateService,
    private fromLogin: LoginService
  ) {
    translate.addLangs(["pl","en","es"]);
  // translate.setDefaultLang("pl");
  const browserLang = translate.getBrowserLang();
  translate.use(browserLang.match(/pl|en|es/) ? browserLang : "pl");
 }


  ngOnInit() {
    setInterval(()=>{
      const date = new Date();
      this.updateDate(date);
    },1000);
    this.day = this.daysArray[this.date.getDay()];
  };


  private updateDate(date: Date) {
    const hours = date.getHours();
    this.ampm = hours >= 12 ? 'PM' : 'AM';
    this.hour = hours % 12;
    this.hour = this.hour ? this.hour : 12;
    this.hour = this.hour < 10 ? '0' + this.hour : this.hour;
    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString();
    const secounds = date.getSeconds();
    this.secound = secounds < 10 ? '0' +secounds : secounds.toString();
  }

  ngDoCheck(){
    this.darkMode = this.wcag.darkMode
    this.bigFont = this.wcag.bigFont
    this.letterSpacing = this.wcag.letterSpacing
    this.lineSpacing = this.wcag.lineSpacing
    this.login = this.fromLogin.login
    this.email = this.fromLogin.email
  }
  logOut() {
    this.login = false;
    this.fromLogin.login = this.login
  }
  setLang(){
    this.fromLogin.lang = this.lang.nativeElement.value
  }
}

 