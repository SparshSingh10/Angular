import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  roles = ['Admin', 'Call Center', 'Tester'];

  isRegistered = true;
  message = '';

  loginForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
  });

  // getters (clean & modular)
  get name() { return this.loginForm.get('name'); }
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  get role() { return this.loginForm.get('role'); }

  ngOnInit() {
    // RxJS observable with arrow function
    this.loginForm.valueChanges.subscribe(value => {
      console.log('Form changed:', value);
    });
  }

  loginSubmit() {
    // Debug validation
    console.log('Form status:', this.loginForm.status);
    console.log('Form valid:', this.loginForm.valid);
    console.log('Name errors:', this.name?.errors);
    console.log('Email errors:', this.email?.errors);
    console.log('Password errors:', this.password?.errors);
    console.log('Role errors:', this.role?.errors);

    if (this.loginForm.invalid) {
      console.log('❌ Form is invalid – showing errors');
      this.loginForm.markAllAsTouched();
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const found = users.find(
      (u: any) => u.email === this.loginForm.value.email
    );

    if (!found) {
      this.isRegistered = false;
      this.message = 'User not registered. Please register.';
    } else {
      this.isRegistered = true;
      this.message = 'Login successful';
      console.log('✅ Valid Login', this.loginForm.value);
    }
  }

  registerUser() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const alreadyExists = users.find(
      (u: any) => u.email === this.loginForm.value.email
    );

    if (alreadyExists) {
      this.message = 'User already registered. Please login.';
      this.isRegistered = true;
      return;
    }

    users.push(this.loginForm.value);
    localStorage.setItem('users', JSON.stringify(users));

    this.message = 'Registration successful';
    this.isRegistered = true;
  }
}
