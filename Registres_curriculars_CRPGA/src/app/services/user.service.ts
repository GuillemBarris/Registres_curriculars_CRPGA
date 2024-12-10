import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private dbUrl = 'http://172.21.46.184:3000/api/v1/users'; 

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.dbUrl}/getAllUsers/`).pipe(
      retry(3), 
      map((res) => res || []), 
      catchError((err) => {
        console.error('Error fetching users after retries:', err);
        return of([]);
      })
    );
  }

  isUserRegistered(email: string): Observable<boolean> {
    const url = `${this.dbUrl}/getUserbyEmail/`;
    const params = new HttpParams().set('email', email);
  
    return this.http.get<any[]>(url, { params }).pipe(
      map((res) => Array.isArray(res) && res.length > 0),
      catchError((err) => {
        console.error('Error checking user registration:', err);
        return of(false); 
      })
    );
  }
  postUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.dbUrl}/createUser/`, user).pipe(
      catchError((err) => {
        console.error('Error adding user:', err);
        return of(null);
      })
    );
  }
}