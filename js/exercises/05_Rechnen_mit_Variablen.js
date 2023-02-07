import {
    classHasCorrectStyleValue,
    classCheckStyleSameValue,
    cssPaddingNames,
    hasCorrectStyleValue,
    localVarExists,
    getFailResultObj, localVarError, valueEquals, scriptIncludes
} from '../exercise/validation_helper.js';
import {Exercise} from '../exercise/exercise_base.js';
import {localVarDoesNotExistMsg} from "../exercise/error_messages.js";

let exerciseID = "05_Rechnen_mit_Variablen";


let instructions = {
    content: `/js/exercises/markdown/${exerciseID}/description.md`,
    isMarkdown: true
}

let infos = [
    {
        markdown: `/js/exercises/markdown/${exerciseID}/info.md`,
        contentIsMarkdown: true,
    },
]

let tips = [
    {
        level: 1,
        markdown: `/js/exercises/markdown/${exerciseID}/tip_1.md`,
        contentIsMarkdown: true,
    },
    {
        level: 2,
        markdown: `/js/exercises/markdown/${exerciseID}/tip_2.md`,
        contentIsMarkdown: true,
    },
    {
        level: 3,
        markdown: `/js/exercises/markdown/${exerciseID}/tip_3.md`,
        contentIsMarkdown: true,
    },
]
let fuellstand = 21;
let validationFuncs = [
    function () {
        try { return localVarExists(fuellstand, "fuellstand"); } catch { return localVarError("fuellstand") }
    },
    function () {
        try { return localVarExists(verbrauch, "verbrauch"); } catch { return localVarError("verbrauch") }
    },
    function () {
        try { return localVarExists(getanktLiter, "getanktLiter"); } catch { return localVarError("getanktLiter") }
    },
    function() {
        return valueEquals(verbrauch, "verbrauch", 10)
    },
    function() {
        return valueEquals(getanktLiter, "getanktLiter", 40)
    },
    function() {
        return valueEquals(fuellstand, "fuellstand", 60)
    },
    function () {
        try { return localVarExists(reichweite, "reichweite"); } catch { return localVarError("reichweite") }
    },
    function() {
        return valueEquals(reichweite, "reichweite", 600)
    },
    function () {
        return scriptIncludes(`console.log(reichweite);`);
    },
]

let exerciseBase = new Exercise(exerciseID, instructions, infos, tips, validationFuncs);

window.onload = () => exerciseBase.init();