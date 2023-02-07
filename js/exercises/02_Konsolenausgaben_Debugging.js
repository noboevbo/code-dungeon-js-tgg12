import {
    elContainsInnerHTML,
    scriptIncludes} from '../exercise/validation_helper.js';
import {Exercise} from '../exercise/exercise_base.js';

let exerciseID = "02_Konsolenausgaben_Debugging";


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
]

let validationFuncs = [
    function () {
        return scriptIncludes(`console.log("Hallo Konsole");`);
    },
    function() {
        return elContainsInnerHTML("fehlermeldung", "Nachricht aus dem JavaScript Code");
    }
]

let exerciseBase = new Exercise(exerciseID, instructions, infos, tips, validationFuncs);

function init() {

    exerciseBase.init();
}

window.onload = () => init();