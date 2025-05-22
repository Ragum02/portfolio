import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProject } from "../../../@types/project";
import { ITag } from "../../../@types/tag";
import { environment } from '../../environments/environment'
import { IEmail } from "../../../@types/email";

@Injectable({ providedIn: 'root' })
export class ApiService {

  success = false;

  private http = inject(HttpClient);


  private apiUrl = environment.backendUrl;

  getAllProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(`${this.apiUrl}/projects`);
  }

  getAllTags(): Observable<ITag[]> {
    return this.http.get<ITag[]>(`${this.apiUrl}/tags`);
  }

  public sendEmail(data: IEmail, headers: HttpHeaders): Observable<IEmail> {
    return this.http.post<IEmail>(`${this.apiUrl}/sendmail`, data, { headers, withCredentials:true});
  }

  csrfToken() {
    return this.http.get('http://localhost:9000/sanctum/csrf-cookie', {
      withCredentials: true
    });
  }
}
