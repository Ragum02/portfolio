import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Observable, of } from 'rxjs';
import { IProject } from '../../../../@types/project';
import { ITag } from '../../../../@types/tag';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage',
  imports: [CommonModule, CdkDrag, CdkDragHandle, FormsModule],
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit{
  @ViewChild('editDialog') editDialogRef!: ElementRef<HTMLDialogElement>;
  projects$: Observable<IProject[]> = of([]);
  projects: IProject[] = [];

  tags$: Observable<ITag[]> = of([]);
  tags: ITag[] = [];

  isLogged = false;
  constructor(private router: Router, private authService: AuthService, private apiService: ApiService) { }

ngOnInit(): void {
    this.authService.checkAuth().subscribe({
      next: () => {
        this.isLogged = true;
            if (this.isLogged === true) {
               this.projects$ = this.apiService.getAllProjects();
                this.projects$.subscribe(data => {
                   console.log(data);
                     this.projects = data;
                })
      this.tags$ = this.apiService.getAllTags();
      this.tags$.subscribe(data => {
        this.tags = data;
      })
    }
      },
      error: () => {
        this.router.navigate(['/admin/login']);
      }
    })
  }

  editableProject: IProject = { id: 0, name: '', content: '', url: '', image: '', tags: [] };
    openDialog(project: IProject) {
    this.editableProject = { ...project }; // copie pour édition
    this.editDialogRef.nativeElement.showModal();
  }
}

