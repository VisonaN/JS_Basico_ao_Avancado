/*                                        FUNÇÕES EM JAVA SCRIPT                                 */

// Declaração de função assim abaixo acontece a function hoisting => A engine do js vai elevar as declarações de funçoes e variáveis declaradas com var pro topo do código

function falaOi() {
    console.log('Oi!');
}
falaOi(); // Pode declarar a função como acima e depois chamá-la assim no final

//-----------------------------------------------------------------------------------------------//

falaOi();

// Quanto pode chamar a função no início e só declarar ela depois por conta do hoisting

function falaOi() {
    console.log('Oi!');
}

// As funções são first class objects (Objetos de primeira classe) => Significa que a função pode ser tratada em js e em outras linguagens de programação (como python) como dado

//Outra declaração de função mas com Function expression / e jogando uma função anonima direto
const souUmDado = function() { // => Aqui estou jogando uma função como resultado de uma constante
    console.log('Sou um dado.');
};

// souUmDado(); // Nesse caso a constante pode ser executada como se fosse uma função / A variável const recebeu uma função, logo ela passou a ser uma função
// Falando que uma constante recebe uma função como dado

function executaFuncao(funcao) { // Recebendo uma função como parâmetro da função executaFuncao()
    console.log('Vou executar a função abaixo.')
    funcao(); // Executando a função do parâmetro dentro da função
};
executaFuncao(souUmDado);

// Agora a função executaFuncao() está executando a funcao souUmDado();

// Arrow function => É uma declaração de função (function expression) mais curta

const funcaoArrow = () => {
    console.log('Sou uma arrow function')
};
funcaoArrow();

// TODAS AS FUNÇÕES ACIMA SÃO FIRST CLASS OBJECTS (SÃO TRATADAS COMO UM DADO)
/*
setInterval(function() { // Novamente tratando a função como um dado / Passando uma função como parâmetro pra outra função, que nesse caso é a setInterval
}, 1000)
//          aFuncao não poderia ser executada dentro mas pode ser passada como dado
setInterval(aFuncao, 1000); // Aqui digamos que a função foi declarada externamente e está sendo chamada dentro dessa função como parâmetro */

// Dentro de um objeto pode ter uma função

const obj = {
    falar: function() { // Maneira clássica de jogar uma função como um método dentro de um objeto
        console.log('Estou falando...');
    }
};
obj.falar(); // Aqui está sendo usada notação de ponto para executar a função que está dentro do objeto

// Nas versões mais novas do JS pode criar um método dentro do objeto sem a palavra function e sem os dois pontos e a função falar já vai ser um método dentro do objeto sem dar erro
/* Exemplo de como ficaria
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar();
*/