import {
    classHasCorrectStyleValue,
    classCheckStyleSameValue,
    cssPaddingNames,
    hasCorrectStyleValue,
    localVarExists,
    getFailResultObj
} from '../exercise/validation_helper.js';
import {Exercise} from '../exercise/exercise_base.js';
import {localVarDoesNotExistMsg} from "../exercise/error_messages.js";

let exerciseID = "04_globale_vs_lokale_Variablen";


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
        if (typeof vorname !== 'undefined') {
            return localVarExists(vorname, "vorname");
        } else {
            return getFailResultObj(localVarDoesNotExistMsg("vorname"));
        }
    },
]

let exerciseBase = new Exercise(exerciseID, instructions, infos, tips, validationFuncs);

window.onload = () => exerciseBase.init();