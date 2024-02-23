import { Component } from '@angular/core';
import { SharedService } from 'src/app/client/Services/SharedService.service';

@Component({
  selector: 'app-factor-authentication',
  templateUrl: './factor-authentication.component.html',
  styleUrl: './factor-authentication.component.scss'
})
export class FactorAuthenticationComponent {
  constructor(private sharedService: SharedService){}
  toggleDetails(): void {
    const toggleState=false
    this.sharedService.emitTwoFactorChanged(toggleState);
  }
}
