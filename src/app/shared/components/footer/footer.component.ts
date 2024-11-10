import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { RouterLink } from '@angular/router';
import { TranslateDirective, TranslatePipe } from '@codeandweb/ngx-translate';
import { SocialIconsComponent } from '../social-icons/social-icons.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    LogoComponent,
    RouterLink,
    TranslatePipe,
    TranslateDirective,
    SocialIconsComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
