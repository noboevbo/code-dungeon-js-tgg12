# Eine Funktion erstellen
Zum Erstellen einer einfachen Funktion ohne Parameter reicht es aus der Funktion einen Namen zu geben. Hier noch einmal der generelle Aufbau und ein paar Tipps zur konkreten Anwendung.

![Aufbau einer Variableninitialisierung](/js/exercises/markdown/07_Funktionen_und_Rueckgabewerte/Bilder/aufbau_funktion.png)

1. Das Schlüsselwort `function` wird immer benötigt um anzugeben, dass man eine Funktion erstellen möchte.
2. Nach dem Schlüsselwort `function` schreibt man ein Leerzeichen und dann einen zusammenhängenden, eindeutigen Namen für die Funktion. Der Name ist dabei beliebig. In der Aufgabe soll er aber `getName` heißen.
3. Parameter brauchen wir hier keine, d.h. wir schreiben nach dem Namen (`getName`) nur eine leere Klammer.
4. Nach der leeren Klammer folgt der Anweisungsblock, den wir wieder in geschweifte Klammern setzen (`{ }`). Innerhalb dieser geschweiften Klammern kann dann beliebiger Code stehen, der ausgeführt wird, wenn man die Funktion aufruft.

Konkret könnte das dann so aussehen:

```js
function getName() {
    // Hier kommt noch der Code zum zurückgeben eines Strings hin
}
```