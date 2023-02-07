## Text in einem Dialogfenster (Popup) ausgeben
Die *Methode* **alert** gibt Text in einem Dialogfenster (Popup) aus. Diese Form von Ausgabe sollte nur zu Testzwecken verwendet werden, da Popups sehr Benutzerunfreundlich sind. 

**Wichtig**: Text muss immer innerhalb von Anführungszeichen geschrieben werden.

```js
alert("Dein Text");
```

## Text in der Konsole ausgeben
Neben der *Methode* **console.log** gibt es auch die Funktionen **console.warning** sowie **console.error**, die statt einem Log eine Warnung bzw. eine Fehlermeldung ausgeben. In den Entwicklertools kann man nach der Art der Meldung filter und so beispielsweise nur Fehler anzeigen lassen.

```js
console.log("Ein Logeintrag");
console.warning("Eine Warnung").
console.error("Eine Fehlermeldung");
```

Um die Konsole zu öffnen und die Ausgabe zu sehen gehe wie folgt vor:
1. Entwicklertools öffnen (F12)
2. Reiter: Konsole anlicken (optional, sollte standardmäßig schon ausgewählt sein)
