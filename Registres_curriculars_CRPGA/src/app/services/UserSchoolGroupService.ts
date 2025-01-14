import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from 'rxjs';
@Injectable({
    providedIn:'root'
})
export class UserSchoolGroupService {
    private dbUrl = 'http://172.21.46.184:3000/api/v1/userSchoolGroup';

    private dbUrl2 = 'http://172.21.46.184:3000/api/v1/courses';

    constructor(private http: HttpClient) {}

    getGroups(): Observable<any> {
        return this.http.get<any>(`${this.dbUrl2}/getGroup/?school=Escola Pia Olot`);
    }
    getSubjects(): Observable<any> {
        return this.http.get<any>(`${this.dbUrl}/getSubject/`);
    }
    getGrades(): Observable<any> {
        return this.http.get<any>(`${this.dbUrl2}/getGrade/?school=Escola Pia Olot`);
    }
    getCourseIdFromMail(email: string): Observable<any> {
        return this.http.get<any>(`${this.dbUrl}/getCoursesFromTeacher/?teacher=${email}`);
    }
    postUserSchoolGroup(user: any): Observable<any> {
        return this.http.post<any>(`${this.dbUrl}/createUserSchoolGroup/`, user).pipe(
          catchError((err) => {
            console.error('Error adding user:', err);
            return of(null);
          })
        );
      }
}