import { TestBed } from '@angular/core/testing';
import { SdaServiceService } from '../../../services/sda-service.service';



describe('SdaServiceService', () => {
  let service: SdaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch the courses of a specific user from its email' , () => {
    const email = 'example@gmail.com';
    const expectedCourses = ['course1', 'course2'];
    
    const httpSpy = spyOn(service.http, 'get').and.returnValue(of(expectedCourses));

    service.getCourses(email).subscribe((courses) => {
      expect(courses).toEqual(expectedCourses);
      expect(httpSpy).toHaveBeenCalledWith(`${service.dbUrl}/courses/${email}`);
    });
  } );
  
});
