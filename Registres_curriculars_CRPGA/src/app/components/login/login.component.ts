import { Component } from '@angular/core';

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
    Autentification(){
        return true;
    }

    handleOauthResponse(response: any) {
        const responsePayload = this.decodeJWTToken(response.credential);
        console.log(responsePayload);
        sessionStorage.setItem('loggedinUser', JSON.stringify(responsePayload));
        if (this.isUserRegistered(responsePayload.email)) {
            window.location.href = '/registres-u';
        } else {
            window.location.href = '/register';
        }
    }

    decodeJWTToken(token: string) {
        return JSON.parse(atob(token.split(".")[1]));
    }

    isUserRegistered(email: string) {
        const mockDatabase = ['user1@example.com', 'user2@example.com'];
        return mockDatabase.includes(email);
    }
}