import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private dbUrl = 'http://172.23.1.7:3000'; // Placeholder URL for the database API

  constructor(private http: HttpClient) {}

  isUserRegistered(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.dbUrl}/users?email=${email}`);
  }
}