import { Component } from '@angular/core';
import { AdminAuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.scss']
})
export class AdminRegisterComponent {
  constructor(private router: Router, private fb:FormBuilder, private authService:AdminAuthService, private http: HttpClient) {

  }
  register=this.fb.group({
    name:["",Validators.required],
    telephone:["",Validators.required],
    email:["",Validators.required],
    password:["",Validators.required],
    role:"admin",
  })

  createUser(){

    const user = this.register.value
    this.authService.registerUser(user).subscribe(response =>{
      this.authService.setToken(response.token)
      const authToken = response.token;
      const userProfile = response.user;
      this.authService.setTokenAndProfile(authToken, userProfile);
      if(userProfile.role =='admin'){
        this.router.navigate(['/admin/dashboard']);
        console.log("Success")
      }
    })
  }
}
