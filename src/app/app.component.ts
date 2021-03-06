import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fi']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
