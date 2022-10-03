export const casas = [
    '','mil', 'milhões', 'bilhões','trilhões', "quatrilhões"
]


export interface NumbersObj  {
    [index:number]:string,
}
export const imultableNumbers:NumbersObj = {
    0: 'zero',
    1: "um",
    2: "dois",
    3: "três",
    4: "quatro",
    5: "cinco",
    6: "seis",
    7: "sete",
    8: "oito",
    9: "nove",
    10: "dez",
    11: "onze",
    12: "doze",
    13: "treze",
    14: "quatorze",
    15: "quinze",
    16: "dezesseis",
    17: "dezessete",
    18: "dezoito",
    19: "dezenove",
}

export const tenMutiplesNumbers:NumbersObj = {
    0: "",
    1:"dez",
    2:"vinte",
    3:"trinta",
    4:"quarenta",
    5:"cinquenta",
    6:"sessenta",
    7:"setenta",
    8:"oitenta",
    9:"noventa"
}

export const hundredMultiplesNumbers:NumbersObj = {
    0: "",
    1:"cento",
    2:"duzentos",
    3:"trezentos",
    4:"quatrocentos",
    5:"quinhentos",
    6:"seiscentos",
    7:"setecentos",
    8:"oitocentos",
    9:"novecentos",
    100:"cem"
}

export const arrayOfNumber: number[] = new Array();
