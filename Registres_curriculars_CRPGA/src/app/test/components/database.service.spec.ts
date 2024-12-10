import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { DatabaseService } from '../../services/database.service';

describe('DatabaseService', () => {
  let service: DatabaseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [DatabaseService, provideHttpClientTesting()],
    });
    service = TestBed.inject(DatabaseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true if user is registered', () => {
    const dummyResponse = [{ email: 'test@example.com' }];
    service.isUserRegistered('test@example.com').subscribe((isRegistered) => {
        expect(isRegistered).toBeTrue();
    });

    const req = httpMock.expectOne(`${service['dbUrl']}/getUserbyEmail/?email=test@example.com`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
});

it('should return false if user is not registered', () => {
    const dummyResponse: any[] = [];
    service.isUserRegistered('notregistered@example.com').subscribe((isRegistered) => {
        expect(isRegistered).toBeFalse();
    });

    const req = httpMock.expectOne(`${service['dbUrl']}/getUserbyEmail/?email=notregistered@example.com`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
});

it('should handle error and return false', () => {
    service.isUserRegistered('error@example.com').subscribe((isRegistered) => {
        expect(isRegistered).toBeFalse();
    });

    const req = httpMock.expectOne(`${service['dbUrl']}/getUserbyEmail/?email=error@example.com`);
    expect(req.request.method).toBe('GET');
    req.error(new ErrorEvent('Network error'));
});

});