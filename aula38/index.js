/*                                      setInterval e setTimeout                                 */

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-br', {
        hour12: false
    });
}

// Quando quero trabalhar com intervalo de tempo utilizar a função setInterval
// Não precisa dessa função de baixo para criar o intervalo de tempo
// function funcaoDoInterval() {
//     console.log(mostraHora());
// }
// Vai criar uma função anônima aqui dentro para fazer funcionar mas o setInterval não para de executar, então coloca a função dentro de uma variável para jogar dentro da função setTimeout que faz com que seja executada uma vez só dentro de um intervalo determinado.
const timer = setInterval(function() { 
    console.log(mostraHora());
}, 1000);

setTimeout(function() { // Quase a mesma coisa que a setInterval só que executa uma vez só dentro do intervalo que você colocar
    clearInterval(timer); // E a função clearInterval faz ela parar
}, 3000);

setTimeout(function() {
    console.log('Olá, mundo!')
}, 5000)