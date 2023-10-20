// ARRAYS EM JS (São considerados Objetos e automaticamente indexados)
// Você pode colocar qualquer tipo de dados dentro de uma Array, mas para uma boa prática de programação tem que deixar organizado os tipos de dados dentro de uma Array, se tem textos => Coloque textos, se tem Objetos => Coloque objetos, números e por ai vai
//            1234567891011121314151617
// const nome = 'Paulo Visoná Neto'
// console.log(nome[0]); // Puxando a letra de indice 0 da string
// Arrays são indexados pelo índice dos objetos dentro deles             0         1        2
const alunos = ['Paulo', 'Visoná', 'Neto'];
console.log(alunos instanceof Array); // Verificando se estou mesmo mexendo com um Array
// console.log(alunos); // Exibindo a Array completa
// console.log(alunos[0]); // Acessando o elemento de índice 0 de dentro da Array
// console.log(alunos[2]); // Exibindo alguns itens da Array pelo índice deles
// alunos [0] = 'Vaulo'; // Editando um objeto dentro da Array pelo índice
// alunos [3] = 'Pisoná'; // Adicionando um objeto dentro da Array pelo índice
// console.log(alunos.length); // Para saber o tamanho da Array
// alunos[alunos.length] = 'Pisoná'; // Adiciona no fim da Array
// alunos[alunos.length] = 'Vaulo'; // Adiciona no fim da Array
// alunos[alunos.length] = 'Teto'; // Adiciona no fim da Array
// alunos.push('eueueueu'); // Pedindo para adicionar um elemento dentro da Array no final dela 
// alunos.unshift('Pisoná'); // Adiciona um elemento no início da Array (índice 0)
// const removido = alunos.pop(); // Salvar o valor removido da Array
// alunos.pop(); // Remove um elemento do final da Array
// const removido = alunos.shift(); // Remove um elemento do início da Array
// console.log(removido);
// delete alunos[1]; // Remove um item da Array sem mexer no índice
// console.log(alunos[10]); // Pode acessar um elemento na array que não existe e vai retornar 'undefined' pois não está alocado na memória
// alunos.push('Pisoná');
// alunos.push('Vaulo');
// console.log(alunos.slice(0, 3)); // Pedindo para acessar de um determinado elemento da Array até o outro (se quer ver até o índice 2 tem que colocar pra ver até o índice 3 pois se não o 2 não aparece pq não é incluido na amostragem)
// console.log(alunos.slice(0, -1)); // Pedindo para acessar os elementos da Array menos 1