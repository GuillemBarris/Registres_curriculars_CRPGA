import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseService } from '../../services/database.service';


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

  constructor(private DatabaseService: DatabaseService) {}

  
}
