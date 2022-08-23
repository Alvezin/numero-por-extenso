import { arrayLength, joinNumber, checkUndefined, getArrayEl, adjustString, setCondition } from './auxFunctions'
import { arrayOfNumber, casas, hundredTohundred, imutaveis, tenMutiples } from './arrays'


function splitNum(num:number){
    const splited:(string | number)[] = num.toString().split('')
    splited.forEach(el => {
        arrayOfNumber.push(Number(el))
    })
}

function getLessHundred(num1Index: number, num2Index:number):string {

    const joinNumberFunc = joinNumber(arrayOfNumber[num1Index], arrayOfNumber[num2Index])

    if(joinNumberFunc < 20){
        return getArrayEl(imutaveis, joinNumberFunc) as string
    }

    const firstPart = getArrayEl(tenMutiples, arrayOfNumber[num1Index]);

    const secondPart = getArrayEl(imutaveis, arrayOfNumber[num2Index]);

    const condition = getArrayEl(arrayOfNumber, num2Index) >= 1 ? `e ${secondPart}` : ''

    return `${firstPart} ${condition}`
}

function getLessThousand(num1Index:number, num2Index:number, num3Index:number){

    checkUndefined(arrayOfNumber,num1Index, num2Index, num3Index)

    const oneHundred = getArrayEl(arrayOfNumber,num2Index) === 0 && getArrayEl(arrayOfNumber, num3Index) === 0

    if(oneHundred){
        return getArrayEl(tenMutiples, arrayOfNumber[num1Index]) as string
    }
    
    const firstPart = getArrayEl(hundredTohundred, arrayOfNumber[num1Index])

    const secondPart = getLessHundred(num2Index, num3Index);
    
    if(getArrayEl(arrayOfNumber, num1Index) === 0){
        return `${secondPart}`
    }

    return `${firstPart} e ${secondPart}`
}

function getNum(){
    let placeCount:number = 0;
    let placeArray = 0
    let count:string | number =  Math.ceil(arrayOfNumber.length / 3)
    let number:(string[] | string) = new Array()
    while (count > 0) {

        const result = 
            getLessThousand(
                arrayLength(arrayOfNumber) - (placeCount+3), 
                arrayLength(arrayOfNumber) - (placeCount+2), 
                arrayLength(arrayOfNumber) - (placeCount+1)
            )
        ;

        const applyPlaces = `${result} ${setCondition(placeCount, placeArray, count)}`

        number.unshift(applyPlaces)
        placeCount+=3
        placeArray++
        count--
    }
    
    return adjustString(number.join(' '))
}

export default function toExtense(num:number){
    splitNum(num)
    
    return getNum()
}

