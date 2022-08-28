"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCondition = exports.checkUndefined = exports.adjustString = exports.lastArrayItem = exports.joinNumber = exports.arrayLength = exports.getArrayEl = void 0;
const arrays_1 = require("./arrays");
function getArrayEl(array, index) {
    return array[index];
}
exports.getArrayEl = getArrayEl;
function arrayLength(array) {
    return array.length;
}
exports.arrayLength = arrayLength;
function joinNumber(num1, num2) {
    return parseInt(`${num1}${num2}`);
}
exports.joinNumber = joinNumber;
function lastArrayItem(array) {
    return array[array.length - 1];
}
exports.lastArrayItem = lastArrayItem;
function adjustString(string) {
    let changes = string.replace(/( )+/g, ' ').trim();
    if (changes.charAt(0) === 'e') {
        changes = changes.replace('e', ' ');
    }
    /*
        if(changes.charAt(changes.length - 2) === ' ') {
            changes = changes.slice(0,changes.length - 2)
        }
    */
    if (changes.indexOf('um') === 0 && arrays_1.arrayOfNumber.length > 1 && arrays_1.arrayOfNumber.length <= 4) {
        changes = changes.replace('um', ' ');
    }
    if (changes.indexOf(' e e '))
        changes = changes.replace(' e e ', ' e ');
    return changes.trim();
}
exports.adjustString = adjustString;
function checkUndefined(array, num1Index, num2Index, num3Index) {
    if (array[num1Index] === undefined) {
        array[num1Index] = 0;
    }
    if (array[num2Index] === undefined) {
        array[num2Index] = 0;
    }
    if (array[num3Index] === undefined) {
        array[num3Index] = 0;
    }
}
exports.checkUndefined = checkUndefined;
function setCondition(placeCount, placeArray, count) {
    const condition = arrays_1.arrayOfNumber[arrayLength(arrays_1.arrayOfNumber) - (placeCount + 3)] === 0 &&
        arrays_1.arrayOfNumber[arrayLength(arrays_1.arrayOfNumber) - (placeCount + 2)] === 0 &&
        arrays_1.arrayOfNumber[arrayLength(arrays_1.arrayOfNumber) - (placeCount + 1)] === 0;
    if (count === Math.ceil(arrays_1.arrayOfNumber.length / 3))
        return '';
    if (placeArray > 1 && !condition)
        return arrays_1.casas[placeArray];
    if (condition) {
        if (count === Math.ceil(arrays_1.arrayOfNumber.length / 3))
            return '';
        return 'e';
    }
    if (arrays_1.arrayOfNumber[arrayLength(arrays_1.arrayOfNumber) - 3] === 0 &&
        joinNumber(arrays_1.arrayOfNumber[arrayLength(arrays_1.arrayOfNumber) - (placeCount + 2)], arrays_1.arrayOfNumber[arrayLength(arrays_1.arrayOfNumber) - (placeCount + 1)]) < 100)
        return arrays_1.casas[placeArray] + ' e';
    return arrays_1.casas[placeArray];
}
exports.setCondition = setCondition;
