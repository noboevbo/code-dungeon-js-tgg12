# Wo muss ich den Code einbinden?
Der Code greift auf das Element mit der id "meine-ueberschrift" zu, daher muss der JavaScript **nach dem h1-Element** mit dieser id eingebunden werden:

```html
<body>
    <h1 id="meine-ueberschrift">Hallo Welt!</h1>
    [...]
    <script>
        document.getElementById("meine-ueberschrift").style="color: red;";
    </script>
</body>
```

## Hinweis
Eine Alternative dazu wäre das Einbinden als externe Datei. Dann würde der Code (`document.getElementById(...)`) in eine externe Datei mit der Dateiendung .js geschrieben und der Pfad zu dieser Datei im **src**-Attribut abgegeben. Für diese Aufgabe reicht aber der interne Code, wie oben gezeigt, aus! 