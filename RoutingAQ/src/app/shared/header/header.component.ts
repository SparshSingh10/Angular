import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User | null = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.currentUser$.subscribe(user => {
      this.user = user;
    });
  }

  toggleRole(): void {
    if (this.user) {
      const newRole = this.user.role === 'admin' ? 'user' : 'admin';
      this.userService.setUser({ ...this.user, role: newRole });
    }
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.user?.name !== 'Guest';
  }
}
