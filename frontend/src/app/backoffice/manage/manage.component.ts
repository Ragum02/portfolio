import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage',
  imports: [CommonModule],
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  isLogged = false;
  constructor(private router: Router, private authService: AuthService) { }

ngOnInit(): void {
  this.authService.checkAuth().subscribe({
    next: (res) => {
      console.log(res);
      this.isLogged = true;
    },
    error: (err) => {
      console.log(err);
      this.router.navigate(['/admin/login']);
    }
  })
}

}
