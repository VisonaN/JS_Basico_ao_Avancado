/*
let nome = 'João'; // Variável: Pode mudar o valor de acordo com o código,por isso chama variável.

console.log(nome, 'nasceu em 1984');
console.log('Em 2000', nome, 'conheceu Maria');
console.log(nome, 'casou-se com Maria em 2012');
console.log('Maria teve um filho com', nome, 'em 2015');
console.log('O filho de', nome, 'e Maria se chama Eduardo');
*/
/*
let nome; // Declarou a variável mas não atribuiu valor a ela => undefined
nome = 'João'; // Inicializando a variável depois de ter declarado ela
console.log(nome);
nome = 'Paulo';
console.log(nome);

// let nome; => Não pode redeclarar a mesma variável com let, vai dar erro de sintaxe, pois já foi declarada. Esse erro para a execução do código
*/

/* Não podemos criar variáveis com palavras reservadas pelo JS
-> let let;
-> let console;
-> let if;
Entre outras
*/

/* As variáveis precisam ter nomes significativos (para evitar confusão durante o código)
Ex:
let nomeCliente = 'Paulo';
console.log(nomeCliente);
*/

// Não pode começar o nome de uma variável com número
// Dar preferência em criar variáveis com letras minúsculas a não ser que sejam funções construtoras
// Depois da primeira letra minúscula pode colocar números
// O nome das variáveis não podem conter espaços ou traços -> let nome-Cliente; ou let nome Cliente;
// Para cirar variáveis com nomes compostos, utilizamos a notação camelCase => primeira palavras com letra minúscula e as seguintes com a primeira letra maiúscula => nomeCompleto => nomeCompletoDoCliente e por aí vai
// As variáveis são case-sesitive => letra maiúscula e letra minúscula faz diferença:
// let nomeCliente = 'Paulo' é diferente de
// let nomecliente = 'Visoná'
// NÃO UTILIZE VAR, UTILIZE LET SEMPRE QUE VOCÊ ACHAR QUE ALGUMA COISA VAI ALTERAR NO VALOR DA VARIAVEL