import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserSchoolGroupService } from '../../../services/UserSchoolGroupService';

describe('UserSchoolGroupService', () => {
    let service: UserSchoolGroupService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UserSchoolGroupService]
        });
        service = TestBed.inject(UserSchoolGroupService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('should fetch groups list', () => {
        const mockGroups = {
            "groups": [
                { "name": "A" },
                { "name": "B" },
                { "name": "C" }
            ]
        };

        service.getGroups().subscribe(groups => {
            expect(groups).toEqual(mockGroups);
        });

        const req = httpMock.expectOne(`${service['dbUrl2']}/getGroup/?school=Escola Pia Olot`);
        expect(req.request.method).toBe('GET');
        req.flush(mockGroups);
    });
    it('should fetch subjects list', () => {
        const mockSubjects = {
            "subjects": [
                { "name": "Angles" },
                { "name": "Matematiques" },
                { "name": "Historia" }
            ]
        };

        service.getSubjects().subscribe(subjects => {
            expect(subjects).toEqual(mockSubjects);
        });

        const req = httpMock.expectOne(`${service['dbUrl']}/getSubject/`);
        expect(req.request.method).toBe('GET');
        req.flush(mockSubjects);
    });
    it('should fetch grades list', () => {
        const mockClasses = {
            "classes": [
                { "name": "1r" },
                { "name": "2n" },
                { "name": "3r" }
            ]
        };

        service.getGrades().subscribe(Grades => {
            expect(Grades).toEqual(mockClasses);
        });

        const req = httpMock.expectOne(`${service['dbUrl2']}/getGrade/?school=Escola Pia Olot`);
        expect(req.request.method).toBe('GET');
        req.flush(mockClasses);
    });
    it('should send new userSchoolGroup to the database', () => {
        const newUser  = {
          "teacher": "test",
           "school": "test",
            "grade": "test",
            "group": "test",
            "subject": "test",
        };
      
        service.postUserSchoolGroup (newUser ).subscribe((response) => {
          expect(response).toEqual(newUser );
        });
      
        const req = httpMock.expectOne(`${service['dbUrl']}/createUserSchoolGroup/`);
        expect(req.request.method).toBe('POST');
      
        req.flush(newUser );
      });
});