import { arrayOfNumber } from "./arrays"

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
    let changes:string = string
    if(string.charAt(0) === 'e') {
        changes = string.replace('e', '').trim()
    }
    if(changes.indexOf('um') === 0 && arrayOfNumber.length > 1 &&  arrayOfNumber.length <= 4){
        changes = changes.replace('um', '').trim()
    }
    return changes.replace(/( )+/g, ' ')
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