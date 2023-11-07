//                                               CLOSURES
// É a habilidade da função de acessar o seu escopo léxico
// function retornaFuncao() {
//     const nome = 'Luiz';
//     return function() {
//         return nome;
//     }
// }

// const funcao = retornaFuncao();
// console.dir(funcao);

function retornaFuncao(nome) {
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao('Paulo');
const funcao2 = retornaFuncao('Visoná');
console.dir(funcao);
console.dir(funcao2);
console.log(funcao());
console.log(funcao2());