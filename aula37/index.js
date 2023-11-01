//                         TRATANDO E LANÇANDO ERROS - Try / Catch / Throw

// Gerando um erro

// try {
//     console.log(naoExisto);
// } catch(err) {
//     console.log('naoExisto não existe');
//     console.log(err);
// }

// function soma(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new Error('x e y precisam ser números') // lançando um erro / E esses erros 'Error' são usados para ajudar os desenvolvedores a saber o tipo de erro que tá rolando. / Geralmente funções construtoras de erro vão ter Error no final ou só Error
//     }
//     return x + y;
// }

// try { // Tratando o erro lançado / Se ocorrer algum erro dentro do bloco try, catch vai ser executado / E se não ocorrer nenhum erro dentro do bloco try, ele vai ser executado.
//     console.log(soma(1, 2));
//     console.log(soma('1', 2));
// } catch(error) { // Capturando o erro
//     console.log(error);
//     console.log('Alguma coisa mais amigável que uma mensagem de erro.')
// }

// -----------------------------------------------------------------------------------------//

//                         TRATANDO E LANÇANDO ERROS - Try / Catch / Finally

// try {
// // É executada quando não há erros
// } catch (e) {
// // É executada quando há erros
// } finally {
//     // Será executado sempre / Mas pode ser omitido
// }

try {
    console.log('Abri um arquivo');
    console.log('Manipulei um arquivo e deu erro');
    console.log('Fechei o arquivo');
} catch (e) {

} finally {

}