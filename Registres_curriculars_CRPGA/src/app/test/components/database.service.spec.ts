import { TestBed } from '@angular/core/testing';
import { LoginComponent } from '../../components/login/login.component';
import { DatabaseService } from '../../services/database.service';
import { provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('DatabaseService', () => {
  let service: DatabaseService;
  let component: LoginComponent;
  let originalLocation: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        DatabaseService,
        provideHttpClient(),
      ],
    });

    service = TestBed.inject(DatabaseService);
    component = TestBed.createComponent(LoginComponent).componentInstance;

    // Save the original location object
    originalLocation = window.location;
    Object.defineProperty(window, 'location', {
      value: { assign: jasmine.createSpy() }, // Mock only the assign method
      writable: true,
    });
  });

  afterEach(() => {
    // Restore the original location object
    Object.defineProperty(window, 'location', {
      value: originalLocation,
      writable: true,
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should handle OAuth response and redirect correctly', () => {
    spyOn(component, 'decodeJWTToken').and.returnValue({ email: 'user1@example.com' });
    spyOn(service, 'isUserRegistered').and.returnValue(of(true));

    const response = { credential: 'dummy_token' };
    component.handleOauthResponse(response);

    expect(window.location.assign).toHaveBeenCalledWith('/registres-u');
  });

  it('should handle OAuth response and redirect to register if user is not registered', () => {
    spyOn(component, 'decodeJWTToken').and.returnValue({ email: 'newuser@example.com' });
    spyOn(service, 'isUserRegistered').and.returnValue(of(false));

    const response = { credential: 'dummy_token' };
    component.handleOauthResponse(response);

    expect(window.location.assign).toHaveBeenCalledWith('/register');
  });
});