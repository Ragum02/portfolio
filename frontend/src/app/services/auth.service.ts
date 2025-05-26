import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;
  private baseUrl = environment.baseUrl;

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  public csrfToken() {
    return this.http.get(`${this.baseUrl}/sanctum/csrf-cookie`, {
      withCredentials: true
    });
  }

  public login(headers: HttpHeaders, body: Partial<{ name: string | null, password: string | null }>) {
    return this.http.post(`${this.apiUrl}/login`, body, {
      headers: headers,
      withCredentials: true
    });
  };

public checkAuth(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user`, {withCredentials : true}).pipe(
      tap(() => this.loggedIn.next(true)),
      catchError(() => {
        this.loggedIn.next(false);
        throw new Error('Not authenticated');
      })
    );
  };

  isLoggedIn(): boolean {
    return this.loggedIn.value;
  }
  get isLoggedIn$(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
