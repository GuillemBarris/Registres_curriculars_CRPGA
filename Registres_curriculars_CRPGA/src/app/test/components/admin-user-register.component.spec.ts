import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AdminUserRegisterComponent} from '../../components/admin-user-register/admin-user-register.component';

describe('UserSchoolComponent', () => {
  let component: AdminUserRegisterComponent;
  let fixture: ComponentFixture<AdminUserRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUserRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUserRegisterComponent);
    component = fixture.componentInstance;
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

  it('should add new Class', () => {
    const classSelect = fixture.debugElement.query(By.css('select[placeholder="Classe"]'));
    classSelect.nativeElement.value = '1r';
    classSelect.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(classSelect.nativeElement.value).toBe('1r');
  });

  it('should add new Group',()=> {
   const grupSelect = fixture.debugElement.query(By.css('select[placeholder="Grup"]'));
    grupSelect.nativeElement.value = 'A';
    grupSelect.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(grupSelect.nativeElement.value).toBe('A');
  });

  it('should add new Subject', () => {
    const schoolSelect = fixture.debugElement.query(By.css('select[placeholder="Assignatura"]'));
    schoolSelect.nativeElement.value = 'Matemàtiques';
    schoolSelect.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(schoolSelect.nativeElement.value).toBe('Matemàtiques');
  });


});