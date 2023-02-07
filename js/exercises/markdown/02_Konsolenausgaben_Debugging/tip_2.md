# Text in HTML Elementen ändern
Um aus JavaScript Text auf eine Website zu bringen, muss dafür ein HTML-Element verändert (oder erzeugt) werden. In der Aufgabe gibt es ein h1-Element, dessen Text verändert werden soll. Dafür muss man in JavaScript folgendes tun:

1. Auf das Element zugreifen. Das kann z.B. über die id des Elements passieren. Wir verwenden dafür die Methode `document.getElementById("fehlermeldung")`, wobei `fehlermeldung` der Wert des id-Attributs ist.
2. Was verändert werden soll ist der Inhalt des HTML-Elements, also das was zwischen `<h1>` und `</h1>` steht. Darauf kann man mit `.innerHTML` zugreifen, dabei handelt es sich um eine Eigenschaft, der ein neuer Wert zugewiesen werden muss.
3. Um der Eigenschaft `innerHTML` einen Wert zuzuweisen verwendet man das Gleichheitszeichen, gefolgt vom Wert, im Fall der Aufgabe also `= "Nachricht aus dem JavaScript Code"`.

Zusammengesetzt sieht das dann so aus:

```js
document.getElementById("fehlermeldung").innerHTML = "Nachricht aus dem JavaScript Code";
```