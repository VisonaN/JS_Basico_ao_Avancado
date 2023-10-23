// FUNÇÕES  EM JS (BÁSICO)
// Nomenclatura de funções segue a mesma regra de variáveis, não pode começar com números, ter espaço, palavras reservadas. etc..


// Tudo que está dentro da função não pode ser acessado fora da função
// Os parámetros da função são colocados dentro dos parenteses ()
// Por padrão as funções não retornam valores
// Para retornar algum valor usar return
/* nÃO É IDEAL QUE A FUNÇÃO RETORNE UM VALOR DIFERENTE DO ESPERADO COMO NESSE CASO, O CORRETO É FAZER COMO ABAIXO:
function saudacao(nome) {
    console.log(`Bom dia ${nome}!`)
    return 123456; // Esse valor vai ser salvo dentro da variável
}
*/

/*
function saudacao(nome) {
    return `Bom dia ${nome}!`; // Agora a saudação é o valor que vai ser retornado e salvo na variável
}
// saudacao('Paulo'); // Sempre que chamar uma função tem que colocar os () depois para indicar que essa função está sendo executada
// O valor para o parâmetro dentro da função é dado no momento em que você chama a função (chama argumento, valor)
// Essa função é reutilizável, ou seja, pode ser utilizada em qualquer lugar do código e pode passar qualquer valor para o parâmetro.
// saudacao('Visoná');
// saudacao('Neto');
const variavel = saudacao('Paulo'); // Salvando o que a função retorna dentro de uma variável
console.log(variavel);
*/

/*
function soma(x = 1, y = 1) { // Colocar valor padrão para que quando não colocar os parâmetros não retorne um NaN
    const resultado = x + y;
    return resultado; // Quando o interpretador do JS chegar na palavra return, mais nada vai ser executado depois dela e a função é finalizada independente do que tiver abaixo
}

// console.log(resultado); // Não pode ser acessado pois está protegido dentro do escopo da função
// const resultado = soma(2, 2); // Nesse caso não estou acessando a const resultado dentro da função e sim declarando uma outra const resultado que tem como valor a função e por isso não vai dar erro e mostrar a soma correta sem dar erro
// const resultado = soma('Paulo', ' Visoná') // Não precisa ser só números
// const resultado = soma(); // Nesse caso, se colocar a função sem os dados ou só com um dos dados para fazer a conta, vai retornar um NaN
const resultado = soma(2); // Após colocar os valores padrões na função, pode colocar só um valor aqui que ainda vai fazer a conta considerando um valor só e nesse caso somando com 1 colocado acima 
console.log(resultado);
*/

// CRIANDO UMA FUNÇÃO ANONIMA

/*
const raiz = function (n) { // Nesse tipo de caso tem que usar ; no final pois está usando o sinal de atribuição na variável
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
*/

//  ARROW FUNCTIONS = MANEIRA MAIS MODERNA DE CRIAR FUNÇÕES
/*
const raiz = (n) => {
    return n ** 0.5;
};
*/
// QUANDO TEM SÓ UMA LINHA DENTRO DA FUNÇÃO E SÓ UM PARÂMETRO DENTRO DOS PARÊNTESES:
// Saem as chaves, o return e os parênteses

const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// É MELHOR CRIAR UMA FUNÇÃO PRA CADA COISA QUE VOCÊ QUEIRA FAZER DO QUE CRIAR UMA FUNÇÃO COM MAIS DE UMA TEREFA PARA FAZER