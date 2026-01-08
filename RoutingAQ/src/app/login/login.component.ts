import { NgFor, NgIf, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';
import { NotificationService } from '../services/notification.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, NgClass, HttpClientModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  roles = ['Admin', 'Call Center', 'Tester'];
  isRegistered = true;
  message = '';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private userService: UserService, private router: Router, private notificationService: NotificationService,  private loaderService: LoaderService
    
  ) {}

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  ngOnInit() {
    this.loginForm.valueChanges.subscribe(value => {
      console.log('Form changed:', value);
    });
  }

loginSubmit() {

  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    this.notificationService.showError('Please fill all required fields');
    return;
  }

  // 🔵 START LOADER before API call
  this.loaderService.show();

  this.userService.getUsers().subscribe({
    next: (users) => {

      const found = users.find(
        u => u.email === this.loginForm.value.email && u.password === this.loginForm.value.password
      );

      if (!found) {
        this.isRegistered = false;
        this.message = 'Invalid credentials or user not registered. Please register.';
        this.notificationService.showError('Invalid credentials. Please try again.');
      } else {
        this.isRegistered = true;
        this.message = 'Login successful';
        this.notificationService.showSuccess('Login successful');

        this.userService.setUser({
          name: found.name,
          role: found.role.toLowerCase() === 'admin' ? 'admin' : 'user'
        });

        this.router.navigate(['/dashboard']);
      }

      // 🔴 STOP LOADER after success response
      this.loaderService.hide();
    },

    error: () => {
      // 🔴 STOP LOADER if API fails
      this.loaderService.hide();
      this.notificationService.showError('Something went wrong. Please try again.');
    }
  });
}


// to test loader i added 2 second delay here 
// loginSubmit() {

//   if (this.loginForm.invalid) {
//     this.loginForm.markAllAsTouched();
//     this.notificationService.showError('Please fill all required fields');
//     return;
//   }

//   // 🔵 show loader
//   this.loaderService.show();

//   // ⏱️ TEMPORARY delay JUST to see loader
//   setTimeout(() => {

//     this.userService.getUsers().subscribe({
//       next: (users) => {

//         const found = users.find(
//           u => u.email === this.loginForm.value.email &&
//                u.password === this.loginForm.value.password
//         );

//         if (!found) {
//           this.isRegistered = false;
//           this.message = 'Invalid credentials or user not registered.';
//           this.notificationService.showError('Invalid credentials. Please try again.');
//         } else {
//           this.isRegistered = true;
//           this.message = 'Login successful';
//           this.notificationService.showSuccess('Login successful');

//           this.userService.setUser({
//             name: found.name,
//             role: found.role.toLowerCase() === 'admin' ? 'admin' : 'user'
//           });

//           this.router.navigate(['/dashboard']);
//         }

//         // 🔴 hide loader after work is done
//         this.loaderService.hide();
//       },

//       error: () => {
//         this.loaderService.hide();
//         this.notificationService.showError('Something went wrong');
//       }
//     });

//   }, 2000); // 👈 2 seconds delay
// }

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