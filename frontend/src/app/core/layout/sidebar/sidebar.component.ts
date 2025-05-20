import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Observable } from 'rxjs';
import { ITag } from '../../../../../@types/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  icons$: Observable<ITag[]>;
  icons: ITag[] = [];

  constructor(private apiService: ApiService) {
    this.icons$ = this.apiService.getAllTags();
    this.icons$.subscribe(data => {
    this.icons = data;
    })
  }
}
