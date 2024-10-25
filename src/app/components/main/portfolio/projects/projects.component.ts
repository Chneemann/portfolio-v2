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
