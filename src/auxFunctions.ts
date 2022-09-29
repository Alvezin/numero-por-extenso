import { arrayOfNumber,casas, NumbersObj } from "./arrays"

export function getArrayEl(array: (number | string)[], index: number) {
    return array[index]
}

export function getObjEl(obj:NumbersObj, index:number){
    return obj[index]
}

export function arrayLength(array:(string | number)[]){
    return array.length
}

export function joinNumber([...number]:number[]):number {
    return parseInt(number.join(''))
}

export function lastArrayItem (array:(string| number)[]) {
    return array[array.length - 1]
}

export function adjustString(string:string){

    let changes:string = string.replace(/( )+/g, ' ').trim()

    return changes
}

export function checkUndefined(array:number[],[...indexes]:Iterable<number>){
    indexes.map((el) => {
        if(el < 0) {
            array.unshift(0)
        }
    })
}

export function checkNegativeIndex(index:number){
    if(index < 0){
        return 0
    }
    return index
}

export function setPlaces(placeCount:number, placeArray:number, count:number) {
    const condition =
        arrayOfNumber[arrayLength(arrayOfNumber) - (placeCount+3)] === 0 &&
        arrayOfNumber[arrayLength(arrayOfNumber) - (placeCount+2)] === 0 &&
        arrayOfNumber[arrayLength(arrayOfNumber) - (placeCount+1)] === 0
    ;
    if(condition) {
        return ' '
    }

    //if(count === Math.ceil(arrayOfNumber.length / 3)) return ''
    //if(placeArray > 1 && !condition) return casas[placeArray]
    if(count === Math.ceil(arrayOfNumber.length / 3)) return ''
    /*
    if(arrayOfNumber[arrayLength(arrayOfNumber) - 3] === 0 &&
    joinNumber([
        arrayOfNumber[arrayLength(arrayOfNumber) - (placeCount+2)],
        arrayOfNumber[arrayLength(arrayOfNumber) - (placeCount+1)]
    ]) < 100) return casas[placeArray] + ' e'
    */
    return casas[placeArray]
}