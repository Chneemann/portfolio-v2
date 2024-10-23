import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LegalNoticeComponent } from './shared/components/legal/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './shared/components/legal/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];
