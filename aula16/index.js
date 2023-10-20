// OBJETO Math

let num1 = 9;
console.log(num1 ** (1/2)); // Raiz quadrada de um número
console.log(num1 ** 0.5); // Outra forma de fazer a raiz quadrada

// EM JS VOCÊ PODE DIVIDIR UM NÚMERO POR 0 => Dá Infinity e vai retornar como true

console.log(100 / 0);
console.log(!!(100 / 0)); // !! => Verificação se é true ou false

// let num2 = Math.floor(num1); // Arredonda o valor pra baixo (número inteiro mais próximo)
// let num2 = Math.ceil(num1); // Arredonda o valor pra cima (número inteiro mais próximo)
// let num2 = Math.round(num1); // Arredonda o valor para um inteiro mais próximo => Nesse caso se tivesse em 9.50 iria pra 10 9.49 pra 9
// console.log(Math.max(1, 2, 3, 4, 5, -10, -9, -50, 1500, 8, 7, 6)); // Pega o maior número em uma sequência
// console.log(Math.min(1, 2, 3, 4, 5, -10, -9, -50, 1500, 8, 7, 6)); // Pega o menor número em uma sequência
// console.log(Math.random()); // Gera um número aleatório entre 0 e 1 (1 nunca vem)
// const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // * (10 - 5) + 5 => Escolhendo um número aleatório entre 10 e 5
// console.log(Math.PI);
// console.log(Math.pow(2, 10)); // Math.pow(2, 10) significa 2 elevado a 10 => que é igual ao operado do JS 2**10