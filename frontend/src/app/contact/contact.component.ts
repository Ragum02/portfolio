import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { IEmail } from '../../../@types/email';

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

  constructor(private ApiService: ApiService) { }

  get useremail() {
    return this.contactData.get('useremail');
  }
  get message() {
    return this.contactData.get('message');
  }
  get subject() {
    return this.contactData.get('subject');
  }

onSubmit() {
  this.submitted = true;

  this.success = null;
  this.error = null;

  if (this.contactData.valid) {
    this.ApiService.sendEmail(this.contactData.value).subscribe({
  next: res => {
        this.success = 'Message envoyé avec succès !';
        this.error = null;
        this.contactData.reset();
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
  }
}
}
