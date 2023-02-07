# Hilfestellung bei der Konsolenausgabe

Gibt man folgenden Code in der Konsole ein:

```js
const lichtgeschwindigkeit = 299792458;
lichtgeschwindigkeit += 10;
```

erhält man im Normalfall eine Ausgabe in der Art:

```
Uncaught TypeError: invalid assignment to const 'lichtgeschwindigkeit'
```

Das ist ein Typfehler und sagt aus, dass die Zuweisung eines neuen Wertes zur Konstante `lichtgeschwindigkeit` nicht erlaubt ist. Konstanten dürfen nur initialisiert, aber nicht verändert werden.