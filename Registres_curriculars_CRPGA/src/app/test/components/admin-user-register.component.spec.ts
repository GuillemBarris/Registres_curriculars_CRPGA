import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AdminUserRegisterComponent} from '../../components/admin-user-register/admin-user-register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdminUserRegisterComponent', () => {
  let component: AdminUserRegisterComponent;
  let fixture: ComponentFixture<AdminUserRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUserRegisterComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUserRegisterComponent);
    component = fixture.componentInstance;
    component.groups = ['A', 'B', 'C'];
    component.subjects = ['Angles', 'Matematiques', 'Historia'];
    component.grades = ['1r', '2n', '3r'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add new Name', () => {
    const nameInput = fixture.debugElement.query(By.css('input[placeholder="Nom"]'));
    nameInput.nativeElement.value = 'Eric';
    nameInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(nameInput.nativeElement.value).toBe('Eric');
  });

  it('should add new Email', () => {
    const emailInput = fixture.debugElement.query(By.css('input[placeholder="Correu"]'));
    emailInput.nativeElement.value = 'eric@gmail.com';
    emailInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(emailInput.nativeElement.value).toBe('eric@gmail.com');
  });

  it('should add new Grade', () => {
    const gradeSelect = fixture.debugElement.query(By.css('select[placeholder="Classe"]'));
    gradeSelect.nativeElement.value = '1r';
    gradeSelect.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(gradeSelect.nativeElement.value).toBe('1r');
  });

  it('should add new Group', () => {
    const grupSelect = fixture.debugElement.query(By.css('select[placeholder="Grup"]'));
    grupSelect.nativeElement.value = 'A';
    grupSelect.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges(); 
    expect(grupSelect.nativeElement.value).toBe('A');
  });

  it('should add new Subject', () => {
    const schoolSelect = fixture.debugElement.query(By.css('select[placeholder="Assignatura"]'));
    schoolSelect.nativeElement.value = 'Angles';
    schoolSelect.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(schoolSelect.nativeElement.value).toBe('Angles');
  });

  it('should create a new Grade, Group and Subject', () => {
  
    expect(component.gradeGroupSubject.length).toBe(1);

    component.createGradeGroupSubject();

    expect(component.gradeGroupSubject.length).toBe(2);
    expect(component.gradeGroupSubject[0]).toEqual({});
  
  });
  it('should click button to create a new Grade, Group and Subject', () => {
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    fixture.detectChanges();
    expect(component.gradeGroupSubject.length).toBe(2);
  
  });
  it('should click button to create a new User', () => {
    spyOn(component, 'createUser');
    const button = fixture.nativeElement.querySelectorAll('button')[1];
    button.click();
    expect(component.createUser).toHaveBeenCalled();
  });
  

});