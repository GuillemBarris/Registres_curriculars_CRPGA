import { TestBed } from '@angular/core/testing';
import { SdaServiceService } from '../../../services/sda-service.service';
import { of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserSchoolGroupService } from '../../../services/UserSchoolGroupService';



describe('SdaServiceService', () => {
  let service: SdaServiceService;
  let service2: UserSchoolGroupService;
  let httpMock = TestBed.inject(HttpTestingController);

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule],
                providers: [SdaServiceService]
              });
    
    service = TestBed.inject(SdaServiceService);
    service2 = TestBed.inject(UserSchoolGroupService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch the SDAs of a specific course using the getCourseIdFromMail from UserSchoolGroupService' , () => {
    const email = 'example@gmail.com';
    const mockResponse = {courseId: 1, courseName: 'Course1'};
    const sdaResponse = {sda: 'sda1'};
    service2.getCourseIdFromMail(email).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });
    service.getSdaFromCourse(1).subscribe((response) => {
      expect(response).toEqual(sdaResponse);
    });

    const request = httpMock.expectOne(`http://172.21.46.184:3000/api/v1/getCoursesFromTeacher/?email=${email}`);
    const request2 = httpMock.expectOne(`http://172.21.46.184:3000/api/v1/getSdaFromCourse/?courseId=1`);
    expect(request.request.method).toBe('GET');
    expect(request2.request.method).toBe('GET');
    request.flush(mockResponse);
    request2.flush(sdaResponse);    
  });

    



  } );
  
});
