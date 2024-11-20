import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatabaseService } from './database.service';
import { of } from 'rxjs';
import { LoginComponent } from '../components/login/login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let databaseService: jasmine.SpyObj<DatabaseService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('DatabaseService', ['isUserRegistered']);

    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        { provide: DatabaseService, useValue: spy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    databaseService = TestBed.inject(DatabaseService) as jasmine.SpyObj<DatabaseService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a user icon image', () => {
    const img = fixture.nativeElement.querySelector('img[alt="User Icon"]');
    expect(img).toBeTruthy();
  });

  it('should have an email input field', () => {
    const input = fixture.nativeElement.querySelector('input[value="Correu"]');
    expect(input).toBeTruthy();
  });

  it('should have a password input field', () => {
    const input = fixture.nativeElement.querySelector('input[type="password"]');
    expect(input).toBeTruthy();
  });

  it('should have a login button', () => {
    const button = fixture.nativeElement.querySelector('.login-button');
    expect(button).toBeTruthy();
  });

  it('should decode JWT token correctly', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    const decoded = component.decodeJWTToken(token);
    expect(decoded.name).toBe('John Doe');
  });

  it('should handle OAuth response and redirect correctly', () => {
    spyOn(component, 'decodeJWTToken').and.returnValue({ email: 'user1@example.com' });
    databaseService.isUserRegistered.and.returnValue(of(true));
  
    const originalLocation = window.location.href;
    const locationSpy = spyOnProperty(window.location, 'href', 'set').and.callFake((url: string) => {
      expect(url).toBe('/registres-u');
    });
  
    const response = { credential: 'dummy_token' };
    component.handleOauthResponse(response);
  
    expect(locationSpy).toHaveBeenCalledWith('/registres-u');
    window.location.href = originalLocation; 
  });
  
  it('should handle OAuth response and redirect to register if user is not registered', () => {
    spyOn(component, 'decodeJWTToken').and.returnValue({ email: 'newuser@example.com' });
    databaseService.isUserRegistered.and.returnValue(of(false));
  
    const originalLocation = window.location.href;
    const locationSpy = spyOnProperty(window.location, 'href', 'set').and.callFake((url: string) => {
      expect(url).toBe('/register');
    });
  
    const response = { credential: 'dummy_token' };
    component.handleOauthResponse(response);
  
    expect(locationSpy).toHaveBeenCalledWith('/register');
    window.location.href = originalLocation; 
  });

  it('The user should authenticate correctly', () => {
    expect(component.Autentification()).toBe(true);
  });

  it('should have the google login interface g_id_onload', () => {
    const div = fixture.nativeElement.querySelector('.g_id_signin');
    expect(div).toBeTruthy();
  });
});