// Quando estão dentro de um objeto são chamados de métodos e quando estão fora de funções.
/*
window.alert('Com a nossa mensagem.'); // atalho para window.alert() Fazendo aquela janela de alerta no navegador
window.confirm('Deseja realmente apagar?') // Usada pra comfirmar coisas com o usuário, tipo se quer apagar algo, algum post...
// A função confirm retorna um valor booleano False ou True. => Esse valor pode ser capturado dentro de uma variável ou const para seguir ou parar o fluxo do programa.
window.prompt('Digite o seu nome:') // Usado para pedir que o usuário digite algo
Tudo que é retornado pela função prompt é uma string, então se vai usar as respostas digitadas nessa função para fazer contas, tem que converter o que for retornado pela função para número
*/

let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número:');
num1 = Number(num1);
num2 = Number(num2);
const res = num1 + num2;
alert(`O resultado da operação foi: ${res}`); // Dentro de ->${}<- pode colocar a expressão sem precisar fazer a variável ou constante de resultado caso não vá usar em mais nenhum lugar no código.
