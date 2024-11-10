import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { HttpClient } from '@angular/common/http';
import { TranslatePipe } from '@codeandweb/ngx-translate';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ButtonComponent, TranslatePipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  http = inject(HttpClient);

  mailSend = false;
  checkboxState = false;

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'https://andre-kempf.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * This function is called when the form is submitted.
   * It checks if the form is valid and if it has been submitted.
   * If the form is valid, it sends a post request to the endpoint
   * with the form data.
   * If the request is successful, it calls the mailSendComplete function
   * and resets the form.
   * If the request is not successful, it logs the error to the console.
   *
   * @param ngForm The NgForm instance
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.mailSendComplete();
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
        });
    }
  }

  /**
   * Validates the given email address against a regular expression pattern.
   *
   * This function checks if the provided email address matches the standard
   * email format using a regular expression. The email should contain a
   * username, an '@' symbol, a domain name, and a top-level domain.
   *
   * @param emailValue - The email address to validate
   * @returns true if the email address is valid, false otherwise
   */
  checkIfUserEmailIsValid(emailValue: string) {
    const emailRegex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(emailValue)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * This function is called when the mail has been sent successfully.
   * It sets the mailSend flag to true, which triggers the display of the
   * success message in the template.
   */
  mailSendComplete() {
    this.mailSend = true;
  }

  /**
   * Resets the mailSend flag to false, which can be used to hide any success
   * message or reset the form state to its initial status.
   */
  mailSendTextReset() {
    this.mailSend = false;
  }
}
