import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-validation-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.css']
})
export class ValidationFormComponent {

  // FormGroup = poora form
  profileForm = new FormGroup({

    // Name field
    name: new FormControl('', [
      Validators.required,       // field empty nahi ho sakta
      Validators.minLength(3)     // kam se kam 3 characters
    ]),

    // Email field
    email: new FormControl('', [
      Validators.required,       // email required
      Validators.email           // valid email format
    ]),

    // Password field
    password: new FormControl('', [
      Validators.required,       // password required
      Validators.minLength(6)     // minimum 6 characters
    ])
  });

  // Submit button par call hota hai
  submitData() {

    // Agar form invalid hai
    if (this.profileForm.invalid) {

      // Saare fields ko touched mark karo
      // taaki saare errors dikh jaaye
      this.profileForm.markAllAsTouched();
      return;
    }

    // Agar form valid hai
    console.log(this.profileForm.value);
  }

  // ===== GETTERS (HTML clean rakhne ke liye) =====

  get name() {
    return this.profileForm.get('name');
  }

  get email() {
    return this.profileForm.get('email');
  }

  get password() {
    return this.profileForm.get('password');
  }
}
