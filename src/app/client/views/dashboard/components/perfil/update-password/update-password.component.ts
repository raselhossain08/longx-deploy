import { Component } from '@angular/core';
import { NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/client/Services/SharedService.service';
import { AuthService } from 'src/app/client/Services/auth.service';
@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.scss'
})
export class UpdatePasswordComponent {

  showPass=false
  constructor(private authService: AuthService, private toastr:ToastrService,private sharedService: SharedService, private formBuilder: FormBuilder) { }

  toggleDetails(): void {
    const toggleState=false
    this.sharedService.emitUpdatePasswordChanged(toggleState);
  }
  changePasswordForm = this.formBuilder.group({
    currentPassword: ['', Validators.required],
    newPassword: ['', Validators.required],
    confirmNewPassword: ['', Validators.required]
  });

  toggleShowPassword(): void {
    this.showPass = !this.showPass;
  }

  onSubmit(): void {
    if (this.changePasswordForm.valid) {
      const currentPassword = this.changePasswordForm.value.currentPassword;
      const newPassword = this.changePasswordForm.value.newPassword;
      const confirmNewPassword = this.changePasswordForm.value.confirmNewPassword;

      if (newPassword !== confirmNewPassword) {
        this.toastr.error('New password and confirm password do not match.');
        return;
      }
      var data ={currentPassword, newPassword}
      // Call your AuthService to update the password
      this.authService.updatePassword(data).subscribe(
        () => {
          this.toastr.success('Password updated successfully.');
          // Optionally, reset the form after successful update
          this.changePasswordForm.reset();
        },
        error => {
          this.toastr.error('Failed to update password. Please try again.');
          console.error('Error updating password:', error);
        }
      );
    } else {
      this.toastr.error('Please fill all the required fields.');
    }
  }
}
