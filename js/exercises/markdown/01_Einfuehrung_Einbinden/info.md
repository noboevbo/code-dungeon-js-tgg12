# JavaScript Code einbinden

Es gibt mehrere Möglichkeiten, wie JavaScript (JS) Code eingebunden werden kann. Diese werden hier kurz vorgestellt:

## Externe Datei im head-Bereich
Wie externe CSS kann auch JavaScript als externe Datei eingebunden werden. Dazu wird das **script**-Element benötigt. Hier trägt man im **src**-Attribut den Pfad zur externen Datei ein.

```html
<head>
    <script src="pfad/zu/dateiname.js"></script>
</head>
```

## Im body-Bereich
JS Code kann auch im body-Element über das **script**-Element eingebunden werden. Der Inhalt des **script**-Elements ist dann der JavaScript Code. **script**-Elemente sollten immer ganz unten im HTML-Code (vor `</body>`) stehen!

```html
<body>
    <h1>Überschrift</h1>
    <script>
        document.getElementById("meine-ueberschrift").innerHTML = "Neue Überschrift";
    </script>
</body>
```

### Externe Datei im body-Bereich
JavaScript in einer externen Datei kann auch im body-Bereich eingebunden werden und dann wie interner JavaScript Code auf alle HTML-Elemente zugreifen, die vor dem **script**-Element stehen:

```html
<body>
    <h1>Überschrift</h1>
    <script src="pfad/zu/dateiname.js"></script>
</body>
```


## Wichtig: Reihenfolge von Elementen!
Wichtig zu wissen ist, dass die Zeile, in der der Code eingebunden wird wichtig ist, da der Browser den gesamten Code von oben nach unten abarbeitet. Würde man beispielsweise den JavaScript Code zum Ändern der Schriftfarbe vor das HTML-Element setzen, das verändert werden soll, würde dieses noch nicht existieren und ein Fehler ausgegeben.

