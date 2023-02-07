import {
    classHasCorrectStyleValue,
    classCheckStyleSameValue,
    cssPaddingNames,
    hasCorrectStyleValue,
    getFailResultObj,
    getSuccessResultObj, isType
} from '../exercise/validation_helper.js';
import {Exercise} from '../exercise/exercise_base.js';

let exerciseID = "07_Funktionen_und_Rueckgabewerte";


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
        level: 2,
        markdown: `/js/exercises/markdown/${exerciseID}/tip_3.md`,
        contentIsMarkdown: true,
    },
]

let validationFuncs = [
    function () {
        try {
            let result = getName();
            return isType(result, "Ergebnis von getName()", "string");
        } catch (e) {
            if (e instanceof Error) {
                return getFailResultObj(`Die Funktion "getName" existiert nicht.`);
            }
            return getFailResultObj(e.message);
        }
    },
    // TODO: CHeck logausgabe
]

let exerciseBase = new Exercise(exerciseID, instructions, infos, tips, validationFuncs);

window.onload = () => exerciseBase.init();