import { arrayOfNumber,casas } from "./arrays"

export function getArrayEl(array: (number | string)[], index: number) {
    return array[index]
}

export function arrayLength(array:(string | number)[]){
    return array.length
}

export function joinNumber(num1:number, num2:number) {
    return parseInt(`${num1}${num2}`)
}

export function lastArrayItem (array:(string| number)[]) {
    return array[array.length - 1]
}

export function adjustString(string:string){

    let changes:string = string.replace(/( )+/g, ' ').trim()

    if(changes.charAt(0) === 'e') {
        changes = changes.replace('e', ' ')
    }
/*
    if(changes.charAt(changes.length - 2) === ' ') {
        changes = changes.slice(0,changes.length - 2)
    }
*/
    if(changes.indexOf('um') === 0 && arrayOfNumber.length > 1 && arrayOfNumber.length <= 4){
        changes = changes.replace('um', ' ')
    }

    if(changes.indexOf(' e e ')) changes = changes.replace(' e e ', ' e ')

    return changes.trim()
}
export function checkUndefined(array:(string | number)[],num1Index:number, num2Index:number, num3Index:number){
    if(array[num1Index] === undefined){
        array[num1Index] = 0
    }
    if(array[num2Index] === undefined){
        array[num2Index] = 0
    }
    if(array[num3Index] === undefined){
        array[num3Index] = 0
    }
}

export function setCondition(placeCount:number, placeArray:number, count:number) {
    const condition =
        arrayOfNumber[arrayLength(arrayOfNumber) - (placeCount+3)] === 0 &&
        arrayOfNumber[arrayLength(arrayOfNumber) - (placeCount+2)] === 0 &&
        arrayOfNumber[arrayLength(arrayOfNumber) - (placeCount+1)] === 0
    ;
    if(count === Math.ceil(arrayOfNumber.length / 3)) return ''
    if(placeArray > 1 && !condition) return casas[placeArray]
    if(condition) {
        if(count === Math.ceil(arrayOfNumber.length / 3)) return ''
        return 'e'
    }
    if(arrayOfNumber[arrayLength(arrayOfNumber) - 3] === 0 &&
    joinNumber(
        arrayOfNumber[arrayLength(arrayOfNumber) - (placeCount+2)],
        arrayOfNumber[arrayLength(arrayOfNumber) - (placeCount+1)]
    ) < 100) return casas[placeArray] + ' e'
    return casas[placeArray]
}