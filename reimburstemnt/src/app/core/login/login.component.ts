import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  employeeLogin: any = FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.employeeLogin = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', Validators.required),
    });
  }
  get email() {
    return this.employeeLogin.get('email');
  }
  get password() {
    return this.employeeLogin.get('password');
  }
  getFormData() {
    console.log(this.employeeLogin.value);
  }
}
