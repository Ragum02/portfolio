import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login = new FormGroup({
  name: new FormControl(''),
  password: new FormControl('')
  })


  submit() {
    const data = this.login.value

    this.authService.csrfToken().subscribe({
      next: (res) => {
          const token = this.getCookie('XSRF-TOKEN');
          const headers = new HttpHeaders({
            'X-XSRF-TOKEN': decodeURIComponent(token || '')
          });

            this.authService.login(headers, data).subscribe({
              next: (res) => {
                console.log(res)
        this.router.navigate(['/admin/manage'])
      },
              error: (err) => {
                console.log(err);
        this.router.navigate(['/']);
      }
});
        console.log(token);
      },
      error: (err) => {
        this.router.navigate(['/']);
      }
    }
   )
  }

    getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }



  constructor(private authService: AuthService ,private router: Router) { }
}
