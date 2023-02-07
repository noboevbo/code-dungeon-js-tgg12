# Funktionen aufrufen
Um eine Funktion aufzurufen muss man den Namen der Funktion sowie in Klammer die zu übergebenden Parameter angeben. In dieser Aufgabe werden keine Parameter eingesetzt, das heißt man schreibt den Namen der Funktion gefolgt von einer **leeren Klammer** um die Funktion aufzurufen. Konkret kann das so aussehen:

```js
getName(); // Führt den Code in getName aus.
```

Da die Funktion `getName` nur einen Wert zurückgibt, muss man etwas mit diesem Wert anfangen. Man kann ihn beispielsweise in eine Variable speichern und anschließend als Konsolenlog ausgeben:

```js
let name = getName();
console.log(name);
```

Alternativ kann man den Rückgabewert der Funktion aber auch direkt als Parameter für die Funktion `console.log` nutzen. 

```js
console.log(getName());
```

Wenn der zurückgegebene Wert **mehrfach benötigt** wird sollte man immer eine Variable verwenden um den Wert zu speichern und so unnötiges, mehrfaches Ausführen des Funktionscodes zu vermeiden.
