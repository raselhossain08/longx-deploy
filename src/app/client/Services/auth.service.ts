// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './apiFetching';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private apiUrl = 'http://localhost:3000'; // Adjust the URL according to your API endpoint
   private apiUrl = 'https://longr-27d176b3c54a.herokuapp.com';// Adjust the URL according to your API endpoint
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  registerUser(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, credentials);
  }

  loginUser(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);
  }
  userProfile(): Observable<any> {
    return this.http.get<User[]>(`${this.apiUrl}/user/profile`,);
  }

  // user Information Api

  userInformation(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/information`, credentials);
  }
  userInformationGet(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/information`);
  }

  getToken(): string | null {
    return this.token || localStorage.getItem('token');
  }

  updatePassword(credentials:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/update/password`, credentials);
  }
  logout(): Observable<any> {
    return this.http.get(`${this.apiUrl}/logout`);
  }

  //  Crypto prices
  getCryptoPrice(): Observable<any>  {
    return this.http.get(`${this.apiUrl}/crypto/price`);
  }
  uploadPersonData(files: File[]): Observable<any> {
      const formData = new FormData();
      files.forEach(file => {
        formData.append('files', file);
      });
      return this.http.post<any>(`${this.apiUrl}/person/upload`, formData);
    }
    uploadCompanyData(files: File[]): Observable<any> {
      const formData = new FormData();
      files.forEach(file => {
        formData.append('files', file);
      });
      return this.http.post<any>(`${this.apiUrl}/company/upload`, formData);
    }
}

