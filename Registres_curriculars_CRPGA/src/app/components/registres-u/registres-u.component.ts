import { Component } from '@angular/core';
import { SdaServiceService } from '../../services/sda-service.service';
import { UserSchoolGroupService } from '../../services/UserSchoolGroupService';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registres-u',
  standalone: true,
  imports: [CommonModule],
  providers: [SdaServiceService, UserSchoolGroupService],
  templateUrl: './registres-u.component.html',
  styleUrl: './registres-u.component.css'
})
export class RegistresUComponent {

  sdaList: any;
  email: any;
  constructor(private userSchoolGroupService: UserSchoolGroupService, private sdaService: SdaServiceService, private router: Router) {}

  ngOnInit() {

    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem('key', 'value');
      this.email = localStorage.getItem('email');
    }    
  }

  getCourseIdFromMail(email: string) {
    this.userSchoolGroupService.getCourseIdFromMail(email).subscribe((response) => {
      this.sdaService.getSdaFromCourse(response.courseId).subscribe((response) => {
        console.log(response);
      });
    });
  }

  getSdaFromCourse(courseId: number) {
    this.sdaService.getSdaFromCourse(courseId).subscribe((response) => {
      console.log(response);
    });
  }
  navigateToFormSda() {
    this.router.navigate(['form-sda']);
  }
}


    

  