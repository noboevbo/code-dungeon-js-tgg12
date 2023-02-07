# Variablen innerhalb eines Anweisungsblocks anlegen

Soll eine Variable in einem bestimmten Anweisungsblock angelegt werden muss dies zwischen der öffnenenden, geschweiften Klammer `{` und der schließenden geschweiften Klammer `}` passieren.

Hier ein Beispiel für einen Anweisungsblock:

```js
// Das hier ist ausserhalb des Anweisungsblocks
{ // Hier beginnt der Anweisungsblock
    // Alles zwischen den Klammern ist der Inhalt des Anweisungsblocks
} // Mit dieser Klammer endet der Anweisungsblock
```

Das heißt konkret könnte eine Initialisierung einer Variable innerhalb des Scopes so aussehen:

```js
{
    let name = "Ada Lovelace";
}
```