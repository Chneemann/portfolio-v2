import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@codeandweb/ngx-translate';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent implements OnInit {
  /**
   * Scroll to the top of the page when the component is initialized.
   */
  ngOnInit(): void {
    window.scrollTo({ top: 0 });
  }
}
