import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { TranslatePipe } from '@codeandweb/ngx-translate';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, TranslatePipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {}
