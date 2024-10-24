import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { TranslateDirective, TranslatePipe } from '@codeandweb/ngx-translate';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, TranslatePipe, TranslateDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {}
