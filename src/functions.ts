import { arrayLength, joinNumber, lastArrayItem, getArrayEl } from './auxFunctions'
import { arrayOfNumber, casas, hundredTohundred, imutaveis, tenMutiples } from './arrays'


export function splitNum(num:number){
    const splited:(string | number)[] = num.toString().split('')
    splited.forEach(el => {
        arrayOfNumber.push(Number(el))
    })
}

function getLessHundred(num1index: number, num2index:number):string {

    const firstPart = `${getArrayEl(tenMutiples, arrayOfNumber[num1index]) }`;

    const secondPart = `${getArrayEl(imutaveis, arrayOfNumber[num2index])}`;

    const condition = `${getArrayEl(arrayOfNumber, num2index) >= 1 ? `e ${secondPart}` : ''}`

    return `${firstPart} ${condition}`
}

function getLessThousand(num1index:number, num2Index:number, num3Index:number){
    if(num1index === 0 && num2Index === 0){
        return `${getArrayEl(imutaveis, arrayOfNumber[num3Index])}`
    }
    const joinNumberFunc = joinNumber(arrayOfNumber[num2Index], arrayOfNumber[num3Index])

    const firstPart = `${ getArrayEl(hundredTohundred, arrayOfNumber[num1index]) }`;

    const secondPart = `e ${joinNumberFunc >= 19 ? getLessHundred(num2Index, num3Index) : getArrayEl(imutaveis, joinNumberFunc)}`;

    const oneHundred = getArrayEl(arrayOfNumber,num2Index) === 0 && getArrayEl(arrayOfNumber, num3Index) === 0

    if(oneHundred){
        return `${getArrayEl(tenMutiples, arrayOfNumber[num1index])}`
    }

    return `${firstPart} ${secondPart}`
}


function ThousandFirstPart(){
    if(arrayOfNumber.length === 4){
        return `${getArrayEl(imutaveis, arrayOfNumber[0])} mil`;
    }
    if(arrayOfNumber.length === 5){

        if(joinNumber(arrayOfNumber[0], arrayOfNumber[1]) < 20){

            return `${getArrayEl(imutaveis, joinNumber(arrayOfNumber[0], arrayOfNumber[1]))} mil`
        }
        return `${getLessHundred(0, 1)} mil`;
    }
    if(arrayOfNumber.length > 5){
        return `${getLessThousand(arrayLength(arrayOfNumber) - 6, arrayLength(arrayOfNumber) - 5, arrayLength(arrayOfNumber) - 4)} mil`;
    }
}

function getLessMillion(){
    const firstPart =  `${ThousandFirstPart()}`;

    const secondPart = `${getLessThousand(arrayLength(arrayOfNumber) - 3, arrayLength(arrayOfNumber) - 2, arrayLength(arrayOfNumber) - 1)}`;
    
    return `${firstPart} ${secondPart}`
}

export function index(num:number){
    splitNum(num)
    if(num <= 19){
        return getArrayEl(imutaveis, num)
    }
    if(num <= 99){
        return getLessHundred(0, 1)
    }
    if(num <= 999){
        return getLessThousand(0, 1, 2)
    }
    if(num <= 999999){
        return getLessMillion()
    }
}

