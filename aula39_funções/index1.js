/* PARÂMETROS DA FUNÇÃO 
Toda vez que cria uma função com a palavra function ou uma function expression, fica disponível dentro da função, uma variável chamada 'arguments' que ficam todos os argumentos passados ao chamar a função dentro de um objeto / E por ser um objeto, você pode pegar os índices do arguments, como no exemplo:

function funcao() {
    console.log(arguments[0])
};

funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

Apareceria 'Valor' no console.log(arguments[0]);

*/

// Criando uma função para somar todos os valores recebidos nos argumentos da função mesmo sem ter passado nenhum parâmetro pra função
/*
function funcao() {
    let total = 0; // Criando uma variável para sustentar o total de valores
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total)
};
funcao(1, 2, 3, 4, 5, 6, 7);
*/
/*
function funcao(a, b, c) { // Mesmo passando apenas três parâmetros na função, a soma total não vai mudar pois todos os argumentos ainda vão estar na variável arguments
    let total = 0; // Criando uma variável para sustentar o total de valores
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c) // Agora no console.log() vai aparecer a soma e os argumentos correspondentes aos trÊs primeiros parâmetros declarados em funcao(a, b, c)
};
funcao(1, 2, 3, 4, 5, 6, 7);
*/
// Nesse caso, mesmo passando três parâmetros a mais que os argumentos, não vai dar erro, o JS vai só declarar essas variáveis com o valor de undefined, independente da ordem de qual dos dois a mais var ter, que nesse caso seria 'd' 'e' e 'f'
/*
function funcao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
};
funcao(1, 2, 3);
*/
/* Função de somar a + b 
function funcao(a, b = 2) { // Pode colocar um valor padrão nos parâmetros / Essa forma de cima é a mais moderna de se fazer
  //  b = b || 0;  Forma antiga de colocar um valor padrão
    console.log(a + b)
};
funcao(2);
*/
/*
function funcao(a, b = 2, c = 4) {
    console.log(a + b + c);
};
funcao(2, undefined, 20); // Aqui eu estou fazendo com que o valor de b seja pulado na declaração para ele assumir o valor padrão de 2, essa é a única forma, usando undefined. Mas essa forma de fazer isso não tem uma lógica muito boa, funciona mas não é o ideal
*/
// O ideal seria fazer com atribuição via desestruturação nos parâmetros
/*
function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
};
let obj = { nome: 'Paulo', sobrenome: 'Visoná', idade: 27 }
funcao(obj);
*/
/*
// Pode ser feito com array também

function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
};
// let obj = ['Paulo', 'Visoná', 27 ] Pode ser feito assim, declarando uma array dentro de let e lançando a variavel na função funcao(obj); Ou jogando os literais na declaração da função
funcao(['Paulo', 'Visoná', 27 ]);
*/
//             + - * %   manda um valor inicial no acumulador
// function conta(operador, acumulador, numeros) {
//     console.log(operador, acumulador, numeros);
// };
// conta('+', 0, [20, 30, 40, 50]);
// NÃO PRECISA FAZER COMO ACIMA, PODE FAZER ASSIM SEM A ARRAY E USANDO O REST OPERATOR NO PARÂMETRO NUMEROS (O resto operator sempre tem que ser no último parâmetro usado, porque ele é o resto)
function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);

/* Ou usando function expression: 

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}; // E o ; passa a ser obrigatório
conta('+', 1, 20, 30, 40, 50);

// NÃO TEM ARGUMENTS EM ARROW FUNCTION

const conta = (operador, acumulador, ...numeros) => {
    console.log(arguments);
};
conta('+', 1, 20, 30, 40, 50);
*/

/*
PODE USAR O REST OPERATOR PARA PEGAR OS ARGUMENTOS DA FUNÇÃO (FUNCIONA EM QUALQUER TIPO DE FUNÇÃO)

const conta = (...args) => {
    consolo.log(args);
};
conta('+', 1, 20, 30, 40, 50);
*/