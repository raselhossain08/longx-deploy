import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminAuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate {
  constructor(private authService: AdminAuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getToken()) {
      return true;
    } else {
      this.router.navigate(['/admin/login']);
      return false;
    }
  }
}
