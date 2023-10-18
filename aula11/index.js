/* OPERADORES ARITMÉTICOS

* + Adicção / Concatenação (unir dois valores) -> console.log(num1 + num2);
* - Subtração -> console.log(num1 - num2);
* / Divisão -> console.log(num1 / num2);
* * Multiplicação -> console.log(num1 * num2);
* ** Potenciação -> console.log(num1 ** num2);
* % Resto da Divisão -> console.log(num1 % num2);

* A ORDEM DE PRECEDÊNCIA É =>
* ()
* **
* * / % => Esquerda para direita
* + - => Esquerda para direita

* OPERADORES DE ATRIBUIÇÃO
* +=
* *=
* **=
* -=
*/

// let contador = 10;  Não pode usar const pois vai dar erro devido ao fato de uma constante não permitir que altere o seu valor
// contador++;  => ++ (operador de incremento) adiciona de um em um (pode ser usado antes ou depois => ++contador ou contador++)
// contador--;  => -- (operador de decremento) subtrai de um em um (pode ser usado antes ou depois => --contador ou contador--)
// const passo = 5;
// let contador = 0;
/*
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
*/
// Atalho para não ter que ficar escrevendo esse monte de código para ficar somando

// contador += passo;  contador = contador + passo

const num1 = 10;
const num2 = 'Paulo'; // Mas se tiver um número entre aspas o JS vai conseguir interpretar e fazer a conta
// Para converter um número dentro de uma string pode ser usado o parseInt() para converter a string em número
console.log(num1 * num2); // Resulta em NaN (Not a Number)