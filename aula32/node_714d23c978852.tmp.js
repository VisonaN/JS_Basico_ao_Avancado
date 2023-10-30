//                            ESTRUTURAS DE REPETIÇÃO => FOR - CLÁSSICO

/*
console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');
/*

/* Estrutura do for - É preciso ter três coisas dentro dos parênteses do for - 
-> Criar uma variável de controle (costuma ser usado -> i = index)
-> Criar uma condição para parar a repetição (laço)
-> Incrementar ou decrementar a variável de controle
-> Para dividir as expressões dentro do parênteses tem que usar ';' e não colocar no final
*/
// Essa expressão verifica o valor de i e vai adicionando +1 até satisfazer a condição de chegar até o valor de 5, adicionando +1 valendo 6 e entrando na condição de não ser menor ou igual a 5 e assim parar no 5.

// for (let i = 0; i <= 5; i++) {
//     console.log(`Linha ${i}`);
// }

// É a mesma coisa dos 6 console.log('Linha') acima, mas no for você controla a quantidade de repetições na condição 'i <=' 
// Não precisa necessáriamente inicializar 'let i =' em 0

// for (let i = -100; i <= 500; i += 10) { // Incrementando i de 10 em 10 e começando de um negativo
//     console.log(`Linha ${i}`);
// }

for (let i = 500; i >= 10; i += 10) {
    console.log(`Linha ${i}`);
}