import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredCircleTest } from './colored-circle-test';

describe('ColoredCircleTest', () => {
  let component: ColoredCircleTest;
  let fixture: ComponentFixture<ColoredCircleTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColoredCircleTest],
    }).compileComponents();

    fixture = TestBed.createComponent(ColoredCircleTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
