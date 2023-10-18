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

*/

// let contador = 10;  Não pode usar const pois vai dar erro devido ao fato de uma constante não permitir que altere o seu valor
// contador++;  => ++ (operador de incremento) adiciona de um em um (pode ser usado antes ou depois => ++contador ou contador++)
// contador--;  => -- (operador de decremento) subtrai de um em um (pode ser usado antes ou depois => --contador ou contador--)
const passo = 2;
let contador = 0;
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