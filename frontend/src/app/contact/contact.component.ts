import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  submitted = false;
  success: string | null = null;
  error: string | null = null;

  contactData: FormGroup = new FormGroup(
    {
      useremail: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      message: new FormControl('', Validators.required)
    }
  )

  constructor(private apiService: ApiService, private authService: AuthService) { }

  get useremail() {
    return this.contactData.get('useremail');
  }
  get message() {
    return this.contactData.get('message');
  }
  get subject() {
    return this.contactData.get('subject');
  }

  getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }

  onSubmit() {
    this.submitted = true;

    this.success = null;
    this.error = null;

    if (this.contactData.valid) {
      // On recup le token
      this.authService.csrfToken().subscribe({
        next: () => {
          const token = this.getCookie('XSRF-TOKEN');

          const headers = new HttpHeaders({
            'X-XSRF-TOKEN': decodeURIComponent(token || '')
          });

          this.apiService.sendEmail(this.contactData.value, headers).subscribe({
            next: res => {
              this.success = 'Message envoyé avec succès !';
              this.error = null;
              this.submitted = false;
              this.contactData.reset();
              this.contactData.markAsPristine();
              this.contactData.markAsUntouched();
            },
            error: err => {
              this.error = 'Erreur lors de l\'envoi de votre message, veuillez réessayer.';
              this.success = null;
            }
          });
        },
        error: err => {
              this.error = 'Erreur lors de l\'envoi de votre message, veuillez réessayer.';
              this.success = null;
        }
      });
    }
  }
}

