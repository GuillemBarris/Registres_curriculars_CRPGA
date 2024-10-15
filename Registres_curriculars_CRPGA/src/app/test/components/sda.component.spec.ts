import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdaComponent } from '../../components/sda/sda.component';

describe('SdaComponent', () => {
  let component: SdaComponent;
  let fixture: ComponentFixture<SdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create the first div', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const div = compiled.querySelector('div');
    expect(div).toBeTruthy();
  });
  it('should have an <a> tag inside the first div with correct content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const div = compiled.querySelector('div');
    const anchor = div?.querySelector('a');
    expect(anchor).toBeTruthy();
    expect(anchor?.innerHTML).toContain('⇦');
});
  
});
