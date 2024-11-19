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
  it('should have the google login interface g_id_onload', () => {
    const div = fixture.nativeElement.querySelector('.g_id_signin');
    expect(div).toBeTruthy();  
  });
  
  it('should have the sign in script', () => {
    const script = fixture.nativeElement.querySelector('script');
    expect(script).toBeTruthy();  
   });
  
  
} );


