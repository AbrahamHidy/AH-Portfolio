import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingInfoComponent } from './floating-info.component';

describe('FloatingInfoComponent', () => {
  let component: FloatingInfoComponent;
  let fixture: ComponentFixture<FloatingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
