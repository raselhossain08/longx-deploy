import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthService } from 'src/app/admin/Services/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.scss'
})
export class AdminHeaderComponent {
    visibleMenu=false
    constructor(private router: Router, private authService: AdminAuthService){}
  logout(){
   this.authService.logout().subscribe(
     (response) => {
       console.log('Logout successful:', response);
       // Optionally, navigate to the login page or perform other actions
       localStorage.clear()
       this.router.navigate(['/admin/login']);
     },
     (error) => {
       console.error('Logout failed:', error);
       // Handle logout error
     }
     )
  }
}
