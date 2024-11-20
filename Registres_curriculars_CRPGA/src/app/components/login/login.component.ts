import { Component } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})

/*
Database credentials:
IP: 172.23.1.7
User: sa
Pass: G5m1i128
*/

export class LoginComponent {
    constructor(private databaseService: DatabaseService) {}
  
    Autentification() {
      return true;
    }
  
    handleOauthResponse(response: any) {
      const responsePayload = this.decodeJWTToken(response.credential);
      console.log(responsePayload);
      sessionStorage.setItem('loggedinUser', JSON.stringify(responsePayload));
      this.databaseService.isUserRegistered(responsePayload.email).subscribe((isRegistered) => {
        if (isRegistered) {
          window.location.href = '/registres-u';
        } else {
          window.location.href = '/register';
        }
      });
    }
  
    decodeJWTToken(token: string) {
      return JSON.parse(atob(token.split(".")[1]));
    }
  }