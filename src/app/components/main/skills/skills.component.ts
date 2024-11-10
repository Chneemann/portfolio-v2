import { Component } from '@angular/core';
import { TranslatePipe } from '@codeandweb/ngx-translate';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = [
    { src: 'assets/img/skills/angular.svg', alt: 'Angular framework' },
    { src: 'assets/img/skills/react.svg', alt: 'React library' },
    { src: 'assets/img/skills/typescript.svg', alt: 'TypeScript language' },
    { src: 'assets/img/skills/python.svg', alt: 'Python language' },
    { src: 'assets/img/skills/django.svg', alt: 'Django framework' },
    { src: 'assets/img/skills/javascript.svg', alt: 'JavaScript language' },
    { src: 'assets/img/skills/html.svg', alt: 'HTML markup language' },
    { src: 'assets/img/skills/css.svg', alt: 'CSS style sheet language' },
    { src: 'assets/img/skills/git.svg', alt: 'Git version control' },
    { src: 'assets/img/skills/firebase.svg', alt: 'Firebase platform' },
    { src: 'assets/img/skills/sql.svg', alt: 'SQL database language' },
    { src: 'assets/img/skills/rest-api.svg', alt: 'REST API' },
  ];
}
