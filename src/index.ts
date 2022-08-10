// desafio: GERAR UM NÚMERO POR EXTENSO 
/*
    DESNECESSÁRIO NO MOMENTO
    function removeZeroFromLastIndex(array: number[]) {
        if(array[array.length - 1] === 0){
            array.pop()
        }
    }
*/

const imutaveis:string[] = [
    'zero','um', 'dois', 'três','quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 
    'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze',
    'dezesseis', 'dezessete', 'dezoito', 'dezenove'
];

const tenMutiples = [
    '','cem', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa',''
]
const hundredTohundred = [
    'mil', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos',
    'seiscentos', 'setecentos', 'oitocentos', 'novecentos'
]
const casas = [
    'cento' ,'mil', [ 'milhão', 'milhões' ]
]

let arrayOfNumber: number[] = new Array();

function joinNumber(num1:number, num2:number) {
    return Number(`${num1}${num2}`)
}

function lastArrayItem (array:(string| number)[]) {
    return array[array.length - 1]
}

function getArrayEl(array: (number | string)[], index: number) {
    return array[index]
}


function splitNum(num:number){
    const splited:(string | number)[] = num.toString().split('')
    splited.forEach(el => {
        arrayOfNumber.push(Number(el))
    })
}

function getTwentytoHundred(num1index: number, num2index:number){
    return `${getArrayEl(tenMutiples, arrayOfNumber[num1index]) } ${ lastArrayItem(arrayOfNumber) > 0 ? `e ${getArrayEl(imutaveis, arrayOfNumber[num2index])}` : ''}`
}

function getMoreThanHundred(num1index:number, num2index:number, num3index:number){
    return `${ getArrayEl(hundredTohundred, arrayOfNumber[num1index]) } ${arrayOfNumber[num2index] > 1 ? 'e ' + getTwentytoHundred(1, 2) : 'e ' + getArrayEl(imutaveis, joinNumber(arrayOfNumber[num2index], arrayOfNumber[num3index]) )}`
}

function numeroExtenso (num:number) {
    splitNum(num)
    if(num <= 19 ){
        return getArrayEl(imutaveis, num)
    }
    if(num > 19 && num <= 100) {
        return getTwentytoHundred(0, 1)
    }
    if( num >= 101 && num < 1000) {
        return getMoreThanHundred(0, 1, 2)
    }
}

console.log(numeroExtenso(1000))
