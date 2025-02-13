import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistresUComponent } from '../../components/registres-u/registres-u.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegistresUComponent', () => {
  let component: RegistresUComponent;
  let fixture: ComponentFixture<RegistresUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistresUComponent, HttpClientTestingModule],
      providers: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistresUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('should create the interface', () => {
      const h1 = fixture.nativeElement.querySelector('h1');
      expect(h1.textContent).toBe('1r Primària Grup A');

      const greeting = fixture.nativeElement.querySelector('p');
      expect(greeting.textContent).toBe('Benvolgut, Eric');

      const user_icon = fixture.nativeElement.querySelector('img');
      expect(user_icon.src).toContain('assets/img/user.png');

      const h2 = fixture.nativeElement.querySelector('h2');
      expect(h2.textContent).toBe('Curs 2024-2025');

      const grid = fixture.nativeElement.querySelector('#grid');
      expect(grid).toBeTruthy();

      const grid_elements = fixture.nativeElement.querySelectorAll('.grid-element');
      expect(grid_elements.length).toBe(9);

      expect(grid_elements[0].textContent).toContain('');
      expect(grid_elements[0].href).toContain('http://localhost:4200/sda');
      expect(grid_elements[1].textContent).toContain('SDA2');
      expect(grid_elements[1].href).toContain('http://localhost:4200/sda');
      expect(grid_elements[2].textContent).toContain('SDA3');
      expect(grid_elements[2].href).toContain('http://localhost:4200/sda');
      expect(grid_elements[3].textContent).toContain('SDA4');
      expect(grid_elements[3].href).toContain('http://localhost:4200/sda');
      expect(grid_elements[4].textContent).toContain('SDA5');
      expect(grid_elements[4].href).toContain('http://localhost:4200/sda');
      expect(grid_elements[5].textContent).toContain('SDA6');
      expect(grid_elements[5].href).toContain('http://localhost:4200/sda');
      expect(grid_elements[6].textContent).toContain('SDA7');
      expect(grid_elements[6].href).toContain('http://localhost:4200/sda');
      expect(grid_elements[7].textContent).toContain('SDA8');
      expect(grid_elements[7].href).toContain('http://localhost:4200/sda');
      expect(grid_elements[8].textContent).toContain('Resum');
      expect(grid_elements[8].href).toContain('http://localhost:4200/summary');
      

      grid_elements.forEach((element: { querySelector: (arg0: string) => any; }) => {
        const img = element.querySelector('img');
        expect(img).toBeTruthy();
      });
      

      const images = fixture.nativeElement.querySelectorAll('img');
      images.forEach((image: { src: any; }, index: number) => {
        if (index === 0) {
          expect(image.src).toContain('assets/img/user.png');
        } else {
          expect(image.src).toContain('assets/img/registry.png');
        }
      });
  });  */

  it('should fetch the mail of the logged in user of the local storage', () => {
    const email = 'eric3romero@gmail.com';
    localStorage.setItem('email', email);
    component.ngOnInit();
    expect(component.email).toBe(email);
  });

  it('should get the SDAs of the user', () => {
    const email = 'eric3romero@gmail.com';
    localStorage.setItem('email', email);
    component.ngOnInit();
    component.getCourseIdFromMail(email);
    expect(component.email).toBe(email);

  });
  it('should have a button to navigate to page form-sda', () => {
    const navigateSpy = spyOn(component['router'], 'navigate');
    const button = fixture.debugElement.nativeElement.querySelector('button.navigate-to-form-sda');
    button.click();
    expect(navigateSpy).toHaveBeenCalledWith(['form-sda']);
  });

});
