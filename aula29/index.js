//                               MAIS DIFERENÇAS ENTRE VAR E LET

// let tem escopo de bloco {...bloco} / No exemplo abaixo, let não está sendo redeclarada e sim sendo criada uma nova let dentro do bloco do if
// var só tem escopo de função


const verdadeira = true;
/*
let nome = 'Paulo'; // não tem como redeclarar a variável criada em let
var nome2 = 'Paulo'; // Já as criadas com var, tem como redeclarar e ela será sobescrita

if (verdadeira) {
    //let nome = 'Visoná'
    //console.log(nome, nome2);

    if (verdadeira) {
        //let nome = 'Outra coisa';
        console.log(nome, nome2);
    }
};

// NO EXEMPLO ACIMA VEMOS QUE O INTERPRETADOR DO JS VAI PROCURAR A VARIÁVEL LET EM NÍVEIS, PRIMEIRO PROCUROU NO IF MENOR ONDE TÁ O CONSOLE.LOG E NESSE CASO ELA NÃO ESTAVA DISPONÍVEL NO BLOCO MENOR POIS ESTÁ COMENTADA, FOI PARA O BLOCO MENOR E NÃO ACHOU TAMBÉM PQ TBM TAVA COMENTADA E FOI PRO ESCOPO GLOBAL PROCURANDO LÁ, ONDE ELA ESTAVA DISPONÍVEL E COMO RESULTADO O CONSOLE.LOG EXIBIU 'PAULO' 'PAULO'
*/

//                                     EXEMPLO COM VAR

// const verdadeira = true;

// let nome = 'Paulo'; // não tem como redeclarar a variável criada em let
// var nome2 = 'Paulo'; // Já as criadas com var, tem como redeclarar e ela será sobescrita



// if (verdadeira) {
//     let nome = 'Visoná'
//     var nome2 = 'Neto' // redeclarando
//     if (verdadeira) {
//         let nome = 'Outra coisa';
//         var nome2 = 'Visoná'; // var nome2 foi redeclarada
//     }
// };

// console.log(nome,nome2);

//                                 EXEMPLO DE ESCOPO DE FUNÇÃO

// var sobrenome = 'Visoná'

// function falaOi () {
//     // var sobrenome = 'Visoná' Se essa variável tivesse sido definida dentro da função a função não deixaria ela ser acessada por fora.
//     console.log(sobrenome) // Pode acessar uma variável criada fora da função e exibir ela dentro da função / Quando você chama uma função ela sabe o que tá acontecendo do lado de fora dela (closure)
// };

// falaOi();

// console.log(nome);
// falaOi();

// function falaOi () {
//     var nome = 'Paulo'
// };

// console.log(nome);
// falaOi();

// Se o console.log(nome); estivesse dentro da função, seria exibido 'Paulo' na função falaOi() / Mas como foi jogado para fora da função vai dar erro dizendo que a variável nome dentro do console.log(nome) não está declarada, mesmo ela tendo sido declarada dentro da função. / Porque a função protege as funções criadas dentro dela

// function falaOi() {
//     var sobrenome = 'Visoná'; // Como 'var' não tem escopo de bloco, desde que o bloco esteja dentro da função, ela pode ser chamada para ser exibida em outro bloco {bloco} / Diferente de 'let'

//     if(verdadeira) {
//         let nome = 'Paulo'; // Como let tem escopo de bloco, não importa se ela foi criada dentro da mesma função, ela não pode ser chamada para ser exibida dentro da mesma função, só do bloco {bloco} / Gerando o erro no console.log(nome); de 'nome is not defined'
//         console.log(sobrenome);
//     }
    
//     console.log(nome);
// };
// falaOi();

//                                       HOISTING(IÇAMENTO) EM JS

// Quando se cria uma variável com var depois dela ter sido declarada antes de ser criada, no JS ela é jogada para o início do arquivo e dá 'undefined', dandao a entender que ela até foi criada mas não foi atribuido nenhum valor a ela antes de exibir, mesmo que quando ela foi declarada depois ela tenha tido um valor atribuido
// A mesma coisa não acontece com variáveis criadas com let depois de terem sido chamadas para exibir antes, com let dá o mesmo erro que se a variável nunca tivesse sido declarada

console.log(sobrenome); // Aqui dá erro dizendo que 'sobrenome' não existe


var sobrenome = 'Visoná' // E agora tendo declarado essa variável depois de pedir pra exibir ela dá 'undefined' no console.log(sobrenome) => que significa que ela foi declarada agora mas não teve valor atribuído a ela antes de botar pra exibir no console.log();