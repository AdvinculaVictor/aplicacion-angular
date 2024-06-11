import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumirApiADComponent } from './consumir-api-ad.component';

describe('ConsumirApiADComponent', () => {
  let component: ConsumirApiADComponent;
  let fixture: ComponentFixture<ConsumirApiADComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumirApiADComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumirApiADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
