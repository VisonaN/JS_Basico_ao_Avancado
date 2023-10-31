/*                            ESTRUTURAS DE REPETIÇÃO WHILE e DO WHILE                      */

// Quando se utiliza os 'for' geralmente sabemos o tamanho da string, array, NodeList e objeto
// Quando utiliza While ou Do While geralmente não sabemos quantas repetições vão ter que acontecer até que o laço termine

// let i = 0; // Diferente do for, a variável de controle é criada fora
// Vai repetir até satisfazer a condição, do 0 a 10, vai chegar em 11 e parar no 10 já que 11 não é menor ou igual a 10
// while (i <=10) { 
//     console.log(i);
//     i++; // Não pode esquecer de atualizar a variável de controle se não o laço (repetição) vai ser infinito
// }

// console.log('Segue a vida');
// console.log('############');

// let n = 0; // Não é recomendável usar o while assim, já que tem o for pra isso
// const nome = 'Paulo'
// while (n < nome.length) {
//     console.log(nome[n]);
//     n++;
// }

//console.log('############');
// Usando o While para fazer a função de números aleatórios parar quando o resultado for 10
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = (10);//random(min, max);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

// A única diferença entre WHILE e DO WHILE é que WHILE checa a primeiro a condição e depois executa o código / Enquanto o DO WHILE checa o código primeiro e depois executa a condição / Se tirar o rand = random(min, max); do WHILE e do DO WHILE e só deixar o console.log(rand) e o (rand !==10); O WHILE não vai executar pois a condição vai ser falsa e o DO WHILE vai executar sempre uma vez pois ele primeiro executa o código e depois checa a condição
console.log('############');

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);