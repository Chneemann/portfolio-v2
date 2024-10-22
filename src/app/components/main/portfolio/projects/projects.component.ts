import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Videoflix',
      image: 'videoflix.png',
      languages: 'Django REST | Python | Angular | TypeScript',
      description:
        'A video platform for uploading and viewing videos in different quality levels. Enjoy a user-friendly interface for an optimal video experience, whether you want to share or discover content.',
      linkLiveTest: 'https://videoflix.andre-kempf.com',
      linkGithub: 'https://github.com/Chneemann/videoflix',
    },
    {
      name: 'DABubble',
      image: 'dabubble.png',
      languages: 'Angular | TypeScript | Firebase',
      description:
        'A powerful and user-friendly slack or discord clone that enables seamless team communication, collaboration, and organization.',
      linkLiveTest: 'https://dabubble.andre-kempf.com',
      linkGithub: 'https://github.com/Chneemann/dabubble',
    },
    {
      name: 'Join',
      image: 'join-angular.png',
      languages: 'Angular | TypeScript | Firebase',
      description:
        'A task manager modeled on the kanban system. Create and organize tasks using drag-and-drop functions, assign users and categories to ensure efficient management.',
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
