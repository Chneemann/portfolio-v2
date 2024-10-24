import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { TranslateDirective, TranslatePipe } from '@codeandweb/ngx-translate';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TranslatePipe, TranslateDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Videoflix',
      image: 'videoflix.png',
      languages: 'Django REST | Python | Angular | TypeScript',
      linkLiveTest: 'https://videoflix.andre-kempf.com',
      linkGithub: 'https://github.com/Chneemann/videoflix',
    },
    {
      name: 'DABubble',
      image: 'dabubble.png',
      languages: 'Angular | TypeScript | Firebase',
      linkLiveTest: 'https://dabubble.andre-kempf.com',
      linkGithub: 'https://github.com/Chneemann/dabubble',
    },
    {
      name: 'Join',
      image: 'join-angular.png',
      languages: 'Angular | TypeScript | Firebase',
      linkLiveTest: 'https://join.andre-kempf.com',
      linkGithub: 'https://github.com/Chneemann/join',
    },
  ];

  getProjectStyle(i: number) {
    return {
      transform: i % 2 !== 0 ? 'scaleX(-1)' : '',
    };
  }

  getDescriptionStyle(i: number) {
    return {
      transform: i % 2 !== 0 ? 'scaleX(-1)' : '',
      'text-align': i % 2 !== 0 ? 'end' : '',
    };
  }
}
