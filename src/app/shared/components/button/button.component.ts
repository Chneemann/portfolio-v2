import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() buttonText: string = '';
  @Input() isButtonColored: boolean = true;
  @Input() disabled: boolean = false;
  @Input() linkFrontend: string = '';
  @Input() linkBackend: string | null = '';

  dropdownOpen = false;

  constructor(private eRef: ElementRef) {}

  /**
   * Toggle the dropdown menu.
   */
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Closes the dropdown menu when the user clicks outside of the button.
   *
   * @param event The global click event.
   */
  /*******  0ff3e7bb-afa2-45f2-9aba-112819b992a1  *******/
  onClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.dropdownOpen = false;
    }
  }
}
