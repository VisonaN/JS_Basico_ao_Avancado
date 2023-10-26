//                              ESTRUTURA CONDICIONAL => SWITCH CASE

const data = new Date();
let diaSemana = data.getDay();
//diaSemana = 7;
// let diaSemanaTexto;
// Quando está checando vários valores na mesma variável, pode usar switch
// Ao usar switch precisa, precisa informar o JS para sair da função, não sai automático como no if, usando -break;-
// switch(diaSemana) {
// case 0:
//     diaSemanaTexto = 'Domingo';
//     break;
// case 1:
//     diaSemanaTexto = 'Segunda';
//     break;
// case 2:
//     diaSemanaTexto = 'Terça';
//     break;
// case 3:
//     diaSemanaTexto = 'Quarta';
//     break;
// case 4:
//     diaSemanaTexto = 'Quinta';
//     break;
// case 5:
//     diaSemanaTexto = 'Sexta';
//     break;
// case 6:
//     diaSemanaTexto = 'Sábado';
//     break;
// default: // else do switch
//     diaSemanaTexto = 'Não é um dia da semana no JS'    
// }

// if(diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terça';
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta';
// } else if(diaSemana === 4) {
//     diaSemanaTexto = 'Quinta';
// } else if(diaSemana === 5) {
//     diaSemanaTexto = 'Sexta';
// } else if(diaSemana === 6) {
//     diaSemanaTexto = 'Sábado';
// } else {
//     diaSemanaTexto = ''
// }

// Colocando dentro de uma function para eliminar o uso dos breaks

function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;

    switch(diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'Quarta';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'Sexta';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;
    default: // else do switch
        diaSemanaTexto = 'Não é um dia da semana no JS'    
    }
}
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
console.log(diaSemana, diaSemanaTexto);