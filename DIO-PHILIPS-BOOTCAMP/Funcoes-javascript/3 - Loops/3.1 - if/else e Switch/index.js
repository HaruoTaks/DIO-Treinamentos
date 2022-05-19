// if/else
// exemplo 1

function numeroPositivo(num) {
    let resultado;

    if(num < 0) {
        resultado = false;
    }else {
        resultado = true;
    }
    return resultado;
}

numeroPositivo(2);
// Retorno esperado True

numeroPositivo(-9);
// retorno esperado False

// exemplo 2

function numeroPositivo(num) {
    let resultado;

    const ehNegativo = num < 0;

    if(ehNegativo) {
        resultado = false;
    }else {
        resultado = true;
    }
    return resultado;
}

numeroPositivo(2);
// Retorno esperado True

numeroPositivo(-9);
// retorno esperado False

// exemplo 3

function numeroPositivo(num) {
    const ehNegativo = num < 0;

    if(ehNegativo) {
        return false;
    }
    return true;
}

numeroPositivo(2);
// Retorno esperado True

numeroPositivo(-9);
// retorno esperado False

// Exemplo 4

function numeroPositivo(num) {
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if (ehNegativo) {
        return "Esse número é negativo!";
    } else if (!ehNegativo && maiorQueDez) {
        return "Esse número é positivo e maior que 10!"
    }
    return "Esse número é positivo!";
}

numeroPositivo(2);
// retorno esperado: Esse número é positivo!

numeroPositivo(-2);
// retorno esperado: Esse número é negativo!

numeroPositivo(40);
// retorno esperado: Esse número é positivo e maior que 10!

//------------------------------------------------------------------

/* Switch - Equivale a uma comparação de tipo e valor (===)
    - Sempre precisa de um valor "default"
    - Ideal para quando se precisa comparar muitos valores */

function getAnimal(id) {
    switch(id) {
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default:
            return "peixe";
    }
}

getAnimal(1) // Retorno: cão
getAnimal(4) // Retorno: peixe
getAnimal("1") // Retorno: peixe