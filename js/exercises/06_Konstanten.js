import {
    classHasCorrectStyleValue, classCheckStyleSameValue, cssPaddingNames, hasCorrectStyleValue, isConst, valueEquals
} from '../exercise/validation_helper.js';
import {Exercise} from '../exercise/exercise_base.js';

let exerciseID = "06_Konstanten";


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
        return isConst("lichtgeschwindigkeit");
    },
    function () {
        return valueEquals(lichtgeschwindigkeit, "lichtgeschwindigkeit",299792458)
    }
]

let exerciseBase = new Exercise(exerciseID, instructions, infos, tips, validationFuncs);

window.onload = () => exerciseBase.init();