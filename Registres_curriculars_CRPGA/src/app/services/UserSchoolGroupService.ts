import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
@Injectable({
    providedIn:'root'
})
export class UserSchoolGroupService {
    private dbUrl = 'http://192.168.222.92:3000/api/v1/userSchoolGroup';

    constructor(private http: HttpClient) {}

    getGroups(): Observable<any> {
        return this.http.get<any>(`${this.dbUrl}/getGroup/`);
    }
}