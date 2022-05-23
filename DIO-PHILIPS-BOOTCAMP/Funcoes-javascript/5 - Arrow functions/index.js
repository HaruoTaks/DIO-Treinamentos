// Arrow Function

// Function
const helloWorld = function(){
    return "Hello World";
}

// Arrow
const helloWorldA1 = () => {
    return "Hello World";
}

// Arrow2 - quando a function tem apenas uma linha, não é necessário o return
const helloWorldA2 = () => "Hello World";

const soma = (a, b) => a + b;
soma(4, 6);
//10

// caso receba apenas um parâmetro não precisa utilizar os parênteses
const soma1 = a => a;
soma(4);
// 4

// Arrow function não faz hoisting(Necessário declarar a função antes de chamar ela)
// "This" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar
// Não existe o objeto "Arguments";
// O construtur(ex: new MeuObjeto()) também não pode ser utilizado
