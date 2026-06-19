import { Component, input } from '@angular/core';

/**
 * Komponente welche einen farbigen Kreis ausgibt
 */
@Component({
  selector: 'acr-colored-circle',
  imports: [],
  templateUrl: './colored-circle.html'
})
export class ColoredCircle {

  /**
   * CSS kompatibler Farbname: https://developer.mozilla.org/de/docs/Web/CSS/Farben#farbschlüsselwörter
   */
  color = input('lightgray');

  /**
   * Durchmesser in Pixel
   */
  size = input(100);
}
