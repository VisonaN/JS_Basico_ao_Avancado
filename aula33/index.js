/*                                ESTRUTURAS DE REPETIÇÃO - FOR IN -                        */
// O array abaixo também é conhecido como vetor por ser um array de uma dimensão (não ter outro array dentro dele)
// const frutas = ['Pera', 'Maca', 'Uva'];


// USANDO FOR IN => Lê os índices(array ou vetor) ou chaves(objeto) do objeto
// for (let indice in frutas) {
//     console.log(frutas[indice]); // Não está contando os elementos como no for clássico e sim lendo os índices do array
// }

// ESTRUTURA FOR CLÁSSICA
// for (let i (não precisa chamar de i, pode ter o nome que quiser desde que ajude a identificar no código) = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// USANDO COM OBJETO

const pessoa = {
    nome: 'Paulo',
    sobrenome: 'Visoná',
    idade: 26
};
// console.log(pessoa.nome);
// console.log(pessoa['nome']); // Acessando como se acessa no array
// const chave = 'nome';
// console.log(pessoa[chave]); // Exemplo se tivesse acessando de forma dinâmica em um sistema através de uma variável
// let chaves porque é pra mostrar que estou mexendo em um objeto
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`); // Fiz assim pra aparecer um texto melhor no console => na aula estava ( - console.log(chave, pessoa[chave]) - )
};