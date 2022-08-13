export const imutaveis:string[] = [
    'zero','um', 'dois', 'três','quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 
    'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze',
    'dezesseis', 'dezessete', 'dezoito', 'dezenove'
];

export const tenMutiples = [
    '','cem', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa',''
]
export const hundredTohundred = [
    'mil', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos',
    'seiscentos', 'setecentos', 'oitocentos', 'novecentos'
]
export const casas = [
    'cento' ,'mil', [ 'milhão', 'milhões' ]
]
export let arrayOfNumber: number[] = new Array();

function arrayLength(array:(string | number)[]){
    return array.length
}

function teste(num:number){
    if(num <= 19){
        getArrayEl(imutaveis, num)
    }
    if(num <= 99){
    }
}

export function joinNumber(num1:number, num2:number) {
    return parseInt(`${num1}${num2}`)
}

export function lastArrayItem (array:(string| number)[]) {
    return array[array.length - 1]
}

export function getArrayEl(array: (number | string)[], index: number) {
    return array[index]
}

export function getLessHundred(num1index: number, num2index:number):string {
    const firstPart = `${getArrayEl(tenMutiples, arrayOfNumber[num1index]) }`;

    const secondPart = `${getArrayEl(imutaveis, arrayOfNumber[num2index])}`;

    const condition = `${getArrayEl(arrayOfNumber, num2index) >= 1 ? `e ${secondPart}` : ''}`

    return `${firstPart} ${condition}`
}

export function getLessThousand(num1index:number, num2Index:number, num3Index:number){
    const firstPart = `${ getArrayEl(hundredTohundred, arrayOfNumber[num1index]) }`;

    const secondPart = `e ${getArrayEl(arrayOfNumber,num2Index) > 0 ? getLessHundred(num2Index, num3Index) : getArrayEl(imutaveis, arrayOfNumber[num3Index])}`;

    const oneHundred = getArrayEl(arrayOfNumber,num2Index) === 0 && getArrayEl(arrayOfNumber, num3Index) === 0

    if(oneHundred){
        return getArrayEl(tenMutiples, arrayOfNumber[num1index])
    }

    return `${firstPart} ${secondPart}`
}

export function splitNum(num:number){
    const splited:(string | number)[] = num.toString().split('')
    splited.forEach(el => {
        arrayOfNumber.push(Number(el))
    })
}
/*
export function getMoreThanHundred(num1index:number, num2index:number, num3index:number){
    return `${ getArrayEl(hundredTohundred, arrayOfNumber[num1index]) } ${arrayOfNumber[num2index] > 1 ? 'e ' + getTwentytoHundred(num2index, num3index) : 'e ' + getArrayEl(imutaveis, joinNumber(arrayOfNumber[num2index], arrayOfNumber[num3index]) )}`
}
*/
