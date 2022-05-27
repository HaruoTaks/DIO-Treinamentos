// Assíncrono - Que não ocorre ou não se efetiva ao mesmo tempo
// O javascript por padrão roda de maneira síncrona

// Promisses - Objeto de processamento assíncrono
// Inicialmente, seu valor é desconhecido. Ela pode, então, ser resolvida ou rejeitada
/* Promisse pode ter 3 estado
    - Pending
    - Fulfilled
    - Rejected
*/
// Exemplo
const myPromise =  new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvida'));
    }, 2000);
});

// Manipulação
await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou !')
    .catch((err) => console.log(err.message));

// Após 2 segundos, retornará o valor
// "Resolvida passando pelo then e agora acabou !!"

//----------------------------------------------------
// Async/await - Funções assíncronas precisa dessas duas palavras chave.
// Exemplo
async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });
// funcoes assincronas tambem retornam promises
    const resolved = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message));

    return resolved;
}

// try/ catch

async function resolvePromise2() {
    const myPromise2 = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });

    let result2;

    try{
        result2 = await myPromise2
            .then((result2) => result2 + ' passando pelo then')
            .then((result2) => result2 + ' e agora acabou')
    } catch(err2) {
        result2 = err2.message;
    }

    return result2
}

