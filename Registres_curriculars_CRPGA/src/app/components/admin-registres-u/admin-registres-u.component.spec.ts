import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegistresUComponent } from './admin-registres-u.component';
import { By } from '@angular/platform-browser';

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

  it('should toggle dropdown visibility when button is clicked', () => {
    const dropdownId = 'dropdown1';
    const button = fixture.debugElement.query(By.css(`#${dropdownId} button`));

    expect(component.isDropdownVisible(dropdownId)).toBeFalse();

    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isDropdownVisible(dropdownId)).toBeTrue();

    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isDropdownVisible(dropdownId)).toBeFalse();
  });

  
});
