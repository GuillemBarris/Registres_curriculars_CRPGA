import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdaComponent } from '../../components/sda/sda.component';

describe('SdaComponent', () => {
  let component: SdaComponent;
  let fixture: ComponentFixture<SdaComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SdaComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create the Header', () => {
    const div = compiled.querySelector('.header');
    const p = div?.querySelector('p');
    const anchor = div?.querySelector('a');
    expect(div).toBeTruthy();

    expect(anchor).toBeTruthy();
    expect(anchor?.innerHTML).toContain('⇦');
    expect(p).toBeTruthy();
    expect(p?.textContent).toContain('Usuari');
  });
  it('should create input Title', () => {
    const div = compiled.querySelectorAll('.content-input')[0];
    const p = div.querySelectorAll('p')[0];
    const input = div.querySelector('input');
    expect(div).toBeTruthy();
    expect(p).toBeTruthy();
    expect(p.textContent).toContain('Títol');
    expect(input).toBeTruthy();
    expect(input?.getAttribute('value')).toContain('Títol');
  });
  it('should create input Start Date', () => {
    const div = compiled.querySelectorAll('.content-input')[1];
    const p = div.querySelectorAll('p')[0];
    const input = div.querySelector('input');
    expect(div).toBeTruthy();
    expect(p).toBeTruthy();
    expect(p.textContent).toContain('Data inici');
    expect(input).toBeTruthy();
    expect(input?.getAttribute('type')).toBe('date');
   
  });
  it('should create input Description', () => {
    const div = compiled.querySelectorAll('.content-input')[2];
    const p = div.querySelectorAll('p')[0];
    const input = div.querySelector('input');
    expect(div).toBeTruthy();
    expect(p).toBeTruthy();
    expect(p.textContent).toContain('Descripció');
    expect(input).toBeTruthy();
    expect(input?.getAttribute('value')).toContain('Descripció');
  });
  it('should create input End Date', () => {
    const div = compiled.querySelectorAll('.content-input')[3];
    const p = div.querySelectorAll('p')[0];
    const input = div.querySelector('input');
    expect(div).toBeTruthy();
    expect(p).toBeTruthy();
    expect(p.textContent).toContain('Data fi');
    expect(input).toBeTruthy();
    expect(input?.getAttribute('type')).toBe('date');
    

  });
  it('should create input Link', () => {
    const div = compiled.querySelectorAll('.content-input')[4];
    const p = div.querySelectorAll('p')[0];
    const input = div.querySelector('input');
    expect(div).toBeTruthy();
    expect(p).toBeTruthy();
    expect(p.textContent).toContain('Link');
    expect(input).toBeTruthy();
    expect(input?.getAttribute('value')).toContain('Link');
  });
  
  
});