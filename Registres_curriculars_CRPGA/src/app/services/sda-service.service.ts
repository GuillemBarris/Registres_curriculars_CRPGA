import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SdaServiceService {
  private dbUrl = 'http://172.21.46.184:3000/api/v1/sda';

  constructor(private http: HttpClient) {}

  getSdaFromCourse(courseId: number) {
    return this.http.get<any>(
      `${this.dbUrl}/getSdaFromCourse/?courseId=${courseId}`
    );
  }
  postSda(sda: any): Observable<any> {
    return this.http.post<any>(`${this.dbUrl}/createSda/`, sda).pipe(
      catchError((err) => {
        console.error('Error adding SDA:', err);
        return of(null);
      })
    );
  }
}
