import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { TranslatePipe } from '@codeandweb/ngx-translate';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  dropdownOpen = false;

  projects = [
    {
      name: 'Videoflix',
      image: 'videoflix.png',
      description: 'videoflix',
      techStackFrontend: 'Angular | TypeScript',
      techStackBackend: 'Django REST | Python | PostgreSQL | Redis',
      linkLiveTest: 'https://videoflix.andre-kempf.com',
      linkGithubFrontend:
        'https://github.com/Chneemann/videoflix/tree/main/frontend',
      linkGithubBackend:
        'https://github.com/Chneemann/videoflix/tree/main/backend',
    },
    {
      name: 'DABubble',
      image: 'dabubble.png',
      description: 'dabubble',
      techStackFrontend: 'Angular | TypeScript',
      techStackBackend: 'Google Firebase',
      linkLiveTest: 'https://dabubble.andre-kempf.com',
      linkGithubFrontend: 'https://github.com/Chneemann/dabubble',
      linkGithubBackend: null,
    },
    {
      name: 'Join (Angular)',
      image: 'join-angular.png',
      description: 'join',
      techStackFrontend: 'Angular | TypeScript',
      techStackBackend: 'Google Firebase',
      linkLiveTest: 'https://join.andre-kempf.com',
      linkGithubFrontend: 'https://github.com/Chneemann/join',
      linkGithubBackend: null,
    },
    {
      name: 'Join (React)',
      image: 'join-react.png',
      description: 'join',
      techStackFrontend: 'React | TypeScript',
      techStackBackend: 'Google Firebase',
      linkLiveTest: 'https://join-react.andre-kempf.com',
      linkGithubFrontend: 'https://github.com/Chneemann/join-react',
      linkGithubBackend: null,
    },
  ];

  /**
   * Return the style for a given project in the list.
   * The style is used to mirror the elements of the project card
   * if the index is odd.
   *
   * @param i the index of the project in the array
   * @returns an object with the transform property set to
   * 'scaleX(-1)' if the index is odd, otherwise an empty object
   */
  getProjectStyle(i: number) {
    return {
      transform: i % 2 !== 0 ? 'scaleX(-1)' : '',
    };
  }

  /**
   * Returns the style for a project's description based on its index.
   * This function mirrors the description's text alignment and transforms
   * it if the index is odd, creating a flipped visual effect.
   *
   * @param i the index of the project
   * @returns an object with style properties for transform and text-align
   *          with 'scaleX(-1)' and 'end', respectively, if the index is odd
   */
  getDescriptionStyle(i: number) {
    return {
      transform: i % 2 !== 0 ? 'scaleX(-1)' : '',
      'text-align': i % 2 !== 0 ? 'end' : '',
    };
  }
}
