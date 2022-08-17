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
    if(string.charAt(0) === 'e') {
        const changes = string.replace('e', '').trim()
        return changes
    }
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