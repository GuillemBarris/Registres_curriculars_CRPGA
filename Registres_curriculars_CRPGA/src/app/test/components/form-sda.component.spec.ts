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

 it('should add new Description', () => {
    const descriptionInput = fixture.debugElement.query(By.css('input[placeholder="Descripció"]'));
    descriptionInput.nativeElement.value = 'SDA';
    descriptionInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(descriptionInput.nativeElement.value).toBe('SDA');
 })
 
 it('should add new Link', () => {
  const linkInput = fixture.debugElement.query(By.css('input[placeholder="Enllaç"]'));
  linkInput.nativeElement.value = 'http://localhost:4200/sda';
  linkInput.nativeElement.dispatchEvent(new Event('input'));
  fixture.detectChanges();
  expect(linkInput.nativeElement.value).toBe('http://localhost:4200/sda');
 })

 it('should add new startDate', () => {
  const startDateInput = fixture.debugElement.query(By.css('input[placeholder="Data d\'inici"]'));
  startDateInput.nativeElement.value = '2021-07-01';
  startDateInput.nativeElement.dispatchEvent(new Event('input'));
  fixture.detectChanges();
  expect(startDateInput.nativeElement.value).toBe('2021-07-01');
 });

 it('should add new endDate', ()=> {
  const endDateInput = fixture.debugElement.query(By.css('input[placeholder="Data de finalització"]'));
  endDateInput.nativeElement.value = '2021-07-01';
  endDateInput.nativeElement.dispatchEvent(new Event('input'));
  fixture.detectChanges();
  expect(endDateInput.nativeElement.value).toBe('2021-07-01');
 })

});
