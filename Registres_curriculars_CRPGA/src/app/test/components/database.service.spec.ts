import { TestBed } from '@angular/core/testing';
import { LoginComponent } from '../../components/login/login.component';
import { DatabaseService } from '../../services/database.service';
import { provideHttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { HttpTestingController } from '@angular/common/http/testing';

describe('DatabaseService', () => {
  let service: DatabaseService;
  let component: LoginComponent;
  let httpMock: HttpTestingController;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        DatabaseService,
        provideHttpClient(),
      ],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new DatabaseService(httpClientSpy as any);
    service = TestBed.inject(DatabaseService);
    component = TestBed.createComponent(LoginComponent).componentInstance;

    
  });

  afterEach(() => {
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false if the user does not exist', () => {
    const email = 'test@example.com';
    service.isUserRegistered(email).subscribe((result) => {
      expect(result).toBe(false);
    });

    const req = httpMock.expectOne(`${service['dbUrl']}/getAllUsers?email=${email}`);
    expect(req.request.method).toBe('GET');
    req.flush({ registered: false });
  });

  it('should handle errors gracefully', () => {
    const email = 'test@example.com';
    service.isUserRegistered(email).subscribe((result) => {
      expect(result).toBe(false);
    });

    const req = httpMock.expectOne(`${service['dbUrl']}/getAllUsers?email=${email}`);
    expect(req.request.method).toBe('GET');
    req.error(new ErrorEvent('Network error'));
  });
});
  