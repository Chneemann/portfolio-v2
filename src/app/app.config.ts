import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import {
  provideTranslateService,
  TranslateLoader,
} from '@codeandweb/ngx-translate';
import { TranslateHttpLoader } from '@codeandweb/http-loader';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (
  http: HttpClient
) => new TranslateHttpLoader(http, './assets/i18n/', '.json');

export const appConfig: ApplicationConfig = {
  providers: [
    // HTTP client provider
    provideHttpClient(withFetch()),

    // Load translation module
    provideTranslateService({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),

    // Other providers
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
