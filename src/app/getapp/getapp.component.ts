import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-getapp',
  templateUrl: './getapp.component.html',
  styleUrls: ['./getapp.component.css']
})
export class GetappComponent implements OnInit {
  supportLanguage = ['en','es'];

    constructor(
    private translateService: TranslateService,
    private languageService: LanguageService


    ) { 
      this.translateService.addLangs(this.supportLanguage);
      // this.translateService.setDefaultLang('en');
    }

  ngOnInit(): void {
    const storedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    this.languageService.setLanguage(storedLanguage);

    this.translateService.use(storedLanguage);
  }
  selectLang(event: any): void {
    localStorage.setItem('selectedLanguage', event.value);
  }
  goToGoogleplayStore(){
    window.open("https://play.google.com/store/apps/details?id=com.abzafirst.brainyclockuser")
  }

  goToAppleStore(){
    window.open("https://apps.apple.com/in/app/brainyclockuser/id1661503636")
  }
}
