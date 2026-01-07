import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, HttpClientModule],
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

  constructor(private userService: UserService) {}

  get email() { return this.loginForm.get('email'); }
  get role() { return this.loginForm.get('role'); }
  get name() {
  return this.loginForm.get('name');
}

get password() {
  return this.loginForm.get('password');
}


  ngOnInit() {
    this.loginForm.valueChanges.subscribe(value => {
      console.log('Form changed:', value);
    });
  }

  loginSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.userService.getUsers().subscribe(users => {

      const found = users.find(
        u => u.email === this.loginForm.value.email
      );

      if (!found) {
        this.isRegistered = false;
        this.message = 'User not registered. Please register.';
      } else {
        this.isRegistered = true;
        this.message = 'Login successful';
        console.log('Valid Login', this.loginForm.value);
      }
    });
  }

  registerUser() {
    this.userService.getUsers().subscribe(users => {

      const alreadyExists = users.find(
        u => u.email === this.loginForm.value.email
      );

      if (alreadyExists) {
        this.message = 'User already registered. Please login.';
        this.isRegistered = true;
        return;
      }

      this.userService.registerUser(this.loginForm.value)
        .subscribe(() => {
          this.message = 'Registration successful';
          this.isRegistered = true;
        });
    });
  }
}
