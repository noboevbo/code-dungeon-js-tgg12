# Sichtbarkeit von Variablen


## Scopes
Um zu verstehen, wo Variablen verwendet werden können, benötigt man Grundkenntnisse über die sogenannten **Anweisungsblöcke**. Diese erkennt man daran, dass sie **innerhalb von geschweiften Klammern (`{ }`) stehen**.

```js
// Globaler Bereich

{
    // Block 1 innerhalb des globalen Bereich
}

{
    // Block 2 innerhalb des globalen Bereich
    {
        // Block 3 innerhalb von Block 2
    }
}
```

## Sichtbarkeit von Variablen
Variablen (`let`) und Konstanten (`const`) sind ausserhalb des Anweisungsblocks, in dem sie definiert wurden, unsichtbar.

Beispiel:

```js
{
    let a = 1;
    console.log(a); // Funktioniert, weil a innerhalb der geschwiften Klammer deklariert wurde.
}

console.log(b); // Funktioniert nicht, weil a nur innerhalb der geschweiften Klammer sichtbar ist.
```

Weiteres Beispiel:

```js
{
    let a = 1;
    {
        let b = 1;
        console.log(a); // Funktioniert, weil der Code innerhalb der geschweiften Klammer steht, in der a initialisiert wurde.
        console.log(b); // Funktioniert
    }
    console.log(a); // Funktioniert
    console.log(b); // Funktioniert nicht, weil der Anweisungsblock, in dem b initialisiert wurde, schon geschlossen worden ist.
}
```

# TODO: Arbeitsblatt
Planen