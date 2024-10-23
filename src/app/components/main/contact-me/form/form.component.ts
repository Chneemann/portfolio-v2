import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ButtonComponent],
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

  checkIfUserEmailIsValid(emailValue: string) {
    const emailRegex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(emailValue)) {
      return true;
    } else {
      return false;
    }
  }

  mailSendComplete() {
    this.mailSend = true;
  }

  mailSendTextReset() {
    this.mailSend = false;
  }
}
