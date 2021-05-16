import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  

  constructor(
    public translate:TranslateService
  ) {
    translate.addLangs(["pl","en","es"]);
  // translate.setDefaultLang("pl");
  const browserLang = translate.getBrowserLang();
  translate.use(browserLang.match(/pl|en|es/) ? browserLang : "pl");
 }


  ngOnInit(): void {
  }

}
 