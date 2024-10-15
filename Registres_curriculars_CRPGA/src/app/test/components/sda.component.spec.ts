import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdaComponent } from '../../components/sda/sda.component';

describe('SdaComponent', () => {
  let component: SdaComponent;
  let fixture: ComponentFixture<SdaComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdaComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
   
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create the Html', () => {
    
    const div = compiled.querySelector('div');
    const p = div?.querySelector('p');
    expect(div).toBeTruthy();
    const anchor = div?.querySelector('a');
    expect(anchor).toBeTruthy();
    expect(anchor?.innerHTML).toContain('⇦');
    expect(p).toBeTruthy();
    expect(p?.textContent).toContain('Usuari');
    
  });
  
});
