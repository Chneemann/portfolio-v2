import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from '@codeandweb/ngx-translate';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {}
