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
    //console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei um arquivo e deu erro');
    console.log('Fechei o arquivo');
    try {
        console.log(b);
    } catch (e) {
        console.log('Deu erro.');
    } finally {
        console.log('Também sou um finally');
    }
} catch (e) {
    console.log('Tratando o erro');
} finally {
    console.log('FINALLY: Eu sempre sou executado.');
}
console.log('--------------------------------------------');
// -----------------------------------------------------------------------------------------//

//                                           EXEMPLO

function retornaHora(data) {
    if (data && !(data instanceof Date)) { // Verificando se data é uma instância da função construtora Date
        throw new TypeError('Esperando instancia de Date.')
    }
    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br', {
        hour: '2-digit', // Para colocar o zero a esquerda
        minute: '2-digit', // Para colocar o zero a esquerda
        second: '2-digit', // Para colocar o zero a esquerda
        hour12: false // Para colocar no formato 24h
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch (e) {
    // Tratar erro
    // console.log(e)
} finally {
    console.log('Tenha um bom dia!')
}