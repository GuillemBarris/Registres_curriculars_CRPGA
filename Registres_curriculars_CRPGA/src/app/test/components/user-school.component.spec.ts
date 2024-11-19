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
    const classInput = fixture.debugElement.query(By.css('input[placeholder="Classe"]'));
    classInput.nativeElement.value = '1r';
    classInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(classInput.nativeElement.value).toBe('1r');
  })
});