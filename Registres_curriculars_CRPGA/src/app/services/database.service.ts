import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private dbUrl = 'http://172.21.46.184:3000'; 

  constructor(private http: HttpClient) {}

  isUserRegistered(email: string): Observable<boolean> {
    const url = `${this.dbUrl}/getUserbyEmail/`;
    const params = new HttpParams().set('email', email);


    return this.http.get(url, { params }).pipe(
      map((res: any) => {
        return res.length > 0;
      }),
      catchError((err) => {
        console.error(err);
        return of(false);
      })
    );     
  }
}