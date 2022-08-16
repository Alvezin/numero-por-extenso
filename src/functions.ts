import { arrayLength, joinNumber, checkUndefined, getArrayEl } from './auxFunctions'
import { arrayOfNumber, casas, hundredTohundred, imutaveis, tenMutiples } from './arrays'


function splitNum(num:number){
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

function getLessThousand(num1Index:number, num2Index:number, num3Index:number){

    checkUndefined(arrayOfNumber,num1Index, num2Index, num3Index)
    
    const joinNumberFunc = joinNumber(arrayOfNumber[num2Index], arrayOfNumber[num3Index])

    if(joinNumberFunc < 20){
        return `${getArrayEl(imutaveis, joinNumberFunc)}`
    }

    const oneHundred = getArrayEl(arrayOfNumber,num2Index) === 0 && getArrayEl(arrayOfNumber, num3Index) === 0

    if(oneHundred){
        return `${getArrayEl(tenMutiples, arrayOfNumber[num1Index])}`
    }

    const firstPart = `${getArrayEl(hundredTohundred, arrayOfNumber[num1Index])} ${arrayOfNumber.indexOf(arrayOfNumber[num2Index]) > 0 ?  'e' : ''}`;

    const secondPart = `${getLessHundred(num2Index, num3Index)}`;

    return `${firstPart} ${secondPart}`
}

function getNum(){
    let placeCount:number = 0;
    let placeArray = 0
    let count:string | number =  Math.ceil(arrayOfNumber.length / 3)
    let number = new Array()
    while (count > 0) {
        const result = `${getLessThousand(arrayLength(arrayOfNumber) - (placeCount + 3), arrayLength(arrayOfNumber) - (placeCount+2), arrayLength(arrayOfNumber) - (placeCount+1))} ${casas[placeArray]}`
        number.unshift(result)
        placeCount+=3
        placeArray++
        count--
    }
    return number.join(' ')
}

export default function toExtense(num:number){
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
    if(num <= 9999999999999){
        return getNum()
    }
}

