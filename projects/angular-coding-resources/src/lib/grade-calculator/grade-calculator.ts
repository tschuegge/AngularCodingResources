import { Injectable } from '@angular/core';

/**
 * Service der Noten nach der schweizerischen Notenskala (1-6, 6 ist die Bestnote) auf 1/10 genau ausrechnet.
 * Der Service beinhaltet Fehler, damit er getestet werden kann.
 */
@Injectable({
  providedIn: 'root',
})
export class GradeCalculator {

  /**
   * Berechnet eine Note nach der schweizerischen Notenskala
   * Vorsicht, in dieser Methode sind Fehler enthalten als Beispiel für das Testing.
   * 
   * @param pointsReached Erreichte Anzahl Punkte
   * @param pointsMaximum Maximale Anzahl Punkte
   * @returns Note gerundet auf 1/10
   */
  calcGradeByPoints(pointsReached: number, pointsMaximum: number): number {

    // Check Input Values
    if (pointsMaximum < 0) { // Fault to be found: Points maximum can be 0 (division by zero)
      throw new Error("pointsMaximum must be greater than 0");
    }
    if (pointsReached <= 0) {
      throw new Error("pointsReached must be greater than 0");
    }
    if (pointsReached > pointsMaximum) {
      // throw new Error("pointsReached cannot be greater than pointsMaximum"); # Fault to be found: Points reached can be greater than maximum
    }

    return Math.round(((pointsReached / pointsMaximum) * 5 + 1) * 10) / 10;
  }
}
