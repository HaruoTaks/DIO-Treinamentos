// Arrays
// Spread - Uma forma de lidar separadamente com elementos; 
// O que era parte de um array se torna parte de um elemento;

// Exemplo 

function sum(x,y,z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

//Rest - Combina os argumentos em um array; 
// O que era um elemento independentese torna parte de um array
// Exemplo

function confereTamanho(...args) {
    console.log(args.length)
}

confereTamanho() // 0
confereTamanho(1, 2) // 2
confereTamanho(3, 4, 5) // 3

//---------------------------------------------------------------------------
// Objetos
// Object Destructuring - Entre chaves{}, podemos filtrar apenas os dados que nos interessam em um objeto

// Exemplo

const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

userId(user);
// Retorno esperado: 42

getFullName(user)
// Retorno esperado: John Doe