import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { TranslateDirective, TranslatePipe } from '@codeandweb/ngx-translate';
import { SocialIconsComponent } from '../../../shared/components/social-icons/social-icons.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    ButtonComponent,
    TranslatePipe,
    TranslateDirective,
    SocialIconsComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
