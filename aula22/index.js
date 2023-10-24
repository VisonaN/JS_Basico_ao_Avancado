/*                             OPERADORES DE COMPARAÇÃO EM JS

* > - Maior que
* >= - Maior que ou igual a (Se qualquer uma for verdadeira vai resultar em true / Se qualquer uma das duas for falso vai resultar em false)
* < - Menor que
* <= - Menor que ou igual a (Se qualquer uma for verdadeira vai resultar em true / Se qualquer uma das duas for falso vai resultar em false)
* == - Igualdade (Checa valor) * Não é recomendável utilizar esse
* === - Igualdade estrita (Checa valor e tipo)
* != - Diferente (Checa valor) * Não é utilizado
* !== - Diferente estrito (Valor e tipo)
*/
/*
const comp = 10 > 5;
console.log(comp); => True
*/
/*
const comp = 10 >= 5; // Até 10 vai ser true, depois disso vai dar false: 10 >= 11;
console.log(comp); // => true

const comp1 = 10 < 11; // Ou 10 <= 11 => Vai retornar true também / E também 12 <= 11 => false
console.log(comp1); // => true
*/
/* Outro Exemplo, mas com variáveis
const num1 = 10;
const num2 = 11;
const comp = num1 < num2; // => true
console.log(comp);
*/
/* PORQUE NÃO USAR '==' => Acaba fazendo uma conversão de tipo no código fazendo com que haja problemas futuros nele
const num1 = 10; // Number
const num2 = '10'; // String
const comp = num1 == num2; // => true
console.log(comp);
*/
/* AO INVÉS DO PRIMERO USAR '===' => Que verifica valor e tipo
const num1 = 10; // Number
const num2 = '10'; // String
const comp = num1 === num2; // => false
console.log(comp);
*/
/* PORQUE NÃO USAR '!=' => Acaba fazendo uma conversão de tipo no código fazendo com que haja problemas futuros nele
const num1 = 10; // Number
const num2 = '10'; // String
const comp = num1 != num2; // => false
console.log(comp);
*/
/* AO INVÉS DO PRIMERO USAR '!==' => Que verifica valor e tipo
const num1 = 10; // Number
const num2 = '10'; // String
const comp = num1 !== num2; // => true
console.log(comp);
*/