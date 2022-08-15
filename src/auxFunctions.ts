export function getArrayEl(array: (number | string)[], index: number) {
    return array[index]
}

export function arrayLength(array:(string | number)[]){
    return array.length
}

export function getThousandPlaces(initialArray:(number|string)[], finalArray:(number|string)[]){
    finalArray.unshift(
        getArrayEl(initialArray, 0),
        getArrayEl(initialArray, 1),
        getArrayEl(initialArray, 2)
    )
}

export function joinNumber(num1:number, num2:number) {
    return parseInt(`${num1}${num2}`)
}

export function lastArrayItem (array:(string| number)[]) {
    return array[array.length - 1]
}
/*
function ThousandSecondPart () {
    if(arrayOfNumber.length === 4){
        return `${getArrayEl(imutaveis, arrayOfNumber[0])} mil`;
    }
    if(arrayOfNumber.length === 5){

        if(joinNumber(arrayOfNumber[0], arrayOfNumber[1]) < 20){

            return `${getArrayEl(imutaveis, arrayOfNumber[0])} mil`
        }
        return `${getLessHundred(0, 1)} mil`;
    }
    if(arrayOfNumber.length > 5){
        return `${getLessThousand(arrayLength(arrayOfNumber) - 6, arrayLength(arrayOfNumber) - 5, arrayLength(arrayOfNumber) - 4)} mil`;
    }
    return `${}`
}
*/