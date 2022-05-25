// Explicar a diferença entre "throw" e "return"
// Exemplo Return - ele retorna o erro com um string
function verificaPalindromo(string) {
    if (!string) return "String inválida";

    return string === string.split('').reverse().join('');
}

console.log(verificaPalindromo(''));

// Exemplo throw
function verificaPalindromo2(string2) {
    if (!string2) throw "String inválida";

    return string2 === string2.split('').reverse().join('');
}

//console.log(verificaPalindromo2(''));

//-------------------------------------------------------
// Apresentar a implementação da declaração try/cath
// Exemplo 1
function tryCatchExemplo(string2) {
    try{
        return verificaPalindromo2(string2);
    }
    catch(e) {
        // exibe em um string
        console.log(e);
    }
}

tryCatchExemplo('');

// Exemplo 2

function tryCatchExemplo2(string2) {
    try{
        return verificaPalindromo2(string2)
    }
    catch(e) {
         // mostra o erro nas estatisticas
        throw e;
    }
    finally {
        console.log('A string enviado foi: ' + string2);
    }
}

tryCatchExemplo2('a');

// Exemplo 3 - Finally - executa independente do erro apresentado ou não
function tryCatchExemplo3(string3) {
    try{
        return verificaPalindromo2(string3)
    }
    catch(e) {
         // mostra o erro nas estatisticas
        throw e;
    }
    finally {
        console.log('A string enviado foi: ' + string3);
    }
}

tryCatchExemplo3('al');