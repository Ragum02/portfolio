import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProject } from "../../../@types/project";
import { ITag } from "../../../@types/tag";


@Injectable({ providedIn: 'root' })
export class ApiService{
  private http = inject(HttpClient);

  getAllProjects(): Observable<IProject[]>{
    return this.http.get<IProject[]>('http://localhost:8000/api/projects')
  }

  getAllTags(): Observable<ITag[]>{
    return this.http.get<ITag[]>('http://localhost:8000/api/tags')
    }
}
