import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

declare const google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('843785544318-q6aq282t6fp30ooq8576nua88tp4nvmi.apps.googleusercontent.com'), 
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private userService: UserService,
  ) {}
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      console.log(user);
      this.initializeGoogleSignIn();
      
      /*if (this.isGoogleAPILoaded()) {
        
      } else {
        console.error('Google API failed to load.');
      }*/
    });
  }

  private isGoogleAPILoaded(): boolean {
    return typeof google !== 'undefined' && google.accounts;
  }

  private initializeGoogleSignIn(): void {
    google.accounts.id.initialize({
      client_id: '843785544318-q6aq282t6fp30ooq8576nua88tp4nvmi.apps.googleusercontent.com',
      callback: this.handleOauthResponse.bind(this),
    });

    google.accounts.id.renderButton(document.getElementById('g_id_signin'), {
      theme: 'outline',
      size: 'large',
    });
  }

  handleOauthResponse(response: any): void {
    try {
      const responsePayload = this.decodeJWTToken(response.credential);
      console.log('Decoded JWT Payload:', responsePayload);

      this.userService.isUserRegistered(responsePayload.email).subscribe({
        next: (isRegistered: boolean) => {
          if (isRegistered) {
            this.storeUserSession(responsePayload);
            this.router.navigate(['/registres-u']);
          } else {
            alert('User is not registered.');
          }
        },
        error: (err: any) => {
          console.error('Error checking user registration:', err);
          alert('An error occurred while verifying user registration. Please try again later.');
        },
      });
    } catch (error) {
      console.error('Error handling OAuth response:', error);
      alert('Invalid login response. Please try again.');
    }
  }



  private decodeJWTToken(token: string): any {
    try {
      const base64Payload = token.split('.')[1];
      const payload = atob(base64Payload);
      return JSON.parse(payload);
    } catch (error) {
      throw new Error('Invalid JWT token format.');
    }
  }

  private storeUserSession(payload: any): void {
    sessionStorage.setItem('loggedinUser', JSON.stringify(payload));
    localStorage.setItem('email', payload.email);
  }
}
