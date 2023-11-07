//                                          FUNÇÕES DE CALLBACK
// São funções executadas quando uma ação ocorre/finaliza
// O setTimeout() dentro das funções está servindo para simular uma situação de algo que não dependa de você para acontecer, algo que possa demorar a ser executado tipo acessar um banco de dados, servidores
// E o rand serve para gerar um número aleatório (nesse caso entre 1 segundo e 3 segundos) simulando coisas que acontecem em tempos diferentes
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function() { // Já é uma função de callback, Pois é uma função anônima que executa console.log('f1') dentro de setTimeout
    console.log('f1');
    if (callback) callback();
    }, rand())
}
function f2(callback) {
    setTimeout(function() {
    console.log('f2');
    if (callback) callback();
    }, rand())
}
function f3(callback) {
    setTimeout(function() {
    console.log('f3');
    if (callback) callback();
    }, rand())
}

// f1(function() { // é uma função de callback
//     f2(function() {
//         f3(function() {
//         console.log('Olá Mundo!');
//         });
//     });
// });

// Código idêntico ao de cima, a diferença é não ficar criando funções anônimas já dentro do parâmetro e evitando muita identação no código

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
};

function f2Callback() {
    f3(f3Callback);
};

function f3Callback() {
    console.log('Olá Mundo!')
};
// Ou seja, callback são coisas que você chama quando uma coisa termina de acontecer