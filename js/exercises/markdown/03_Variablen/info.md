# Variablen in JavaScript

Variablen kann man sich als kleine Datenspeicher vorstellen, in dem man alle möglichen Daten speichern kann. Eine Variable wird immer mit `let` gefolgt von einem eindeutigen Namen **deklariert**. Deklaration bedeutet also, dass eine Variable mit einem Namen angelegt wurde.

```js
let name; // Deklaration der Variable name
```

## Zuweisungen & Initialisierung
Nach dem deklarieren einer Variable kann diese verwendet werden um darin Daten zu speichern. Im folgenden Beispiel wird den Variablen mit den Namen *name* ein Wert zugewiesen.

```js
let name = "Ada Lovelace"; // Deklaration der Variable name & Zuweisung eines Werts
```

Wenn der Deklaration direkt eine Zuweisung folgt spricht man auch von einer **Initialisierung** der Variable. Die Zuweisung sollte dir aus den vorherigen Übungen bekannt sein, dort wurden Eigenschaften von HTML-Elementen Werte zugewiesen.

# Datentypen
In JavaScript können in einer Variable verschiedene Arten von Daten gespeichert werden.

```js
let name = "Ada Lovelace"; // Text (String) wird zugewiesen
let geburtsJahr = 1815; // Nummer wird zugewiesen
let istVIP = true; // Wahrheitswert (Boolean) wird zugewiesen
```

Im diesem Beispiel wurden bereits drei der wichtigsten Datentypen verwendet:

- **string** ist ein Datentypen für Texte. Man erkennt ihn sofort an den **Anführungszeichen**.

- **number** ist ein Datentyp für Zahlen. Diese werden **ohne Anführungszeichen** geschrieben!

- **boolean** ist ein Datentyp für Wahrheitswerte, er kann nur **true** (wahr) oder **false** (falsch) sein. Wahrheitswerte werden ebenfalls **ohne Anführungszeichen** geschrieben!

Neben diesen drei Datentypen wirst du sicherlich noch auf folgende beiden stoßen:

- **undefined** ist ein Datentyp für Variablen, denen kein Wert zugewiesen wurde.
  ```js
  let name; // Variable name ist vom Typ undefined
  ```

- **null** ist ein Datentyp, der verwendet wird, wenn eine Variable bewusst kein Wert zugewiesen wird, oder ein Wert gelöscht werden soll. Im Gegensatz zu undefined muss null zugewiesen werden:
  ```js
  let name = null; // Variable name ist vom Typ null
  ```

Es gibt noch ein paar andere Datentypen, die jedoch eher in speziellen Fällen, wie zum Beispiel für sehr hohe Zahlenwerte, benötigt werden. Wenn dich das interessiert, kannst du die restlichen Typen über den Link unten nachlesen.

## Hinweis: Variablen mit `var`
In JavaScript existiert noch die Möglichkeit Variablen mit dem Schlüsselwort `var` statt `let` zu deklarieren. Das `var` Schlüsselwort ist jedoch **veraltet und sollte nichtmehr verwendet werden**. 

# Weitere Informationen

- [JavaScript data types and data structures - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures?retiredLocale=de)

# TODO: Arbeitsblatt

Planen