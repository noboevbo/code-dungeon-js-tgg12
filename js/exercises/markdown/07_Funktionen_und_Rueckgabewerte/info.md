# Funktionen in JavaScript
Funktionen kann man sich als Codeblöcke mit Namen vorstellen. Über den vergebenen Namen kann man diese dann an anderer Stelle aufrufen, dadurch sind sie wiederverwendbar. 

## Aufbau von Funktionen
Der grundlegende Aufbau einer Funktion ist in folgender Grafik dargestellt:

![Aufbau einer Variableninitialisierung](/js/exercises/markdown/07_Funktionen_und_Rueckgabewerte/Bilder/aufbau_funktion.png)

1. Die **Art der Deklaration**. Man deklariert eine Funktion mit dem Schlüsselwort `function`.
2. Der **eindeutige Name** der Funktion
3. In Klammern 0-n **Parameter**, die durch Kommas getrennt werden. Parameter werden in der nächsten Aufgabe behandelt, in dieser Aufgabe braucht man keine Parameter.
4. Der **Anweisungsblock**, der beim Aufruf der Funktion ausgeführt wird.

## Aufrufen von Funktionen
Wurde eine Funktion deklariert kann sie anschließend beliebig oft über ihren Namen sowie der Angabe der Parameter aufgerufen werden. Da in dieser Aufgabe keine Parameter vorhanden sind schreibt man eine leere Klammer nach dem Funktionsnamen.

```js
function meinFunktionsName() {
    console.log("Hallo aus meinFunktionsName");
}

meinFunktionsName(); // Die Anweisung in meinFunktionsName wird ausgeführt.
meinFunktionsName(); // Die Anweisung in meinFunktionsName wird nochmal ausgeführt.
// In der Konsole erscheint zweimal die Logausgabe "Hallo aus meinFunktionsName"
```

## Rückgabewerte
Im vorherigen Beispiel wird in der Funktion ein Logeintrag über die Konsole ausgegeben. Oft erfüllen Funktionen jedoch eine bestimmte Aufgabe, wie zum Beispiel eine Berechnung, und geben dann ein Ergebnis zurück. Die Rückgabe eines Wertes wird über das Schlüsselwort `return` eingeleitet. Danach schreibt man was zurückgegeben werden soll.

```js
function getMindestalter() {
    return 16;
}

let mindestalter = getMindestalter(); // Variable mindestalter wird deklariert und mit dem Rückgabewert (16) der Funktion getMindestalter() initialisiert.
```

# TODO: Arbeitsblatt
Planen
