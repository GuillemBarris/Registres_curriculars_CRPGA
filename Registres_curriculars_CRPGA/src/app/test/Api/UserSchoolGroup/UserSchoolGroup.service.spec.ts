import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserSchoolGroupService } from '../../../services/UserSchoolGroup.service';

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

        const req = httpMock.expectOne(`${service['dbUrl']}/groups`);
        expect(req.request.method).toBe('GET');
        req.flush(mockGroups);
    });

});