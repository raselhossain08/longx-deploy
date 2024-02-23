import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { AdminRegisterComponent } from './auth/admin-register/admin-register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AdminAuthGuard } from './Services/auth.guard';
import { AdminDashboardComponent } from './views/dashboard/admin-dashboard/admin-dashboard.component';
import { UsersInformationComponent } from './views/dashboard/users-information/users-information.component';


const routes: Routes = [
  {
    path:'admin',component: AdminComponent,
    children:[
      {
        path:'login', component: AdminLoginComponent
      },
      {
        path:'register', component: AdminRegisterComponent
      },
      {
        path:'dashboard', component: DashboardComponent , canActivate: [AdminAuthGuard], children:[
          {
            path:'home',component:AdminDashboardComponent
          },
          {
            path:'user-details',component:UsersInformationComponent
          },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
