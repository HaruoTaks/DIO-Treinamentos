// auto invocável

// exemplo 1 - anônima

(
    // função anônima
    function() {
        let name = "Digital Innovation One"
        return name;
    }
)();// Chamada da função
// retorno esperado = Digital Innovation One

// exemplo 2 - com parametros

(
    function(a, b) {
        return a + b;
    }
)(1,2);

// retorno esperado = 3

//exemplo 3 - armazenando em uma const

const soma3 = (
    function() {
        return a + b;
    }
)(1, 2);

console.log(soma3) //retorno esperado = 3


//----------------------------------------------
// Callbacks - Utilizando callbacks, você tem maior controle da ordem de chamadas

//exemplo 1

const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const soma = function(num1, num2) {
    return num1 + num2;
}

const sub = function(num1, num2) {
    return num1 - num2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSub); // -1
console.log(resultSoma); // 3