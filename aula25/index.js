//                                     ESTRUTURAS CONDICIONAIS
/*

* IF => Pode ser usado sozinho
* ELSE IF => Não pode ser executado sozinho, tem que ter um if antes (Pode ser criado quantas vezes forem necessárias na checagem)
* ELSE => Sempre que utilizar else, tem que ter um if antes (Só pode ter um else na checagem) Só vai ser utilizado se nenhuma das condições da checagem for verdadeira.
* Podemos utilizar condições sem else if, utilizando apenas if e else

*/

/*
Entre 0 e 11 => Bom dia
Entre 12 e 17 => Boa tarde
Entre 18 e 23 => Boa noite

const hora = 123;

if (hora >= 0 && hora <= 11.59) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17.59) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23.59) {
    console.log('Boa noite!');
} else {
    console.log('Tenha um bom dia!');
}

const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa!');
} else {
    console.log('Não vou sair de casa!')
}
*/

/*                                         IF E ELSE
const numero = 10;

if (numero >= 0 && numero <= 5) { // Vai avaliar a condição e ir para o else caso não seja suprida a condição
    console.log('O número está entre 0 e 5.')
} else {
    console.log('O número NÃO está entre 0 e 5.')
}

IF e ELSE são dependentes um do outro (Se a condição 'if' for satisfeita aparece uma linha de código, se não 'else', vai aparecer outra linha de código)

Se (numero >= 0 && numero <= 5) ocorrer, faça isso {código dentro das chaves do if}
Se não {código dentro das chaves do else}


const numero = 5;

if (numero >= 0 && numero <= 5) { // Vai avaliar a condição e ir para o else caso não seja suprida a condição
    console.log('O número está entre 0 e 5.')
}

console.log('O número NÃO está entre 0 e 5.')

// Nesse caso mesmo que a condição seja atendida, vai aparecer 'O número está entre 0 e 5.' e 'O número NÃO está entre 0 e 5.' pois a linha de código que está fora das chaves aparece de qualquer fomra pois não está condicionada à de cima.
*/

/*                                          IF E ELSE IF 

Vai checar as condições da esquerda pra direita, de cima para baixo e vai parar na primeira verdadeira e nada mais será executado de todo o bloco if(). E cada item precisa ser falso para que o próximo seja executado e 'else' precisa que todos sejam falsos para ser executado.

const numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8.');
} else if (1 === 1) { // Exemplo de como para na primeira condição verdadeira, mesmo que essa condição não tenha nada a ver com a verificação da const numero, o código para aqui e torna todo esse if inútil (LÓGICA INCORRETA)
    console.log('LITERAL')
}else if (numero >= 9 && numero <= 11) { // A partir do momento que o JS acha a primeira condição verdadeira ele sai do bloco, mesmo que tenha mais 50 condições verdadeiras depois
    console.log('O número está entre 9 e 11.');
} else { // Depende de que nada acima seja verdadeiro para ele executar
    console.log('O número NÃO está entre 0 e 11.');
}

console.log('Aqui vem o resto do código JS...')

*/

const numero = 10;

if (numero <= 10) { // Se caso for necessário checar uma coisa antes e depois fazer um bloco if para ver mais condições
    console.log('O número é menor ou igual a 10.')
}

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8.');
} else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número NÃO está entre 0 e 11.');
}

console.log('Aqui vem o resto do código JS...')