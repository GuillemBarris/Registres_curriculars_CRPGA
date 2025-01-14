import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

declare const google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], 
})
  export class LoginComponent implements OnInit {
    constructor(private userService: UserService, private router: Router) {}
  
    ngOnInit(): void {
      google.accounts.id.initialize({
        client_id: '843785544318-q6aq282t6fp30ooq8576nua88tp4nvmi.apps.googleusercontent.com',
        callback: this.handleOauthResponse.bind(this),
      });
  
      google.accounts.id.renderButton(
        document.getElementById('g_id_signin'),
        {
          theme: 'outline',
          size: 'large',
        }
      );
    }
  
    handleOauthResponse(response: any): void {
      try {
        const responsePayload = this.decodeJWTToken(response.credential);
        console.log(responsePayload);
  
        this.userService.isUserRegistered(responsePayload.email).subscribe({
          next: (isRegistered) => {
            if (isRegistered) {
              sessionStorage.setItem('loggedinUser', JSON.stringify(responsePayload));
              localStorage.setItem('email', responsePayload.email);
              this.router.navigate(['/registres-u']);
            } else {
              alert('User is not registered.');
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
