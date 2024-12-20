import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SdaServiceService {

  private dbUrl = 'http://172.21.46.184:3000/api/v1'; 

  constructor(private http: HttpClient) {}

  getSdaFromCourse(courseId: number) {    
    return this.http.get<any>(`${this.dbUrl}/getSdaFromCourse/?courseId=${courseId}`);
  }

  
  
}
