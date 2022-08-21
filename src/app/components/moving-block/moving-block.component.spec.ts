import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingBlockComponent } from './moving-block.component';

describe('MovingBlockComponent', () => {
  let component: MovingBlockComponent;
  let fixture: ComponentFixture<MovingBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovingBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
