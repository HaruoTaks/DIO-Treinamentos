// Set - São estruturas que armazenam apenas valores únicos
// Extrutura
// Exemplo

const myArray = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 2, 1]

const mySet = new Set();

// Métodos - adicionar, consultar e deletar

// adicionar

mySet.add(1);
mySet.add(5);

// Consultar

mySet.has(1);
// true
mySet.has(3);
//false

// Deletar

mySet.delete(5);

// Set Vs Array
/*
- Possui valores únicos;
- Em vez da propriedade length, consulta-se o número de registros pela propriedade size;
- Não possui os métodos map, filter, reduce etc.
*/