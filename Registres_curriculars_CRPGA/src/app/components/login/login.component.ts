import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], 
})
export class LoginComponent {
  constructor(private databaseService: DatabaseService, private router: Router) {}

  handleOauthResponse(response: any): void {
    try {
      const responsePayload = this.decodeJWTToken(response.credential);
      console.log('Decoded JWT Payload:', responsePayload);

      sessionStorage.setItem('loggedinUser', JSON.stringify(responsePayload));

      this.databaseService.isUserRegistered(responsePayload.email).subscribe({
        next: (isRegistered) => {
          if (isRegistered) {
            this.router.navigate(['/registres-u']);
          } else {
            this.router.navigate(['/register']);
          }
        },
        error: (err) => {
          console.error('Error checking user registration:', err);
          alert('An error occurred. Please try again later.');
        },
      });
    } catch (error) {
      console.error('Error handling OAuth response:', error);
      alert('Invalid login response. Please try again.');
    }
  }

   decodeJWTToken(token: string): any {
    try {
      const base64Payload = token.split('.')[1];
      const payload = atob(base64Payload);
      return JSON.parse(payload);
    } catch (error) {
      throw new Error('Invalid JWT token format.');
    }
  }
}
