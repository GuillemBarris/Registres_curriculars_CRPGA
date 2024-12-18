import { TestBed } from '@angular/core/testing';
import { SdaServiceService } from '../../../services/sda-service.service';
import { of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserSchoolGroupService } from '../../../services/UserSchoolGroupService';

describe('SdaServiceService', () => {
  let service: SdaServiceService;
  let userSchoolGroupService: UserSchoolGroupService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SdaServiceService, UserSchoolGroupService],
    });

    service = TestBed.inject(SdaServiceService);
    userSchoolGroupService = TestBed.inject(UserSchoolGroupService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch the SDAs of a specific course using the getCourseIdFromMail from UserSchoolGroupService', () => {
    const email = 'example@gmail.com';
    const mockResponse = { courseId: 1, courseName: 'Course1' };
    const sdaResponse = { sda: 'sda1' };

    spyOn(userSchoolGroupService, 'getCourseIdFromMail').and.returnValue(of(mockResponse));

    userSchoolGroupService.getCourseIdFromMail(email).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    service.getSdaFromCourse(1).subscribe((response) => {
      expect(response).toEqual(sdaResponse);
    });

    const request1 = httpMock.expectOne(
      `http://172.21.46.184:3000/api/v1/getCoursesFromTeacher/?email=${email}`
    );
    const request2 = httpMock.expectOne(
      `http://172.21.46.184:3000/api/v1/getSdaFromCourse/?courseId=1`
    );

    expect(request1.request.method).toBe('GET');
    request1.flush(mockResponse); 

    expect(request2.request.method).toBe('GET');
    request2.flush(sdaResponse); 
  });
});
