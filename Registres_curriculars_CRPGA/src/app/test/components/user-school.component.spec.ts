import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserSchoolComponent } from '../../components/user-school/user-school.component';

describe('UserSchoolComponent', () => {
  let component: UserSchoolComponent;
  let fixture: ComponentFixture<UserSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSchoolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSchoolComponent);
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

  it('should create new Class when button is clicked', () => {
    const createButton = fixture.debugElement.query(By.css('button[class="clicked"]'));
    spyOn(component, 'createNewClass');
    createButton.nativeElement.click();
    fixture.detectChanges();
    expect(component.createNewClass).toHaveBeenCalled();
  })

});