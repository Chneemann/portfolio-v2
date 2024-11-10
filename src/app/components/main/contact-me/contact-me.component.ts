import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { TranslatePipe } from '@codeandweb/ngx-translate';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormComponent, TranslatePipe],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {}
