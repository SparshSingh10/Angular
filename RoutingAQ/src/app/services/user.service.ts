import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  name: string;
  role: 'admin' | 'user';
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/users';

  private currentUserSubject = new BehaviorSubject<User>({
    name: localStorage.getItem('userName') ?? 'Guest',
    role: localStorage.getItem('userRole') === 'admin' ? 'admin' : 'user'
  });

  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  setUser(user: User): void {
    localStorage.setItem('userName', user.name);
    localStorage.setItem('userRole', user.role);
    this.currentUserSubject.next(user);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  registerUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  logout(): void {
    localStorage.clear();
    this.currentUserSubject.next({ name: 'Guest', role: 'user' });
  }
}

// BIG PICTURE FLOW
// Register → Save user → Login → Set user → UI updates → Logout → Reset

// 1️⃣ App starts (very first time)
// What runs first?
// new BehaviorSubject<User>(this.getInitialUser());

// What happens:

// getInitialUser() runs

// Reads from localStorage

// If nothing saved:

// { name: 'Guest', role: 'user' }


// So the app starts in Guest mode.

// 2️⃣ Register flow 📝
// From Register Component
// this.userService.registerUser(formValue).subscribe(() => {
//   // registration done
// });

// What happens inside service?
// registerUser(user: any): Observable<any> {
//   return this.http.post(this.apiUrl, user);
// }


// 👉 User data is saved in backend
// (usually JSON server)

// ⚠️ IMPORTANT:

// Registration does NOT log the user in.

// It only stores data.

// 3️⃣ Login flow 🔐 (MOST IMPORTANT)
// In Login Component

// 1️⃣ User enters:

// name / email

// role

// 2️⃣ You validate user using backend:

// this.userService.getUsers().subscribe(users => {
//   const matchedUser = users.find(u => u.name === inputName);
// });


// 3️⃣ If user exists → LOGIN SUCCESS

// 4️⃣ What happens on successful login?
// this.userService.setUser(matchedUser);

// Inside setUser():
// localStorage.setItem('userName', user.name);
// localStorage.setItem('userRole', user.role);
// this.currentUserSubject.next(user);

// This does THREE things:

// 1️⃣ Saves user to browser
// 2️⃣ Updates BehaviorSubject
// 3️⃣ Notifies all components

// 5️⃣ How UI updates automatically 🎯

// Components are already listening:

// this.userService.currentUser$.subscribe(user => {
//   this.userName = user.name;
// });


// OR in template:

// {{ (currentUser$ | async)?.name }}


// So:

// Header updates

// Dashboard updates

// Admin menu appears/disappears

// WITHOUT page refresh.

// 6️⃣ Page refresh / browser reload 🔄
// What happens?

// App reloads

// Service runs again

// getInitialUser() reads localStorage

// User stays logged in

// That’s why we used localStorage.

// 7️⃣ Logout flow 🚪
// From any component
// this.userService.logout();

// Inside logout():
// localStorage.removeItem('userName');
// localStorage.removeItem('userRole');
// this.currentUserSubject.next({ name: 'Guest', role: 'user' });

// Result:

// User data removed

// BehaviorSubject updated

// UI goes back to Guest