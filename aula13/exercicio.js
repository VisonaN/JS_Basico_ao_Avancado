let varA = 'A'; // Valor de A ter o valor de B
let varB = 'B'; // Valor de B ter o valor de C
let varC = 'C'; // Valor de C ter o valor de A
// Para resolver esse exercício tem que salvar o valor de varA em uma variável temporária para conseguir usar o valor mais tarde
/*
const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;
console.log(varA, varB, varC);
*/
            /* TEM UMA FORMA MAIS MODERNA DE RESOLVER */

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);

