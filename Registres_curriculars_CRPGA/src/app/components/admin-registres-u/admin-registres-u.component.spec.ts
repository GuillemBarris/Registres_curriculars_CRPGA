import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegistresUComponent } from './admin-registres-u.component';

describe('AdminRegistresUComponent', () => {
  let component: AdminRegistresUComponent;
  let fixture: ComponentFixture<AdminRegistresUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRegistresUComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRegistresUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
