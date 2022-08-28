"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auxFunctions_1 = require("./auxFunctions");
const arrays_1 = require("./arrays");
function splitNum(num) {
    const splited = num.toString().split('');
    splited.forEach(el => {
        arrays_1.arrayOfNumber.push(Number(el));
    });
}
function getLessHundred(num1Index, num2Index) {
    const joinNumberFunc = (0, auxFunctions_1.joinNumber)(arrays_1.arrayOfNumber[num1Index], arrays_1.arrayOfNumber[num2Index]);
    if (joinNumberFunc < 20) {
        return (0, auxFunctions_1.getArrayEl)(arrays_1.imutaveis, joinNumberFunc);
    }
    const firstPart = (0, auxFunctions_1.getArrayEl)(arrays_1.tenMutiples, arrays_1.arrayOfNumber[num1Index]);
    const secondPart = (0, auxFunctions_1.getArrayEl)(arrays_1.imutaveis, arrays_1.arrayOfNumber[num2Index]);
    const condition = (0, auxFunctions_1.getArrayEl)(arrays_1.arrayOfNumber, num2Index) >= 1 ? `e ${secondPart}` : '';
    return `${firstPart} ${condition}`;
}
function getLessThousand(num1Index, num2Index, num3Index) {
    (0, auxFunctions_1.checkUndefined)(arrays_1.arrayOfNumber, num1Index, num2Index, num3Index);
    const oneHundred = (0, auxFunctions_1.getArrayEl)(arrays_1.arrayOfNumber, num2Index) === 0 && (0, auxFunctions_1.getArrayEl)(arrays_1.arrayOfNumber, num3Index) === 0;
    if (oneHundred) {
        if ((0, auxFunctions_1.getArrayEl)(arrays_1.arrayOfNumber, num1Index) === 1)
            return 'e ' + (0, auxFunctions_1.getArrayEl)(arrays_1.tenMutiples, arrays_1.arrayOfNumber[num1Index]);
        return 'e ' + (0, auxFunctions_1.getArrayEl)(arrays_1.hundredTohundred, arrays_1.arrayOfNumber[num1Index]);
    }
    const firstPart = (0, auxFunctions_1.getArrayEl)(arrays_1.hundredTohundred, arrays_1.arrayOfNumber[num1Index]);
    const secondPart = getLessHundred(num2Index, num3Index);
    if ((0, auxFunctions_1.getArrayEl)(arrays_1.arrayOfNumber, num1Index) === 0) {
        return secondPart;
    }
    return `${firstPart} e ${secondPart}`;
}
function getNum() {
    let placeCount = 0;
    let placeArray = 0;
    let count = Math.ceil(arrays_1.arrayOfNumber.length / 3);
    let number = new Array();
    while (count > 0) {
        const result = getLessThousand((0, auxFunctions_1.arrayLength)(arrays_1.arrayOfNumber) - (placeCount + 3), (0, auxFunctions_1.arrayLength)(arrays_1.arrayOfNumber) - (placeCount + 2), (0, auxFunctions_1.arrayLength)(arrays_1.arrayOfNumber) - (placeCount + 1));
        const applyPlaces = `${result} ${(0, auxFunctions_1.setCondition)(placeCount, placeArray, count)}`;
        number.unshift(applyPlaces);
        placeCount += 3;
        placeArray++;
        count--;
    }
    return (0, auxFunctions_1.adjustString)(number.join(' '));
}
function toExtense(num) {
    if (num === 0)
        return arrays_1.imutaveis[num];
    splitNum(num);
    return getNum();
}
exports.default = toExtense;
