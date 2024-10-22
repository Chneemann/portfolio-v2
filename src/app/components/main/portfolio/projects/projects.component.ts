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
        'Video platform for sharing and discovering videos. Upload, view, and stream content in various quality levels, all within a user-friendly interface designed to enhance the video experience.',
      linkLiveTest: 'https://videoflix.andre-kempf.com',
      linkGithub: 'https://github.com/Chneemann/videoflix',
    },
    {
      name: 'DABubble',
      image: 'dabubble.png',
      languages: 'Angular | TypeScript | Firebase',
      description:
        'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      linkLiveTest: 'https://dabubble.andre-kempf.com',
      linkGithub: 'https://github.com/Chneemann/dabubble',
    },
    {
      name: 'Join',
      image: 'join-angular.png',
      languages: 'Angular | TypeScript | Firebase',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories to ensure efficient management.',
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
