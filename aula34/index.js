/*                                ESTRUTURA DE REPETIÇÃO - FOR OF -                         */

// É Específico para estruturas iteráveis (que tem índice - string, array - )
// Índices    01234567891011
const nome = 'Paulo Visoná';
// De forma clássica =>
// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]); // Fazendo um console.log() para cada índice da string
// }

// Com - For in - 
// for (let i in nome) {
//     console.log(nome[i]);
// }

/* EM AMBOS OS FOR PERCEBEMOS O PADRÃO DE TER QUE USAR O ÍNDICE PARA VER NO console.log() */

for (let valor of nome) {
    console.log(valor);
};

// For of funciona tanto em strings quanto em arrays

console.log('---------------------');

// For clássico na array
console.log('For clássico na array');
const nomes = ['Paulo', 'Visoná', 'Neto'];
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
};
console.log('---------------------');

// For in na array
console.log('For in na array');
for (let i in nomes) {
    console.log(nomes[i]);
};
console.log('---------------------');
// For of na array
console.log('For of na array');
for (let valor of nomes) {
    console.log(valor);
};
console.log('---------------------');
// forEach dentro da array
nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});

/* Se for usar ARRAY pode usar o FOR clássico / O FOR in - Retorna o índice - E precisa do array para pegar os valores: console.log(nomes[i]); / O FOR of - retorna o valor - console.log(valor); */

/* Se for usar OBJETOS não conseguimos usar o FOR OF pois os objetos não são iteráveis / PODE usar o FOR IN pois pode pegar a chave do objeto for (let i in pessoa) { console.log( i, pessoa[i]) } */

/* 
FOR Clássico - Geralmente com iteráveis (array ou strings) 
FOR in - Retorna o índice ou chave (string, array ou objetos)
FOR of - Retorna o valor em si (iteráveis - array, string)
*/