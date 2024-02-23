import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import { NgApexchartsModule } from 'ng-apexcharts';
import {ClipboardModule} from '@angular/cdk/clipboard';


import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { AdminRegisterComponent } from './auth/admin-register/admin-register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AdminSidebarComponent } from './views/dashboard/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './views/dashboard/admin-header/admin-header.component';
import { UsersInformationComponent } from './views/dashboard/users-information/users-information.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    DashboardComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    UsersInformationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatMenuModule,
    NgApexchartsModule,
    ClipboardModule,
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: []
})
export class AdminModule { }
