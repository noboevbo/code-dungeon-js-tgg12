import {
    classHasCorrectStyleValue, classCheckStyleSameValue, cssPaddingNames, hasCorrectStyleValue, scriptIncludes} from '../exercise/validation_helper.js';
import {Exercise} from '../exercise/exercise_base.js';

let exerciseID = "02Z_AlertErrorWarning";


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

let validationFuncs = [
    function () {
        return scriptIncludes(`alert("ALAAAAARM")`, "Alarm mit dem Text 'ALAAAAARM'");
    },
    function () {
        return scriptIncludes(`console.warn("Warnung in der Konsole")`, "Warnung in der Konsole");
    },
    function () {
        return scriptIncludes(`console.error("Fehlermeldung in der Konsole")`, "Fehlermeldung in der Konsole");
    },
]

let exerciseBase = new Exercise(exerciseID, instructions, infos, tips, validationFuncs);

window.onload = () => exerciseBase.init();