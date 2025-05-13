import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login = new FormGroup({
  username: new FormControl(''),
  password: new FormControl('')
  })


  submit() {
    console.log(this.login.value)
    return false;
  }
}
