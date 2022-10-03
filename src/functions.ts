import { 
    arrayLength,
    joinNumber,
    checkUndefined, 
    getArrayEl, 
    getObjEl,
    setPlaces,
    adjustString, 
} from './auxFunctions'
import { 
    arrayOfNumber,
    imultableNumbers,
    tenMutiplesNumbers,
    hundredMultiplesNumbers
} from './arrays'


interface indexesObj  {
    num1Index:number,
    num2Index:number,
    num3Index:number
}

function getIndex(placeCount:number, object:indexesObj){
    return (
        object.num1Index = arrayLength(arrayOfNumber) - (placeCount+3),
        object.num2Index = arrayLength(arrayOfNumber) - (placeCount+2),
        object.num3Index = arrayLength(arrayOfNumber) - (placeCount+1)
    )
}

function splitNum(num:number){
    const splited:string[] = num.toString().split('')
    splited.forEach(el => {
        arrayOfNumber.push(parseInt(el))
    })
}



function twoDecimalPlaces(num1Index: number, num2Index:number, count:number):string {
    const joinNumberFunc = joinNumber([
        getArrayEl(arrayOfNumber, num1Index) as number, 
        getArrayEl(arrayOfNumber, num2Index) as number
    ])
    if(joinNumberFunc < 20){
        const condition = count === Math.ceil(arrayOfNumber.length / 3) && 
            arrayLength(arrayOfNumber) > 3  ? "e " : ""
        return condition + getObjEl(imultableNumbers, joinNumberFunc)
    }


    const firstPart = getObjEl(tenMutiplesNumbers, getArrayEl(arrayOfNumber, num1Index) as number);

    const secondPart =  getObjEl(imultableNumbers, getArrayEl(arrayOfNumber, num2Index) as number);

    const condition = getArrayEl(arrayOfNumber, num2Index) >= 1 ? `e ${secondPart}` : ''

    return `${firstPart} ${condition}`
}



function threeDecimalPlaces(num1Index:number, num2Index:number, num3Index:number, count:number, lastMember:string){
    
    checkUndefined(arrayOfNumber, [num1Index, num2Index, num3Index])
    const allZero = joinNumber([
        getArrayEl(arrayOfNumber,num1Index) as number,
        getArrayEl(arrayOfNumber, num2Index) as number,
        getArrayEl(arrayOfNumber, num3Index) as number
    ]) === 0


    const hundred = getArrayEl(arrayOfNumber,num1Index) > 0 && 
        getArrayEl(arrayOfNumber,num2Index) === 0 && 
        getArrayEl(arrayOfNumber, num3Index) === 0
    ;
    if(hundred){
        if(getArrayEl(arrayOfNumber, num1Index) === 1) return getObjEl(hundredMultiplesNumbers, 100)
        return getObjEl(hundredMultiplesNumbers, getArrayEl(arrayOfNumber, num1Index) as number)
    }

    if( allZero ){
        if(lastMember){
            if(lastMember.trim() === "e" || lastMember.trim() === "" ) return ''
        }
        return count === Math.ceil(arrayOfNumber.length / 3) ? '' : "e"
    }


    const firstPart = getObjEl(hundredMultiplesNumbers, getArrayEl(arrayOfNumber, num1Index) as number);
    const secondPart = twoDecimalPlaces(num2Index, num3Index, count);

    if(getArrayEl(arrayOfNumber, num1Index) === 0){
        return secondPart
    }

    return `${firstPart} e ${secondPart}`
}



function getNum(){
    let placeCount:number = 0;
    let placeArray = 0
    let count:number =  Math.ceil(arrayOfNumber.length / 3)
    let number:string[] = new Array()
    while (count > 0) {
        
        let indexes = {
            num1Index: 0,
            num2Index: 0,
            num3Index: 0
        }

        getIndex(placeCount, indexes)
        if(count === 1){
            checkUndefined(arrayOfNumber,[indexes.num1Index, indexes.num2Index, indexes.num3Index])
            getIndex(placeCount, indexes)
        }

        let result = 
            threeDecimalPlaces(
                indexes.num1Index, 
                indexes.num2Index, 
                indexes.num3Index,
                count,
                number[0]
            )
        ;
        const applyPlaces = `${result} ${setPlaces(placeCount, placeArray, count)}`
        number.unshift(applyPlaces)
        placeCount+=3
        placeArray++
        count--
    }
    
    return adjustString(number.join(' '))
}



export default function toExtense(num:number){
    if(num === 0 )return imultableNumbers[0]
    const split = splitNum
    const get = getNum
    splitNum(num)
    return get()
}

