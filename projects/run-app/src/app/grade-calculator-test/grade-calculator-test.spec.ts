import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeCalculatorTest } from './grade-calculator-test';

describe('GradeCalculatorTest', () => {
  let component: GradeCalculatorTest;
  let fixture: ComponentFixture<GradeCalculatorTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeCalculatorTest],
    }).compileComponents();

    fixture = TestBed.createComponent(GradeCalculatorTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
