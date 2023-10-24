//                                AVALIAÇÃO DE CURTO - CIRCUITO

/*                                     OPERADORES LÓGICOS                       

&& - AND => Todas as expressões precisam ser verdadeiras para dar true => false && true => false / O verificador para no primeiro valor falso
console.log('Paulo' && NaN && 'Visoná') => Vai retornar NaN
=> Em JS tudo pode ser avaliado
* Valores que são avaliados como false (FALSY - 'fingem' ser valores falsos) em JS:
false => Literalmente false
0 => Zero
'' "" `` => Strings vazias
null / undefined
NaN => Not a Number
* O RESTO VAI SER AVALIADO COMO TRUE

function falaOi () {
    return 'Oi';
}
let vaiExecutar = 'Paulo';

console.log(vaiExecutar && falaOi());

----------------------------------------------------------------------------------------------

|| - OR => Todas as expressões precisam ser falsas para dar false => false || true => true
Vai retornar o valor verdadeiro
console.log(0 || false || null || 'Paulo Visoná' || true); => Vai retornar 'Paulo Visoná' pois é o primeiro valor true por não ser uma string vazia
|| => Só precisa que um valor seja true para retornar o valor true

const corUsuario = null;
const corPadrao = corUsuario || 'black';
console.log(corPadrao); => Retorna 'black' pois é o valor verdadeiro

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'black';
console.log(corPadrao); => Retorna 'vermelho' pois é o primeiro valor verdadeiro
*/

const a = 0;
const b = null;
const c = 'false'; // Se não tivesse entre aspas seria exibido NaN que é o ultimo valor falso / ou o último valor real falso retornado
const d = false;
const e = NaN;

console.log(a || b || c || d || e) // Vai ser exibido 'false' pois é um valor verdadeiro por não ser uma string vazia e nem um false literal pois está entre aspas, logo é uma string.