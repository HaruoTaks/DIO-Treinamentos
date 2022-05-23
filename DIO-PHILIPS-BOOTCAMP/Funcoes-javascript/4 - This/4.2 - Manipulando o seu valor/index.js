// Método call
// Exemplo

const pessoa = {
    nome: 'Rachel',
};

const animal = {
    nome: 'Lilica',
};

function getSomething() {
    console.log(this.nome);
}

getSomething.call(pessoa); //escolhendo a const pessoa no call retorna o nome da dona do animal
// Rachel
getSomething.call(animal);// escolhendo a const animal no call retorna o nome do animal
// Lilica

// É possível passar parâmetros para essa função separando-os por vírgulas.
// Exemplo

const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5);// ira somar num1,num2 mais os valores passados para a e b
// 12
//---------------------------------------------------------------------------------------
// Apply
// Exemplo 1
const pessoa2 = {
    nome: 'Rachel',
};

const animal2 = {
    nome: 'Lilica',
};

function getSomething2() {
    console.log(this.nome);
}

getSomething2.apply(pessoa2);//escolhendo a const pessoa no apply retorna o nome da dona do animal
// Rachel
getSomething2.apply(animal2);// escolhendo a const animal no apply retorna o nome do animal
// Lilica

// Exemplo 2
// Diferença entra Call e Apply - É possível passar parâmetros para essa função dentro de um array

const myObj2 = {
    nume1: 2,
    nume2: 4,
};

function soma2(a, b) {
    console.log(this.nume1 + this.nume2 + a + b);
}

soma2.apply(myObj2, [1, 5]);
// 12

//-------------------------------------------------------
// Bind - Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro
// Exemplo

const retornaNomes = function() {
    return this.nome;
};

let bruno = retornaNomes.bind({ nome: 'Bruno'});

bruno();
// Bruno