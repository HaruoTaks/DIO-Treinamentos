// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados 
// e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let quantidadePositivos = 0;

for (let i = 0; i < 6; i++) {

  const valorInformadoPeloUsuario = gets();
  // verifica se o número é positivo
  if (valorInformadoPeloUsuario >0){
    // caso seja positivo ele adiciona +1 na quantidade de números positivos
    quantidadePositivos++;
  }
}

print(`${quantidadePositivos} valores positivos`);