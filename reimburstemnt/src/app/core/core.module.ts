import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNewReimburstmentComponent } from './add-new-reimburstment/add-new-reimburstment.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AddNewReimburstmentComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgModule, CoreRoutingModule],
})
export class CoreModule {}
