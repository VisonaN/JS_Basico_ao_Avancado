//                                          RETORNO DA FUNÇÃO

// return => Retorna um valor / Termina e função

// function soma(a, b) {
//     return a + b;
// }

// function soma2(a, b) {
//     console.log(a + b); // Console.log() não faz nada além de exibir algo no console
// }

// soma2(5, 2);

// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red';
// }) // Uma função que não retorna nada mas faz algo (aqui muda a cor do background no navegador)

// function criaPessoa(nome, sobrenome) {
//     return { nome, sobrenome }; // Nome e sobrenome são as chaves do objeto, que seria nome: nome, sobrenome: sobrenome => Mas como a variavel tem o mesmo nome do parâmetro, pode deixar como acima que o JS já vai identidicar que são as chaves do objeto
// }

// const p1 = criaPessoa('Paulo', 'Visoná');
// const p2 = {
//     nome: 'Vaulo',
//     sobrenome: 'Pisoná'
// } // Essa segunda variavel faz a mesma coisa que a primeira, a diferença é que na primeira tem uma função para criar esse nome: 'Nome', sobrenome: 'Sobrenome' e não ficar criando vários objetos literais

// console.log(typeof p1);
// console.log(typeof p2);

// Criando uma função que faz uma frase

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto; // Esse retorno é dessa função com parâmetro resto
//     }
//     return falaResto; // Esse retorno é da função falaFrase, que retorna a função falaResto sem executar ela, o que significa que está retornando a função em si
// };

// const fala = falaFrase('Olá'); // Const fala recebe a função falaFrase() que dentro dela tem a função falaResto() que recebe o resto
// const resto = fala('Mundo!'); // E o resto tá na const resto com a função fala()
// console.log(resto);

// Um exemplo útil disso acima

// function duplica(n) {
//     return n * 2;
// }

// function triplica(n) {  IMAGINA SE TIVESSE 10 DISSO, FICARIA GRANDE, ENTÃO FAZER COMO ABAIXO
//     return n * 3;
// }

// function quadriplica(n) {
//     return n * 4;
// }

function criaMultiplicador(multiplicador) {
    // multiplicador
    return function(n) {
        return n * multiplicador;
    };
}
// Isso é um exemplo de closure(fecha o escopo mesmo depois de ele ter sido usado, tendo retornado a função sem executar), quando cria as const duplica, triplica e quadriplica, passando a função criaMultiplicador() com um parâmetro dentro dos parênteses, a função 'lembra' que foi criada com o parâmetro (multiplicador) e assume o valor passado dentro dos parênteses para ser usado dentro da função interna da função criaMultiplicador() que é a função que realmente vai multiplicar o valor pelo parâmetro passado => return function(n) { return n * multiplicador; };
const duplica = criaMultiplicador(2); // Multiplica por (2)
const triplica = criaMultiplicador(3); // Multiplica por (3)
const quadriplica = criaMultiplicador(4); // Multiplica por (4)

console.log(duplica(4)); // Retorna 8
console.log(triplica(4)); // Retorna 12
console.log(quadriplica(4)); // Retorna 16