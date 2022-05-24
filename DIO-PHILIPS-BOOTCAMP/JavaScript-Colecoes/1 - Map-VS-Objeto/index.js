// Características:
// - Uma coleção de arrays no formato [chave, valor];
// - Pode ser iterado por um loop for...of

const myMap = new Map()

// Métodos - adicionar , ler e deletar

myMap.set('apple', 'fruit');
// Map(1) {"apple" => "fruit"}

myMap.get("apple");
// "fruit"

myMap.delete("apple")
// true

myMap.get("apple")
// undefined

/* Diferença entre map e objeto
    - Maps podem ter chaves de qualquer tipo;
    - Maps possuem a propriedade length;
    - Maps são mais fáceis de iterar;
    - Utilizado quando o valor das chaves é desconhecido;
    - Os valores tem o mesmo tipo */