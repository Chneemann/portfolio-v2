import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  activeSection: string = '';

  ngOnInit(): void {
    this.onScroll();
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
