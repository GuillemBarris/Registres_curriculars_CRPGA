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
    
  })
  it('should a be clicked go to registres-u', () => {
    const a = fixture.debugElement.nativeElement.querySelector('a');
    expect(a.href).toContain('http://localhost:4200/registres-u');
  })
});
