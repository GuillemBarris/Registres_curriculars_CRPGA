
import { Component, OnInit } from '@angular/core';
import { UserSchoolGroupService } from '../../services/UserSchoolGroupService';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-user-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-user-register.component.html',
  styleUrl: './admin-user-register.component.css'
})
export class AdminUserRegisterComponent implements OnInit {
  groups: any[] = [];
  subjects: any[] = [];
  grades: any[] = [];
  gradeGroupSubject: any[] = [{}];
  name: string = '';
  email: string = '';
  constructor(private userSchoolGroupService: UserSchoolGroupService, private userService: UserService) {}

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
    this.userSchoolGroupService.getGrades().subscribe(
      (data) => {
        this.grades = data.map((item: any) => item.Grade);
      },
      (error) => {
        console.error('Error fetching grades', error);
      }
    );

  }
  createGradeGroupSubject() {
    this.gradeGroupSubject.push({});  }
    createUser() {
      const  newUser = {
         "name": this.name,
         "email": this.email,
         "type": "teacher",
 
       }
       this.userService.postUser(newUser).subscribe(
         (data) => {
           console.log('User added successfully', data);
         },
         (error) => {
           console.error('Error adding user', error);
         }
       );
     }
}