
import { Component, OnInit } from '@angular/core';
import { UserSchoolGroupService } from '../../services/UserSchoolGroupService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-user-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-user-register.component.html',
  styleUrl: './admin-user-register.component.css'
})
export class AdminUserRegisterComponent implements OnInit {
  groups: any[] = [];
  subjects: any[] = [];

  constructor(private userSchoolGroupService: UserSchoolGroupService) {}

  ngOnInit(): void {
    this.userSchoolGroupService.getGroups().subscribe(
      (data) => {
        this.groups = data.map((item: any) => item.Group);
      },
      (error) => {
        console.error('Error fetching groups', error);
      }
    );
    this.userSchoolGroupService.getSubjects().subscribe(
      (data) => {
       this.subjects = data.map((item: any) => item.Subject);
      },
      (error) => {
        console.error('Error fetching subjects', error);
      }
    );
  }
}