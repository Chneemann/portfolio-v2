import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'portfolio-v2';

  /**
   * Initializes the AOS (Animate On Scroll) library asynchronously when the component is initialized.
   * This function imports the 'aos' module dynamically and calls its 'init' method to set up animations.
   */
  async ngOnInit() {
    const AOS = (await import('aos')).default;
    AOS.init();
  }
}
