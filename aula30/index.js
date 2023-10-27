//                             ATRIBUIÇÃO VIA DESESTRUTURAÇÃO EM ARRAYS

// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A
// // Desestruturação (do lado esquerdo) e a Direita um array fazendo a atribuição
// // [a, b, c] = [1, 2, 3];
// const letras = [b, c, a];
// [a, b, c] = letras;

/* console.log(a, b, c);
//Índice-array   0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Valor-array    ^  ^  ^  ^  ^  ^  ^  ^  ^
const [primeiroNumero, segundoNumero] = numeros;
console.log(primeiroNumero, segundoNumero);

// ... rest, ... spread
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um,  , tres,  , cinco,  , sete] = numeros; // Pulando os números com ,espaço vazio
console.log(um, tres, cinco, sete);
*/
//Índice array maior      0          1          2
    const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
//Índice array menor   0  1  2    0  1  2    0  1  2
// console.log(numeros[1][2]) Acessando o número 6 na array (primeiro colchete acessa o índice da array maior onde está o array que tem o número 6 e o segundo colchete acessa o índice da array menor onde está o número 6)
//const [,[,,seis]] = numeros;  Atribuição via desestruturação
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]); // Atribuição via desestruturação de forma mais fácil para acessar os índices que a de cima (const [,[,,seis]] = numeros;)