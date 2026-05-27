Angular Coding Resources
========================
Library für den Angular Programmier Kurs von Jürg Danuser. 

[Dokumentation](https://tschuegge.github.io/AngularCodingResources/)

Installation
------------
Die Library kann über npm installiert werden: `npm install @tschuegge/angular-coding-resources`

Verwendung
----------
Das Library-Modul kann im Root-Modul geladen werden.

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

Danach kann beispielsweise die ColoredCircleComponent in den Templates verwendet werden.

```html
<acr-colored-circle [size]="150" [color]="'red'"></acr-colored-circle>
```