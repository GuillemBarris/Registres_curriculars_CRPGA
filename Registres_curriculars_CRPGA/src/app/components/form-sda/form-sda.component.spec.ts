import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSdaComponent } from './form-sda.component';

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
});
