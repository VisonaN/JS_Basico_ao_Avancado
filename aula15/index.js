/* RESOLUÇÃO USANDO AS FERRAMENTAS DO JS
// Padrão que o Js usa para fazer contas => IEEE 754-2008

let num1 = 0.7; // Number
let num2 = 0.1; // Number

// num1 += num2; // num1 = num1 + num2;

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0 // Dá 0.9999999999999999
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
num1 += num2; // 1.5
num1 += num2; // 1.6
num1 += num2; // 1.7
num1 += num2; // 1.8
num1 += num2; // 1.9
num1 += num2; // 2.0

// num1 = num1.toFixed(2); // Para corrigir para 1.00 mas não corrige de fato, checando com Number.isInteger(num1) => retorna false

num1 = parseFloat(num1.toFixed(2)); // Assim resolve o problema de fato / ou num1 = Number(num1.toFixed(2));
console.log(num1); 
console.log(Number.isInteger(num1)) // Confirmando se é inteiro de fato



// console.log(num1.toString() + num2); // Concatenação / Nesse caso só alterou pra string temporariamente
// num1 = num1.toString(); // Altera para string
// console.log(num1.toString(2)) // Representação binária do num1
// console.log(num1.toFixed(2)) // toFixed() arredonda as casas decimais
// console.log(Number.isInteger(num1)); // Number.isInteger() verifica se o número é inteiro, retornando true -> Se for inteiro ou false -> Se não for inteiro
// let temp = num1 * '5'; // Dá pra fazer conta com string se for um número mas se já sabe que vai receber uma string tem que converter ela para número
// console.log(Number.isNaN(temp)); // Verifica se a conta é inválida retornando true -> se for inválida e false -> se não for inválida
*/

// RESOLUÇÃO USANDO CONTAS

let num1 = 0.7; // Number
let num2 = 0.1; // Number

num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

console.log(num1)
console.log(Number.isInteger(num1))