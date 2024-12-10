import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-admin-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-user-list.component.html',
  styleUrl: './admin-user-list.component.css'
})
export class AdminUserListComponent {

  ngOnInit(): void {
    this.loadUsers();
  }

  constructor(private UserService: UserService) {}

  users: any[] = [];


  loadUsers(): void {
    this.UserService.getUsers().subscribe({
      next: (data) => (this.users = data),
      error: (err) => console.error('Error fetching users:', err),
    });
  }

  editUser(user: any): void {
    console.log('Editing user:', user);
  }

  deleteUser(user: any): void {
    console.log('Deleting user:', user);
  }

  

}
