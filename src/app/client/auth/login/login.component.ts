import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/client/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  checkbox=false
  showPass=false

  constructor(private router: Router,private fb: FormBuilder, private authService: AuthService,private cookie:CookieService, private toaster: ToastrService){

  }
  login=this.fb.group({
    email:["",Validators.required],
    password:["",Validators.required],
  })
  isCheckbox(){
    this.checkbox=!this.checkbox
  }
  loginSubmit(){
    if(this.checkbox){
      var user =this.login.value
      this.authService.loginUser(user).subscribe((response)=>{
        localStorage.setItem('token', response.token);
        this.toaster.success('login success!');
        this.router.navigate(['/dashboard']);
        const profile = JSON.stringify(response.user);
        localStorage.setItem('profile', profile)

      })
    }
  }
}
