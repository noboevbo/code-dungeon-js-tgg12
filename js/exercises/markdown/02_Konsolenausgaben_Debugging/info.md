# Ausgaben in JavaScript

Zwei wichtige Möglichkeiten Text oder andere Daten auszugeben sind über die Konsole oder über HTML Elemente.

## Text in der Konsole ausgeben
Die *Methode* `console.log` kann verwendet werden um Text in der Konsole des Browsers als *Log* auszugeben. Diese Art der Ausgabe eignet sich für Ausgaben, die für EntwicklerInnen gedacht sind (z.B. Fehler- oder Statusmeldungen).

```js
console.log("Dein Text");
```

Um die Konsole zu öffnen und die Ausgabe zu sehen gehe wie folgt vor:
1. Entwicklertools öffnen (F12)
2. Reiter: Konsole anlicken (optional, sollte standardmäßig schon ausgewählt sein)

## Text über HTML Elemente ausgeben
Über JavaScript kann jedes HTML Element sowie alle Eigenschaften von diesen verändert werden. So kann beispielsweise der Inhalt von Elementen über die Eigenschaft `innerHTML` neu zugewiesen werden.

**Wichtig**: Im Gegensatz zu `console.log` wird der Wert einer Eigenschaft nicht in Klammern, sondern nach einem Gleichheitszeichen angegeben.

```js
document.getElementById("id").innerHTML = "Dein Text";
```

Der Unterschied zwischen den Eigenschaften und Methoden (wie `console.log`) wird in späteren Aufgaben genauer thematisiert.
# TODO: Zusatzaufgabe console.warning und console.error

# TODO: Arbeitsblatt
- Unterschied syntax Methode und Zuweisung
- Semikolon am Ende
- Zuweisung wann welche Ausgabe
- Syntax Methode: Methodenname, Parameter
- Syntax Eigenschaft: Eigenschaftsname, Objekt, Eigenschaftswert