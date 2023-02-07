import {
    classHasCorrectStyleValue,
    classCheckStyleSameValue,
    cssPaddingNames,
    hasCorrectStyleValue,
    localVarExists,
    getFailResultObj, isType
} from '../exercise/validation_helper.js';
import {Exercise} from '../exercise/exercise_base.js';
import {localVarDoesNotExistMsg} from "../exercise/error_messages.js";

let exerciseID = "03_Variablen";


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
        level: 1,
        markdown: `/js/exercises/markdown/${exerciseID}/tip_2.md`,
        contentIsMarkdown: true,
    },
]

let validationFuncs = [
    function () {
        if (typeof spielername !== 'undefined') {
            return localVarExists(spielername, "spielername");
        } else {
            return getFailResultObj(localVarDoesNotExistMsg("spielername"));
        }
    },
    function () {
        return isType(spielername, "spielername", "string");
    },
    function () {
        if (typeof alter !== 'undefined') {
            return localVarExists(alter, "alter");
        } else {
            return getFailResultObj(localVarDoesNotExistMsg("alter"));
        }
    },
    function () {
        return isType(alter, "alter", "number");
    },
    function () {
        if (typeof agbAkzeptiert !== 'undefined') {
            return localVarExists(agbAkzeptiert, "agbAkzeptiert");
        } else {
            return getFailResultObj(localVarDoesNotExistMsg("agbAkzeptiert"));
        }
    },
    function () {
        return isType(agbAkzeptiert, "agbAkzeptiert", "boolean");
    }


]

let exerciseBase = new Exercise(exerciseID, instructions, infos, tips, validationFuncs);

window.onload = () => exerciseBase.init();