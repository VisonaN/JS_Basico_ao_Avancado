// FUNÇÕES IMEDIATAS / FUNÇÕES AUTO INVOCADAS (IIFE) - Immediatly Invoked Function Expression

// Uma forma de fugir do escopo global seria colocar tudo dentro de uma função
// function qualqueCoisa() { 
//     console.log(123456);
// }
// qualqueCoisa();


// Abaixo temos uma IIFE (Que faz a proteção do que for escrito dentro dela não ser afetado ou afetar o escopo global) - Precisa ser envolvida entre parênteses e chamar os parênteses no final ->
/* (function() {

})();
*/
(function(idade, peso, altura) {
    // const nome = 'Paulo'; - Pode colocar qualquer coisa dentro que não vai ser afetado pelo escopo global
    // console.log(nome)

    const sobrenome = 'Visoná';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Paulo'))
    }

    falaNome();
    console.log(idade, peso, altura)

})(27, 58, 1.65);

