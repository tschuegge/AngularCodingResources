import { Routes } from '@angular/router';
import { ColoredCircleTest } from './colored-circle-test/colored-circle-test';
import { GradeCalculatorTest } from './grade-calculator-test/grade-calculator-test';

export const routes: Routes = [
  { path: 'colored-circle', component: ColoredCircleTest },
  { path: 'grade-calculator', component: GradeCalculatorTest },
  { path: '', pathMatch: 'full', redirectTo: '/colored-circle' },
  { path: '**', redirectTo: '/' },
];
