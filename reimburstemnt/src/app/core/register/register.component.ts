import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  employeeRegister: any = FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.employeeRegister = this.formBuilder.group({
      email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
      password: new FormControl('', Validators.required),
      retypepassword: new FormControl('', Validators.required),
      fullname: new FormControl('', Validators.required),
      bank: new FormControl('', Validators.required),
      accountnumber: new FormControl('', [Validators.required, 
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    });

  }
  get email() {
    return this.employeeRegister.get('email');
  }
  get password() {
    return this.employeeRegister.get('password');
  }
  get retypepassword() {
    return this.employeeRegister.get('retypepassword');
  }
  get fullname() {
    return this.employeeRegister.get('fullname');
  }
  get bank() {
    return this.employeeRegister.get('bank');
  }
  get accountnumber() {
    return this.employeeRegister.get('accountnumber');
  }
}
