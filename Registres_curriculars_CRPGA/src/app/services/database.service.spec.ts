import { TestBed } from '@angular/core/testing';

import { DatabaseService } from './database.service';
import { LoginComponent } from '../components/login/login.component';

describe('DatabaseService', () => {
  let service: DatabaseService;
  let component: any; // Replace 'any' with the actual component type if known

  beforeEach(() => {
    service = TestBed.inject(DatabaseService);
    component = TestBed.createComponent(LoginComponent).componentInstance; // Replace 'YourComponent' with the actual component class
    service = TestBed.inject(DatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should handle OAuth response and redirect correctly', () => {
    spyOn(component, 'decodeJWTToken').and.returnValue({ email: 'user1@example.com' });
    spyOn(component, 'isUserRegistered').and.returnValue(true);
  
    const locationSpy = jasmine.createSpy();
    Object.defineProperty(window, 'location', {
      value: { href: locationSpy }
    });
  
    const response = { credential: 'dummy_token' };
    component.handleOauthResponse(response);
  
    expect(locationSpy).toHaveBeenCalledWith('/registres-u');
  });
  
  it('should handle OAuth response and redirect to register if user is not registered', () => {
    spyOn(component, 'decodeJWTToken').and.returnValue({ email: 'newuser@example.com' });
    spyOn(component, 'isUserRegistered').and.returnValue(false);
  
    const locationSpy = jasmine.createSpy();
    Object.defineProperty(window, 'location', {
      value: { href: locationSpy }
    });
  
    const response = { credential: 'dummy_token' };
    component.handleOauthResponse(response);
  
    expect(locationSpy).toHaveBeenCalledWith('/register');
  });
});
