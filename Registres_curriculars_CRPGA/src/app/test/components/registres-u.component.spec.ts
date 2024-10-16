import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistresUComponent } from '../../components/registres-u/registres-u.component';

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

  it('should create the interface', () => {
      const h1 = fixture.nativeElement.querySelector('h1');
      expect(h1.textContent).toBe('1r Primària Grup A');

      const greeting = fixture.nativeElement.querySelector('p');
      expect(greeting.textContent).toBe('Benvolgut, Usuari');

      const user_icon = fixture.nativeElement.querySelector('img');
      expect(user_icon.src).toContain('assets/img/user.png');

      const h2 = fixture.nativeElement.querySelector('h2');
      expect(h2.textContent).toBe('Curs 2024-2025');

      const grid = fixture.nativeElement.querySelector('#grid');
      expect(grid).toBeTruthy();

      const grid_elements = fixture.nativeElement.querySelectorAll('.grid-element');
      expect(grid_elements.length).toBe(9);

      grid_elements.forEach((element: HTMLElement, index: number) => {
        const aTag = element.querySelector('a') as HTMLAnchorElement;
        expect(aTag).toBeTruthy();
        expect(aTag.href).toBe('http://localhost:4200/sda');
        expect(aTag.textContent).toContain(`SDA${index + 1}`);
      });
      
      

      const images = fixture.nativeElement.querySelectorAll('img');
      images.forEach((image: { src: any; }, index: number) => {
        if (index === 0) {
          expect(image.src).toContain('assets/img/user.png');
        } else {
          expect(image.src).toContain('assets/img/registry.png');
        }
      });
  });  
});
