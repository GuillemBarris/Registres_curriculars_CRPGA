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

  it('should only toggle the specific dropdown container', () => {
    const dropdownId1 = 'dropdown1';
    const dropdownId2 = 'dropdown2';
    const button1 = fixture.debugElement.query(By.css(`#${dropdownId1} button`));
    const button2 = fixture.debugElement.query(By.css(`#${dropdownId2} button`));

    expect(component.isDropdownVisible(dropdownId1)).toBeFalse();
    expect(component.isDropdownVisible(dropdownId2)).toBeFalse();

    button1.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isDropdownVisible(dropdownId1)).toBeTrue();
    expect(component.isDropdownVisible(dropdownId2)).toBeFalse();

    button2.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isDropdownVisible(dropdownId1)).toBeTrue();
    expect(component.isDropdownVisible(dropdownId2)).toBeTrue();

    button1.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isDropdownVisible(dropdownId1)).toBeFalse();
    expect(component.isDropdownVisible(dropdownId2)).toBeTrue();
  });

  
});
