// O objeto Error
// Exemplo

//new Error(message, fileName, lineNumber)

// todos os parâmetros são opcionais

const MeuErro = new Error('Mensagem Inválida');
// Nomeando o nome do erro
MeuErro.name = 'InvalidMessage';
console.log(MeuErro.stack);
console.log(MeuErro);
throw MeuErro;
