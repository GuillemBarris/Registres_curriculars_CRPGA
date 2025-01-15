import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class SkillsSdaService {
    private url = 'http://172.21.46.184:3000/api/v1/skillsSda/';

    constructor(private http: HttpClient) {}

    postSkillSda(skillSda: any) {
        return this.http.post<any>(`${this.url}createSkillsSda/`, skillSda).pipe(
            catchError((err) => {
                console.error('Error adding SDA:', err);
                return of(null);
              })
        );
    }
}