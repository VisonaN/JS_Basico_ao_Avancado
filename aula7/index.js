// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não pode conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não pode declarar uma constante sem inicializar ela =>
// => const nome; Vai dar erro
// Não pode modificar o valor de uma constante =>
// => nome = 'Visoná' Vai dar erro
// NÃO UTILIZE VAR, UTILIZE CONST

// const nome = 'Paulo';
// console.log(nome)

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);

console.log(typeof(primeiroNumero))
console.log(typeof(resultado))
console.log( typeof (primeiroNumero + segundoNumero))

// Para saber o tipo do que for declarado usar o typeof()