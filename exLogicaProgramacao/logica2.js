/*
Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem.
*/
// MINHA SOLUÇÃO
// const largura = 720;
// const altura = 190;

// function ePaisagem(largura, altura) {
//     if (largura > altura) {
//         return true;
//     }
// }

// console.log(ePaisagem(largura,altura));

// SOLUÇÃO DO CURSO

function ePaisagem(largura, altura) {
    return largura > altura ? true : false;
}

console.log(ePaisagem(1920, 1080)); // Modo paisagem (widescreen)
console.log(ePaisagem(1080, 1920)); // Modo retrato (portrait)

// Como estamos checando que algo que já vai retornar true ou false por estar usando numbers, a condição não precisa ter true e false no código
console.log('Separando um console.log() do outro e tirando o true e false do código da função')
function ePaisagem1(largura, altura) {
    return largura > altura;
}

console.log(ePaisagem1(1920, 1080)); // Modo paisagem (widescreen)
console.log(ePaisagem1(1080, 1920)); // Modo retrato (portrait)

// Convertendo para arrow function porque vai usar muito isso
console.log('Separando um console.log() do outro e usando arrow function')

const ePaisagem2 = (largura, altura) => largura > altura;

console.log(ePaisagem2(1920, 1080)); // Modo paisagem (widescreen)
console.log(ePaisagem2(1080, 1920)); // Modo retrato (portrait)

console.log('Tentando retornar verdadeiro ou falso mas dizendo se é wide ou portrait')
const ePaisagem3 = (largura, altura) => largura > altura ? 'WideScreen' : 'Portrait'; // Aqui eu consegui usar uma condição ternária para dizer que se a largura for maior que a altura vai aparecer no console.log() WideScreen / E se a altura for maior que a largura vai aparecer no console.log() Portrait

console.log(ePaisagem3(1920, 1080)); // Modo paisagem (widescreen)
console.log(ePaisagem3(1080, 1920)); // Modo retrato (portrait)