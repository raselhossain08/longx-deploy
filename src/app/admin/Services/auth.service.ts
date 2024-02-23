// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  // private apiUrl = 'http://localhost:3000/api'; // Adjust the URL according to your API endpoint
  private apiUrl = 'https://longx-2745b44dda2d.herokuapp.com/api'; // Adjust the URL according to your API endpoint
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  registerUser(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, credentials);
  }

  loginUser(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  setToken(token: string | null) {
    this.token = token;
    localStorage.setItem('authToken', token || '');
  }

  getToken(): string | null {
    return this.token || localStorage.getItem('authToken');
  }
  setTokenAndProfile(token: string, userProfile: any) {
    // Store token and profile in local storage or state management as needed
    localStorage.setItem('authToken', token);
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
  }
  getUserProfile(): any | null {
    const userProfileString = localStorage.getItem('userProfile');
    return userProfileString ? JSON.parse(userProfileString) : null;
  }
  logout(): Observable<any> {
    return this.http.get(`${this.apiUrl}/logout`, {});
  }
}
