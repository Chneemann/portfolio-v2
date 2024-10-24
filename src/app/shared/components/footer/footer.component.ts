import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { RouterLink } from '@angular/router';
import { TranslateDirective, TranslatePipe } from '@codeandweb/ngx-translate';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, RouterLink, TranslatePipe, TranslateDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
