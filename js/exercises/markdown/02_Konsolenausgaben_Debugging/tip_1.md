# Log in der Konsole ausgeben
Logs in der Konsole können über die Methode `console.log` ausgegeben werden. Dafür muss man in JavaScript folgendes tun:

1. Da die Nachricht in der Konsole ausgegeben werden soll, muss zunächst über `console` auf das Konsolenobjekt zugegriffen werden.
2. In der Konsole soll ein *Log* ausgegeben werden. Dafür verwendet man die Methode `log` des Konsolenobjekts `console`. Auf Methoden und eigenschaften von Objekten greift man dabei zu, indem man nach dem Objekt einen Punkt schreibt, also z.B. `console.log`.
3. Der Methode `log` den Wert übergeben, der ausgegeben werden soll. Den Wert gibt man dabei nach dem Methodennamen in einer Klammer an, da in dieser Aufgabe ein Text ausgegeben werden soll, muss dieser zusätzlich in Anführungszeichen (") gesetzt werden, also `("Hallo Konsole")`.

Zusammengesetzt sieht das dann so aus:

```js
console.log("Hallo Konsole");
```