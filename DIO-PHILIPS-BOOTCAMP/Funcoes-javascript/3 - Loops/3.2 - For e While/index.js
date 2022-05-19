// For - Loop dentro de elementos iteráveis (arrays, strings)
// exemplo 

function multiplicaPorDois(arr) {
    let multiplicados = [];

    for(let i = 0; i < arr.length; i++) {
        multiplicados.push(arr[i] * 2);
    }
    return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];

multiplicaPorDois(meusNumeros);
// [4, 66, 912, 712, 80]

// For in - Loop entre propriedades enumeráveis de um objeto
// Exemplo 1

function forInExemplo(obj) {
    for(prop in obj) {
        console.log(prop);
    }
}

const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo(meuObjeto);
// nome
// idade
// cidade

// Exemplo 2
function forInExemplo2(obj2) {
    for(prop2 in obj2) {
        console.log(obj2[prop2]);
    }
}

const meuObjeto2 = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo2(meuObjeto2);

// For of - Loop entre estruturas iteráveis (arrays, Strings)
// Exemplo 1

function logLetras(palavra){
    for(letra of palavra) {
        console.log(letra);
    }
}

const palavra = "abacaxi";

logLetras(palavra);
// a
// b
// a
// c
// a
// x
// i

// Exemplo 2

function logNumeros(nums) {
    for(num of nums) {
        console.log(num);
    }
}

const nums = [30, 20, 233, 2];

logLetras(nums);
// 30
// 20
// 233
// 2

//--------------------------------------------------
// while -  Executa instruções até que a condição se torne falsa

function exemploWhile() {
    let num2 = 0

    while(num2 <= 5){
        console.log(num2);
        num2++;
    }
}

exemploWhile()
// 0
// 1
// 2
// 3
// 4
// 5

// Do..while - Executa instruções até que a condição se torne falsa
// Porém a primeira execução sempre ocorre

// Exemplo 1
function exemploDoWhile() {
    let num3 = 0;

    do {
        console.log(num3);
        num3++;
    } while(num3 <= 5);
}

exemploDoWhile()
// 0
// 1
// 2
// 3
// 4
// 5

// Exemplo 2
function exemploDoWhile2() {
    let num4 = 0;

    do {
        console.log(num4);
        num4++;
    } while(num4 <= 5);
}

exemploDoWhile2()
//6
