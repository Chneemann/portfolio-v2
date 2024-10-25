import { Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateDirective } from '@codeandweb/ngx-translate';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent implements OnInit {
  /**
   * Scroll to the top of the page when the component is initialized.
   */
  ngOnInit(): void {
    window.scrollTo({ top: 0 });
  }
}
