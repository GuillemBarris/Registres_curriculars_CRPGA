import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private dbUrl = 'http://172.23.1.7:3000'; 

  constructor(private http: HttpClient) {}

  isUserRegistered(email: string): Observable<boolean> {
    const params = new HttpParams().set('email', email); 
    return this.http.get<any[]>(`${this.dbUrl}/users`, { params }).pipe(
      map(users => users.length > 0), 
      catchError(err => {
        console.error('Error checking user registration:', err);
        return of(false); 
      })
    );
  }
}
