# Rechenoperationen in JavaScript

JavaScript unterstützt alle einfachen Rechenoperationen über die folgenden Zeichen:

- Addieren: `+`
- Subtrahieren: `-`
- Dividieren: `/`
- Multiplizieren: `*`

Diese Rechenoperationen können mit beliebigen Zahlen verwendet werden. Eine solche Rechneoperationen lieft ein Ergebnis, das zum Beispiel in einer Variable gespeichert, oder über die Konsole ausgegeben werden kann.
```js
let fuellstand = 10 + 20; // Wert von fuellstand ist 30
console.log(20 * 1.97); // Gibt 39.4 als Log in der Konsole aus.
```

Du kannst auch komplexere Rechenoperationen verwendet und beispielsweise Klammersetzung wie in der Mathematik einsetzen.

```js
console.log((fuellstand * 100) / verbrauch); // Gibt die Reichweite als Log in der Konsole aus.
```

## Rechnen mit Variablen
Meist nutzt man keine konkreten Zahlen für Berechnungen sonder verwendet Variablen, in denen die entsprechenden Zahlen gespeichert sind. Dabei können Variablen einfach genau wie Zahlen eingesetzt werden.

```js
let fuellstand = 10;
let getanktLiter = 20;

fuellstand = fuellstand + getanktLiter; // Wert von fuellstand ist 30
```

## Tipp: Kurzschreibweise zum aktualisieren von Variablenwerten
Im Beispiel oben wurde der Wert von getanktLiter zum Wert von fuellstand addiert.
```js
fuellstand = fuellstand + getanktLiter;
```

Das selbe kann man auch durch folgende Kurzschreibweise erreichen:

```js
fuellstand += getanktLiter;
```

Das bedeutet, dass zu der Variable vor `+=` der darauf folgende Wert addiert wird. Äquivalente Befehle gibt es auch für die anderen Rechenoperationen:

- Addieren: `+=`
- Subtrahieren: `-=`
- Dividieren: `/=`
- Multiplizieren: `*=`

# TODO: Arbeitsblatt
Planen