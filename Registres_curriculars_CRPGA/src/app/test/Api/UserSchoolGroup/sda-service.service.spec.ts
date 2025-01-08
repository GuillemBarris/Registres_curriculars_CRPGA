import { TestBed } from '@angular/core/testing';
import { SdaServiceService } from '../../../services/sda-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserSchoolGroupService } from '../../../services/UserSchoolGroupService';
import { of } from 'rxjs';

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
    httpMock.verify(); // Ensures no unmatched requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch the SDAs of a specific course using the getCourseIdFromMail from UserSchoolGroupService', () => {
    const email = 'example@gmail.com';
    const mockCourseResponse = { courseId: 1, courseName: 'Course1' };
    const mockSdaResponse = { sda: 'sda1' };

    // Mock UserSchoolGroupService's getCourseIdFromMail
    spyOn(userSchoolGroupService, 'getCourseIdFromMail').and.returnValue(of(mockCourseResponse));

    // Call service method and verify responses
    service.getSdaFromCourse(mockCourseResponse.courseId).subscribe((response) => {
      expect(response).toEqual(mockSdaResponse);
    });

    // Mock HTTP for SDA
    const sdaRequest = httpMock.expectOne(
      `http://172.21.46.184:3000/api/v1/getSdaFromCourse/?courseId=${mockCourseResponse.courseId}`
    );
    expect(sdaRequest.request.method).toBe('GET');
    sdaRequest.flush(mockSdaResponse); // Return mock SDA response
  });
});
