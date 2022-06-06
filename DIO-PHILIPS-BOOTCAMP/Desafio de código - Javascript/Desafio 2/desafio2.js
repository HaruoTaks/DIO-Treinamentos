// Programa verifica em qual fase da lua está
let lines = gets().split('\n');

let line = lines.shift().split(" ");
let inicio = parseInt(line[0]);
let final = parseInt(line[1]);

if (inicio >= 0 && final <= 2) {
    print('nova');
} else if (final > inicio && final <= 96) {
    print('Crescente');
} else if ( inicio >= final && final <= 97 ) {
    print('minguante');
} else { 
    print('cheia');
}