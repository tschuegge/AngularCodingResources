Angular Coding Resources
========================
Library für den Angular Programmier Kurs von Jürg Danuser. 

[Dokumentation](https://tschuegge.github.io/AngularCodingResources/)

Installation
------------
Die Library kann über npm installiert werden: `npm install @tschuegge/angular-coding-resources`

Verwendung ColoredCircle
------------------------
Die Component kann als Standalone-Component verwendet werden.

```ts
// ColoredCircle vom npm-Package importieren
import { ColoredCircle } from '@tschuegge/angular-coding-resources'

// ColoredCircle in die Component importieren
@Component({
  selector: 'my-component',
  imports: [ColoredCircle],
  templateUrl: './my-component.html'
})
export class MyComponent { }
```

Danach kann die ColoredCircle im Template verwendet werden.

```html
<acr-colored-circle [size]="150" [color]="'red'"></acr-colored-circle>
```

Verwendung GradeCalculator
--------------------------
Dieser Service beinhaltet Fehler die mittels Testing herausgefunden werden sollen.

```ts
// ColoredCircle vom npm-Package importieren
import { GradeCalculator } from '@tschuegge/angular-coding-resources'

@Component({
  selector: 'my-component',
  imports: [],
  templateUrl: './my-component.html'
})
export class MyComponent {
  
  // GradeCalculator Service in der Component injecten
  calc = inject(GradeCalculator);
}