/*
Escreva uma função que recebe um número e retorne o seguinte:
Número é divisível por 3 = Fizz
Número divisível por 5 = Buzz
Número divisível por 3 e 5 = FizzBuzz
Número NÃO é divisível por 3 e 5 = Retorna o próprio número
Checar se o número é realmente um número
Use a função com números de 0 a 100
*/

// MINHA SOLUÇÃO

/*
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 0;
const max = 100;
let rand = random(min, max);

if (rand % 3 === 0) {
    return console.log('Fizz');
} else if (rand % 5 === 0) {
    return console.log('Buzz');
} else if (rand % 3 === 0 && rand % 5 === 0) {
    return console.log('FizzBuzz');
} else if (rand % 3 !== 0 && rand % 5 !== 0) {
    return console.log(rand);
} else if (rand === Number) {
    return console.log(rand)
} else {
    return console.log('Sei lá')
};
*/

// SOLUÇÃO DO CURSO

function FizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero
}

console.log('a', FizzBuzz('a'))

for (let i = 0; i <= 100; i++) {
    console.log(i, FizzBuzz(i))
}