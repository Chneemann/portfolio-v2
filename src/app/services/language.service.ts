import { Injectable } from '@angular/core';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@codeandweb/ngx-translate';
@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currentLang = 'en';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLang);
  }

  switchLanguage(lang: string) {
    if (lang === 'en') {
      this.currentLang = 'en';
    } else if (lang == 'de') {
      this.currentLang = 'de';
    }
    this.translate.use(this.currentLang);
  }

  getCurrentLanguage(): string {
    return this.currentLang;
  }
}
