import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSdaComponent } from '../../components/form-sda/form-sda.component';
import { By } from '@angular/platform-browser';

describe('FormSdaComponent', () => {
  let component: FormSdaComponent;
  let fixture: ComponentFixture<FormSdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSdaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should add new Title', () => {
    const titleInput = fixture.debugElement.query(By.css('input[placeholder="Títol"]'));
    titleInput.nativeElement.value = 'SDA';
    titleInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(titleInput.nativeElement.value).toBe('SDA');
});

});
