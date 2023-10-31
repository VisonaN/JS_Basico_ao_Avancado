//  BREAK E CONTINUE DENTRO DOS LAÇOS DE REPETIÇÃO (For - For in - For of - While - Do While )

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for ( let numero of numeros) {
    
//     if (numero === 2) { // Esse if faz com que na repetição cheque quando o numero foi igual a 2 e a continue vai fazer com que a repetição pule o dois e continue o laço checando até o 9
//         continue; // Sempre colocar a palavra continue antes de ação a ser executada, nesse caso é só um console.log(numero);
//     }
//     console.log(numero);

// }

console.log('############ USANDO FOR OF ###########');

// for (let numero of numeros) {
//     if (numero === 2) { // Ou if (numero === 2 || numero === 5) { continue; }
//         continue;
//     }

//     if (numero ===  5) {
//         continue;
//     }

//     console.log(numero)
// }


for (let numero of numeros) {
    if (numero === 2) { 
        console.log('Pulei o número 2'); // Mostrando onde o dois é pulado
        continue;
    }

    console.log(numero);

    if (numero === 7) { // Usando o break para encontrar o número 7 dentro da array, quebrando o laço de repetição pois já achou o número 7 (é um recurso bom para achar algo dentro de vários itens) 
        console.log('Achei o 7 coroi,fui...')
        break;
    }
}

// CONTINUE PULA PRA PRÓXIMA INTERAÇÃO E CONTINUA O LAÇO / BREAK PARA NA ITERAÇÃO E PARA O LAÇO, ENTÃO QUALQUER COISA ABAIXO DE BREAK NÃO VAI SER EXECUTADA

// USANDO COM FOR IN
console.log('############ USANDO FOR IN ###########');

const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i in numeros1) {
    let numero1 = numeros1[i];
    if (numero1 === 2) { 
        console.log('Pulei o número 2');
        continue;
    }

    console.log(numero1);

    if (numero1 === 7) { 
        console.log('Achei o 7 coroi,fui...')
        break;
    }
}

console.log('############ USANDO FOR CLÁSSICO ###########');

// USANDO O FOR CLÁSSICO

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numeros2.length; i++) {
    let numero2 = numeros2[i];
    if (numero2 === 2) { 
        console.log('Pulei o número 2');
        continue;
    }

    console.log(numero2);

    if (numero2 === 7) { 
        console.log('Achei o 7 coroi,fui...')
        break;
    }
}

// USANDO WHILE E DO WHILE

console.log('############ USANDO WHILE ############');

const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0
while (i < numeros3.length) {
    let numero3 = numeros3[i];
    
    if (numero3 === 2) { 
        console.log('Pulei o número 2');
        i++; // Tem que atualizar a variavel de controle antes da palavra continue para que não caia em um laço infinito (Porque vai encontar a palavra continue e a variável não vai continuar sendo atualizada)
        continue;
    }

    console.log(numero3);

    if (numero3 === 7) { 
        console.log('Achei o 7 coroi,fui...')
        i++; // Tem que atualizar a variavel de controle antes da palavra continue para que não caia em um laço infinito (Porque vai encontar a palavra continue e a variável não vai continuar sendo atualizada)
        break;
    }
    
    i++; // Geralmente atualiza a variável de controle no final do laço
}

console.log('############ USANDO DO WHILE ############');

const numeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i1 = 0
do {
    let numero4 = numeros4[i1];
    
    if (numero4 === 2) { 
        console.log('Pulei o número 2');
        i1++; // Tem que atualizar a variavel de controle antes da palavra continue para que não caia em um laço infinito (Porque vai encontar a palavra continue e a variável não vai continuar sendo atualizada)
        continue;
    }

    console.log(numero4);

    if (numero4 === 7) { 
        console.log('Achei o 7 coroi,fui...')
        i1++; // Tem que atualizar a variavel de controle antes da palavra continue para que não caia em um laço infinito (Porque vai encontar a palavra continue e a variável não vai continuar sendo atualizada)
        break;
    }
    
    i1++; // Geralmente atualiza a variável de controle no final do laço
} while (i1 < numeros4.length)

// MAIS UMA VEZ: CONTINUE => Continua para a próxima iteração
// MAIS UMA VEZ: BREAK => Sai do laço