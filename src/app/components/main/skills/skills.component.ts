import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@codeandweb/ngx-translate';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = [
    { src: './../../assets/img/skills/angular.svg', alt: 'angular' },
    { src: './../../assets/img/skills/react.svg', alt: 'react' },
    { src: './../../assets/img/skills/typescript.svg', alt: 'typescript' },
    { src: './../../assets/img/skills/python.svg', alt: 'python' },
    { src: './../../assets/img/skills/django.svg', alt: 'django' },
    { src: './../../assets/img/skills/javascript.svg', alt: 'javascript' },
    { src: './../../assets/img/skills/html.svg', alt: 'html' },
    { src: './../../assets/img/skills/css.svg', alt: 'css' },
    { src: './../../assets/img/skills/git.svg', alt: 'git' },
    { src: './../../assets/img/skills/firebase.svg', alt: 'firebase' },
    { src: './../../assets/img/skills/sql.svg', alt: 'sql' },
    { src: './../../assets/img/skills/rest-api.svg', alt: 'rest-api' },
  ];
}
