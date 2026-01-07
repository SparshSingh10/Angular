import { NgFor, NgIf, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, NgClass, HttpClientModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  roles = ['Admin', 'Call Center', 'Tester'];
  message = '';

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    role: new FormControl('', Validators.required),
  });

  constructor(private userService: UserService, private router: Router) {}

  get email() { return this.registerForm.get('email'); }
  get role() { return this.registerForm.get('role'); }
  get name() { return this.registerForm.get('name'); }
  get password() { return this.registerForm.get('password'); }

  registerUser() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.userService.getUsers().subscribe(users => {
      const alreadyExists = users.find(
        u => u.email === this.registerForm.value.email
      );

      if (alreadyExists) {
        this.message = 'User already registered. Please login.';
        return;
      }
      this.userService.registerUser(this.registerForm.value)
        .subscribe(() => {
          this.message = 'Registration successful! Redirecting to login...';
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        });
    });
  }
}