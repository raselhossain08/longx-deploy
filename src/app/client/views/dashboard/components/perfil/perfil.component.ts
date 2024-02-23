import { AuthService } from '../../../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/client/Services/SharedService.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  constructor(private sharedService: SharedService){}
  showPass=false
  PersonVerification:any
  companyVerification:any
  twoFactor:any
  updatePassword:any

  ngOnInit(): void {
    this.sharedService.companyToggled.subscribe((toggleState: boolean) => {
      console.log('Company toggle state changed:', toggleState);
      // Only emit the event if the toggle state has changed
      if (toggleState !== this.companyVerification) {
        this.companyVerification = toggleState;
        // Emit the updated toggle state
        this.sharedService.emitCompanyChanged(this.companyVerification);
      }
    });

    this.sharedService.personVToggled.subscribe((toggleState: boolean) => {
      console.log('Person V toggle state changed:', toggleState);
      // Only emit the event if the toggle state has changed
      if (toggleState !== this.PersonVerification) {
        this.PersonVerification = toggleState;
        // Emit the updated toggle state
        this.sharedService.emitPersonVChanged(this.PersonVerification);
      }
    });
    this.sharedService.TwoFactorToggled.subscribe((toggleState: boolean) => {
      console.log('Person V toggle state changed:', toggleState);
      // Only emit the event if the toggle state has changed
      if (toggleState !== this.twoFactor) {
        this.twoFactor = toggleState;
        // Emit the updated toggle state
        this.sharedService.emitTwoFactorChanged(this.twoFactor);
      }
    });
    this.sharedService.UpdatePasswordToggled.subscribe((toggleState: boolean) => {
      console.log('UpdatePasswordToggled toggle state changed:', toggleState);
      // Only emit the event if the toggle state has changed
      if (toggleState !== this.updatePassword) {
        this.updatePassword = toggleState;
        // Emit the updated toggle state
        this.sharedService.emitUpdatePasswordChanged(this.updatePassword );
      }
    });
  }
}
