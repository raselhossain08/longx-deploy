import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

interface UserProfile {
  name: string;
  email: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  notificationBar = false;
  profile: UserProfile | null = null;

  constructor(private router: Router, private authService: AuthService) {
    this.authService.userProfile().subscribe((res: UserProfile) => {
      this.profile = res;
    });
  }

  profileButton() {
    this.router.navigate(['/dashboard/profile']);
  }
}
