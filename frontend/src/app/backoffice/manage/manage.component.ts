import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  imports: [],
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent {

  user = 'benjamin';

  constructor(private router: Router) {
    if (this.user !== 'benjamin') {
      this.router.navigate(['/admin/login']);
    }
  }
}
