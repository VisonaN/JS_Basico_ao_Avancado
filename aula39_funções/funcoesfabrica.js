// FUNÇÕES FÁBRICA (FACTORY FUNCTIONS) - Funções que retornam objetos
/*
function criaPessoa(nome, sobrenome) {
    return { // Quando uma função está dentro de um objeto é chamada de método
        nome, 
        sobrenome,
        fala: function(assunto) { // Nos métodos dentro do objeto também pode receber parâmetros
            return `${nome}, de ${this.peso}Kg está ${assunto}.` // ${nome} está acessando o parâmetro nome da função criaPessoa e não a chave nome dentro da função dentro de 'fala:function(assunto){}' e ${this.peso} está usando 'this.' para acessar a chave peso do lado de fora da função
        },
        peso: 58
    };
}
const p1 = criaPessoa('Paulo', 'Visoná');
console.log(p1.fala('Falando sobre JavaScript'));
// this. sempre vai se referir a pessoa que chamou o que está executando, que nesse caso é o método fala: e a pessoa é p1 que foi atribuido a função criaPessoa que tem a chave nome
console.log(p1.nome)
*/
// A mesma função mas sem o negócio do peso pra não confundir

// function criaPessoa(nome, sobrenome, a, p) {
//     return {
//         nome, 
//         sobrenome,
//         fala: function(assunto) {
//             return `${this.nome} está ${assunto}.`
//         },
//         altura: a,
//         peso: p,
//         imc() {
//             const indice = this.peso / (this.altura ** 2);
//             return indice.toFixed(2);
//         }
//     };
// }
// const p1 = criaPessoa('Paulo', 'Visoná', 1.65, 58);
// const p2 = criaPessoa('Mylla', 'Machado', 1.63, 40);
// console.log(p1.fala('Falando sobre JavaScript'));
// console.log(p2.fala('Falando sobre JavaScript'));
// console.log(p1.imc());
// console.log(p2.imc());

// fazendo o imc fungir ser um atributo do objeto e não uma função usando um Getter
/*
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`
        },
        altura: a,
        peso: p,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('Paulo', 'Visoná', 1.65, 58);
const p2 = criaPessoa('Mylla', 'Machado', 1.63, 40);
console.log(p1.fala('Falando sobre JavaScript'));
console.log(p2.fala('Falando sobre JavaScript'));
console.log(p1.imc);
console.log(p2.imc);
*/
// Utilizando um setter

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift(); // Shift faz duas coisas => Vai retornar Paulo (nesse caso) para a variável nome e vai remover Paulo do array
            this.sobrenome = valor.join(' ') // .join pega o resto da array e junta em uma string e (' ') significa que está sendo separado por espaço pq é o que significa colocar aspas simples e um espaço entre elas
        },

        fala: function(assunto = 'Falando sobre nada.') { // um método normal que só faz a pessoa falar
            return `${this.nome} está ${assunto}.`
        },
        altura: a,
        peso: p,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('Paulo', 'Visoná', 1.65, 58);
// console.log(p1.nome + ' ' + p1.sobrenome) usando concatenação para exibir nome completo, mas tem como fazer um método para mostrar o nome completo usando um setter
p1.nomeCompleto = 'Vaulo Visoná Neto'
console.log(p1.nomeCompleto)
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala()) // Exibindo o método que faz a pessoa falar