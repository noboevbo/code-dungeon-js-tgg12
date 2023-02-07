# Parameter hinzufügen
Um einer Funktion Parameter hinzuzufügen müssen diese innerhalb einer Klammer (`( )`) aufgelistet werden. 

![Aufbau einer Variableninitialisierung](/js/exercises/markdown/07_Funktionen_und_Rueckgabewerte/Bilder/aufbau_funktion.png)

Dabei kann man für jeden Parametern einen beliebigen Namen vergeben, es darf jedoch **nicht 2x der selbe Parametername** für die gleiche Funktion verwendet werden! Die einzelnen Parameternamen werden dann durch ein Komma getrennt.

Konkret könnte das für eine Funktion mit einem Parameter mit dem Namen `zahl` so aussehen:

```js
function quadratzahl(zahl) {
    // Anweisungen kommen hier hin
}
```

Und für eine Funktion mit zwei Parametern mit den Namen `a` und `b` so:

```js
function add(a, b) {
    // Anweisungen kommen hier hin
}
```