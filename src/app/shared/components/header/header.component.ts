import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { LanguageService } from '../../../services/language.service';
import { TranslateDirective, TranslatePipe } from '@codeandweb/ngx-translate';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LogoComponent, TranslatePipe, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @ViewChild('navigationCheckbox') navigationCheckbox!: ElementRef;
  activeSection: string = '';
  currentLang: string = '';

  constructor(
    private langService: LanguageService,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.onScroll();
    this.getCurrentLanguage();
    this.checkboxChange();
  }

  checkboxChange() {
    this.renderer.listen('window', 'click', (event: Event) => {
      this.closeMenuOnOutsideClick(event);
    });
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

  closeMenu(navigationCheckbox: HTMLInputElement) {
    navigationCheckbox.checked = false;
  }

  closeMenuOnOutsideClick(event: Event) {
    const checkbox = this.navigationCheckbox.nativeElement;
    const navMenu = this.elementRef.nativeElement.querySelector('nav');
    const label = this.elementRef.nativeElement.querySelector(
      'label[for="navigation"]'
    );

    if (
      checkbox.checked &&
      !navMenu.contains(event.target) &&
      !label.contains(event.target)
    ) {
      checkbox.checked = false;
    }
  }
}
