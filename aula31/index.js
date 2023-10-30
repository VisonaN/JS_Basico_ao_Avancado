//                            ATRIBUIÇÃO VIA DESESTRUTURAÇÃO EM OBJETOS

/*
const pessoa = {
    nome: 'Paulo',
    sobrenome: 'Visoná',
    idade: '26',
    endereço: {
        rua: 'Floriano Peixoto',
        numero: 440
    }
}
// Atribuição via desestruturação
// const { nome } = pessoa; // Aqui está querendo dizer 'extrai do objeto pessoa o dado nome' já criando uma variável nome
const {nome, sobrenome, idade} = pessoa; // Posso pegar quantas chaves quiser dentro do obj
console.log(nome, sobrenome, idade);
*/

/*
const pessoa = {
    // nome: 'Paulo', Caso não tenha a chave de nome / Mesmo colocando um valor padrão, se tiver a chave de nome dentro do objeto o valor dela prevalece
    sobrenome: 'Visoná',
    idade: '26',
    endereço: {
        rua: 'Floriano Peixoto',
        numero: 440
    }
}    // Podemos colocar um valor padrão pra nome para não dar undefined / também funciona no array
//const {nome = 'Não existe', sobrenome, idade} = pessoa;
//                          Alterando o nome da const sobrenome para surname/sobrenome: só quer dizer o valor da chave sobrenome dentro do objeto
const {nome = 'Não existe', sobrenome: surname, idade} = pessoa;
console.log(nome, surname, idade);
*/

/*
const pessoa = {
    nome: 'Paulo',
    sobrenome: 'Visoná',
    idade: '26',
    endereco: {
        rua: 'Floriano Peixoto',
        numero: 440
    }
} //    Agora pegando os valores especificos dentro de endereço
const { endereco: { rua, numero } } = pessoa;
console.log(rua, numero) // Nesse caso vai aparecer o objeto endereço e não só os dados
*/

/*
const pessoa = {
    nome: 'Paulo',
    sobrenome: 'Visoná',
    idade: '26',
    endereço: {
        rua: 'Floriano Peixoto',
        numero: 440
    }
}

const {     // Atribuindo rua à variável r
    endereço: {rua: r, numero },
    endereço
} = pessoa;
console.log(r, numero, endereço);
*/

const pessoa = {
    nome: 'Paulo',
    sobrenome: 'Visoná',
    idade: '26',
    endereço: {
        rua: 'Floriano Peixoto',
        numero: 440
    }
};
//                     Utilizando o operador de rest para pegar o restante dos dados do objeto
const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, sobrenome, resto);