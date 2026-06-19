import { Component, inject } from '@angular/core';
import { GradeCalculator } from '../../../../../dist/angular-coding-resources'

@Component({
  selector: 'app-grade-calculator-test',
  imports: [],
  templateUrl: './grade-calculator-test.html',
  styleUrl: './grade-calculator-test.scss',
})
export class GradeCalculatorTest {

  calc = inject(GradeCalculator);

}
