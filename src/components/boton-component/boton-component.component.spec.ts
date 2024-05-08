import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonComponentComponent } from './boton-component.component';

describe('BotonComponentComponent', () => {
  let component: BotonComponentComponent;
  let fixture: ComponentFixture<BotonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
