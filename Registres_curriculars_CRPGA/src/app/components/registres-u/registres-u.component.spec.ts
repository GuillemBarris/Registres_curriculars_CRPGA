import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistresUComponent } from './registres-u.component';

describe('RegistresUComponent', () => {
  let component: RegistresUComponent;
  let fixture: ComponentFixture<RegistresUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistresUComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistresUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
