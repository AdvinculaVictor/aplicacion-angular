import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonContadorComponentComponent } from './boton-contador-component.component';

describe('BotonContadorComponentComponent', () => {
  let component: BotonContadorComponentComponent;
  let fixture: ComponentFixture<BotonContadorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonContadorComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotonContadorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
