import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.currentUser$.subscribe(user => {
      this.user = user;
    });
  }
}
