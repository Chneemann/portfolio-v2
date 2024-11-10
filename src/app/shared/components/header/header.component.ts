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
import { TranslatePipe } from '@codeandweb/ngx-translate';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LogoComponent, TranslatePipe],
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

  /**
   * Initialize the component.
   *
   * Call onScroll and getCurrentLanguage methods to initialize
   * the active section and current language.
   *
   * Also, call the checkboxChange method to listen to the
   * checkbox click event and close the menu outside click.
   */
  ngOnInit(): void {
    this.onScroll();
    this.getCurrentLanguage();
    this.checkboxChange();
  }

  /**
   * Add a global click event listener to close the menu when the user
   * clicks outside of the navigation.
   */
  checkboxChange() {
    this.renderer.listen('window', 'click', (event: Event) => {
      this.closeMenuOnOutsideClick(event);
    });
  }

  /**
   * Get the current language from the language service.
   *
   * This method will get the current language from the language service and
   * update the currentLang property of this component.
   *
   * @returns {void}
   */
  getCurrentLanguage() {
    this.currentLang = this.langService.getCurrentLanguage();
  }

  /**
   * Switch the language of the application to the given language.
   *
   * This method will call the switchLanguage method of the language service and
   * update the currentLang property of this component.
   *
   * @param lang The language to switch to.
   */
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

  /**
   * Close the navigation menu by setting the 'checked' property of the
   * navigation checkbox to false.
   *
   * This method is called when the user clicks on the navigation label or on
   * the navigation menu itself.
   *
   * @param navigationCheckbox The navigation checkbox element.
   */
  closeMenu(navigationCheckbox: HTMLInputElement) {
    navigationCheckbox.checked = false;
  }

  /**
   * Closes the navigation menu when a click is detected outside the navigation
   * elements.
   *
   * This method checks if the navigation checkbox is checked and if the click
   * event target is not within the navigation menu or its label. If both conditions
   * are true, it unchecks the navigation checkbox to close the menu.
   *
   * @param event The click event that triggered the listener.
   */
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
