import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private user = {
    username: 'Sparsh',
    role: 'admin' // change to 'user' to test guard
  };

  getUser() {
    return this.user;
  }

  isAdmin(): boolean {
    return this.user.role === 'admin';
  }
}
