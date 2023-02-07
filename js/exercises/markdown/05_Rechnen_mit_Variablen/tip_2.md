# Variable mit Rechenoperationen initialisieren
Eine neue Variable kann man auch mit dem Ergebnis einer Rechenoperation aktualisieren. Dafür wird als Wert der Variable einfach die Rechenoperation eingetragen.

```js
let reichweite = (fuellstand * 100) / verbrauch;
```

**Wichtig**: Während der initialisierung kann keine Kurzschreibweise verwendet werden, da die Variable noch `undefined` ist. Beispiel:

```js
let fuellstand += 60; // Fehler, da Äquivalent zu: let fuellstand = fuellstand + 40; wobei fuellstand noch nicht existiert und daher nicht damit gerechnet werden kann.
```