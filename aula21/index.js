// VALORES PRIMITIVOS E VALORES POR REFERÊNCIA

/*
 * Primitivos (valores imutáveis) - string, number, boolean, undefined, null (bigint, symbol)
 * SÃO COPIADOS QUANDO PASSADOS PARA UMA SEGUNDA VARIÁVEL UTILIZANDO O SINAL DE ATRIBUIÇÃO '='
*/
//             01234 - Índice da string
// let nome = 'Paulo';
// nome[0] = 'V' => Não funciona pois uma string é imutável
// console.log(nome[0]); // Chamada para exibir um determinado índice funciona tanto para string quanto para array (Na string é uma letra, na array é um objeto que tenha o índice 0)

// Cópia do valor de uma variável para outra quando o valor é primitivo
/*
let a = 'A';
let b = a; // Copiando o valor da a para b
console.log(a, b);

a = 'Outra coisa' // Alterando o valor de a não afeta o valor da b pois já foi feita a cópia do valor antigo de a anteriormente
console.log(a, b);
*/

/*
 * Referência (valores mutáveis) - array, object, function
 * SÃO PASSADOS POR REFERÊNCIA QUANDO PASSADOS PARA UMA SEGUNDA VARIÁVEL UTILIZANDO O SINAL DE ATRIBUIÇÃO '='
*/

/*
let a = [1, 2, 3];
let b = a; // Nesse caso não está acontecendo uma cópia e sim b vai passar a ocupar o mesmo lugar que a na memória => [1, 2, 3] (REFERENCIA O MESMO VALOR DE a NA MEMÓRIA DO COMPUTADOR)
let c = b; // Mais uma variável apontando o mesmo valor na memória
console.log(a, b);
// SE QUISER REALMENTE COPIAR O VALOR DE a PARA b SE USA: let b = [...a] => FAZENDO UM SPREAD DO ARRAY a DENTRO DE b / Tornando o valor de b totalmente independente.
a.push(4); // Como nessa caso é um valor por referência, não está alterando somente o valor de a mas de b também
console.log(a, b);

b.pop(); // pop remove o último valor da array
console.log(a, b);
a.push('Paulo');
console.log(c);
*/

/* --------------------------------------EXEMPLO------------------------------------------- */

const a = {
    nome: 'Paulo',
    sobrenome: 'Visoná'
};
const b = {...a}; // Para não alterar o valor de b

a.nome = 'Vaulo';
console.log(a);
console.log(b);