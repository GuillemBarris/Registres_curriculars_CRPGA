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
  it('should add new Name', async () => {
    const classInput = fixture.debugElement.query(By.css('input[placeholder="Nom"]'));
    classInput.nativeElement.value = 'Eric';
    classInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    await fixture.whenStable();
    expect(classInput.nativeElement.value).toBe('Eric');
    
  });
  
});
