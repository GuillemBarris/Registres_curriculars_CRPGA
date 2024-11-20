import { TestBed } from '@angular/core/testing';
import { LoginComponent } from '../components/login/login.component';
import { DatabaseService } from './database.service';
import { provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('DatabaseService', () => {
  let service: DatabaseService;
  let component: LoginComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoginComponent], 
      providers: [
        DatabaseService,              
        provideHttpClient(),          
      ]
    });

    service = TestBed.inject(DatabaseService); 
    component = TestBed.createComponent(LoginComponent).componentInstance; 
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); 
  });

  it('should handle OAuth response and redirect correctly', () => {
    spyOn(component, 'decodeJWTToken').and.returnValue({ email: 'user1@example.com' });
    spyOn(service, 'isUserRegistered').and.returnValue(of(true));

    // Mocking window.location using Object.defineProperty
    const locationSpy = jasmine.createSpyObj('Location', ['assign']);
    Object.defineProperty(window, 'location', {
      value: locationSpy,
      writable: true // Ensure it can be assigned in the test
    });

    const response = { credential: 'dummy_token' };
    component.handleOauthResponse(response);

    expect(locationSpy.assign).toHaveBeenCalledWith('/registres-u');
  });

  it('should handle OAuth response and redirect to register if user is not registered', () => {
    spyOn(component, 'decodeJWTToken').and.returnValue({ email: 'newuser@example.com' });
    spyOn(service, 'isUserRegistered').and.returnValue(of(false));

    // Mocking window.location using Object.defineProperty
    const locationSpy = jasmine.createSpyObj('Location', ['assign']);
    Object.defineProperty(window, 'location', {
      value: locationSpy,
      writable: true // Ensure it can be assigned in the test
    });

    const response = { credential: 'dummy_token' };
    component.handleOauthResponse(response);

    expect(locationSpy.assign).toHaveBeenCalledWith('/register');
  });
});
