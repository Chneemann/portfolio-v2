import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  activeSection: string = '';
  currentLang: string = '';

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.onScroll();
    this.getCurrentLanguage();
  }

  getCurrentLanguage() {
    this.currentLang = this.langService.getCurrentLanguage();
  }

  switchLanguage(lang: string) {
    this.langService.switchLanguage(lang);
    this.getCurrentLanguage();
  }

  @HostListener('window:scroll', [])
  /**
   * Determine the currently active section based on the current scroll position.
   */
  onScroll(): void {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 240;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute('id')!;
      }
    });

    this.activeSection = currentSection;
  }
}
