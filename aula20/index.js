// OBJETOS EM JS (BASICO)

// Objetos são criados a partir de {}

// const nome01 = 'Paulo';
// const sobrenome01 = 'Visoná';
// const idade01 = 27;

// const nome02 = 'Vaulo';
// const sobrenome02 = 'Pisoná';
// const idade02 = 26;

// OBJETO LITERAL
/*
const pessoa01 = {
    nome: 'Paulo',
    sobrenome: 'Visoná',
    idade: 27
};

const pessoa02 = {
    nome: 'Mylla',
    sobrenome: 'Machado',
    idade: 24
};

console.log(pessoa01.nome)
console.log(pessoa01.sobrenome)
console.log(pessoa01.idade)
*/
/*
// Mesma coisa de cima só que usando uma função que cria pessoas e diminui o tamanho do código
//                         PARÂMETRO
function criaPessoa (nome, sobrenome, idade) { // Essa é uma função factory (Cria objetos)
    return { nome, sobrenome, idade };
}
//                                 ARGUMENTO = O valor que vai ser passado para o parâmetro
const pessoa01 = criaPessoa('Paulo', 'Visoná', 27);
const pessoa02 = criaPessoa('Mylla', 'Machado', 24);
const pessoa03 = criaPessoa('Vaulo', 'Rachado', 51);
console.log(pessoa01.nome, pessoa02.nome, pessoa03.nome)
*/
// CRIANDO UM OBJETO COM UMA FUNÇÃO DENTRO
const pessoa01 = {
    nome: 'Paulo',
    sobrenome: 'Visoná',
    idade: 27,
// Nesse contexto 'this' faz referência a este objeto
    fala() {
        console.log(`A minha idade atual é ${this.idade} anos.`)
    },

    incrementaIdade() {
        ++this.idade;
    }
};

pessoa01.fala();
pessoa01.incrementaIdade();
pessoa01.fala();
pessoa01.incrementaIdade();
pessoa01.fala();
pessoa01.incrementaIdade();
pessoa01.fala();