// reverse-auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Assuming you have an AuthService to handle authentication

@Injectable({
  providedIn: 'root'
})
export class ReverseAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.getToken()) {
      return true; // Allow access if user is not logged in
    } else {
      this.router.navigate(['/dashboard']); // Redirect to dashboard if user is logged in
      return false;
    }
  }
}
