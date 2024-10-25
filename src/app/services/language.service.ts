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

  /**
   * Switches the language for the application.
   *
   * @param lang language code: 'en' or 'de'
   */
  switchLanguage(lang: string) {
    if (lang === 'en') {
      this.currentLang = 'en';
    } else if (lang == 'de') {
      this.currentLang = 'de';
    }
    this.translate.use(this.currentLang);
  }

  /**
   * Retrieves the current language of the application.
   *
   * @returns The current language code as a string.
   */
  getCurrentLanguage(): string {
    return this.currentLang;
  }
}
