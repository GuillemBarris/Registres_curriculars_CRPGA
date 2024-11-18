import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from '../../components/login/login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('The user should authenticate correctly',() => {
    expect(component.Autentification()).toBe(true);
    
  });
  it('should a be clicked go to registres-u', () => {
    const a = fixture.debugElement.nativeElement.querySelector('a');
    expect(a.href).toContain('http://localhost:4200/registres-u');
  });

  it('should have the google login interface g_id_onload', () => {
    const div = fixture.nativeElement.querySelector('div');
    expect(div.id).toBe('g_id_onload');
    const div2 = fixture.nativeElement.querySelector('div');
    expect(div2.className).toBe('g_id_signin');
  });

  it('interface should have all the correct attributes', () => {
    const div = fixture.nativeElement.querySelector('div');
    expect(div.getAttribute('data-client_id')).toBe('843785544318-q6aq282t6fp30ooq8576nua88tp4nvmi.apps.googleusercontent.com'); 
    const Hdiv = fixture.nativeElement.querySelector('div');
    expect(Hdiv.getAttribute('data-callback')).toBe('handleOauthResponse');
  });
    
  });


