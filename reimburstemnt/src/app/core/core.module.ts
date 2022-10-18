import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNewReimburstmentComponent } from './add-new-reimburstment/add-new-reimburstment.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AddNewReimburstmentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
