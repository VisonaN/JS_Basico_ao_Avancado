/*                                      OPERAÇÕES TERNÁRIAS

=> Pode ou não usar os parênteses, dependendo do tamanho da condição
(Condição)? 'Valor para verdadeiro' : 'Valor para falso';

*/

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'User VIP' : 'Normal User';
// Acima é igual a de baixo, faz a mesma coisa
// if (pontuacaoUsuario >= 1000) {
    //     console.log('User VIP')
    // } else {
        //     console.log('Normal User')
        // }
        
        const corUsuario = null; // Se o usuário escolher uma cor -  const corUsuario = 'Pink'; - ela vai mudar do valor padrão para a cor que o usuário escolheu
        const corPadrao = corUsuario || 'Preta'; // Quando utiliza isso é dito que está setando um valor padrão para a variável / Checa a corUsurario e se ela for nula vai ter um valor padrão (fallback)

console.log(nivelUsuario, corPadrao)