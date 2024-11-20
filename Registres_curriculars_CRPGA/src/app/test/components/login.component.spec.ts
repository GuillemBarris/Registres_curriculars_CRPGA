import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from '../../components/login/login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
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

 



  it('should have the google login interface g_id_onload', () => {
    const div = fixture.nativeElement.querySelector('.g_id_signin');
    expect(div).toBeTruthy();
  });
});
