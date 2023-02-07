# Parameter in der Funktion verwenden
Parameter können in Funktionen genauso verwendet werden wie Variablen. Das heißt man gibt den Parameternamen an um auf den entsprechenden Wert des Parameters zuzugreifen.

Konkret könnte das für zwei Parameter `a` und `b`, deren Werte addiert werden sollen, so aussehen.

```js
function add(a, b) {
    let ergebnis = a + b;
    return ergebnis;
}
```

Da in diesem Beispiel die Variable ergebnis nur ein einziges mal verwendet wird, kann man auch direkt das Ergebnis der Addition zurückgeben:

```js
function add(a, b) {
    return a + b;
}
```
