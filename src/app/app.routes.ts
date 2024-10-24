import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'legal-notice',
    loadComponent: () =>
      import(
        './shared/components/legal/legal-notice/legal-notice.component'
      ).then((m) => m.LegalNoticeComponent),
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import(
        './shared/components/legal/privacy-policy/privacy-policy.component'
      ).then((m) => m.PrivacyPolicyComponent),
  },
];
