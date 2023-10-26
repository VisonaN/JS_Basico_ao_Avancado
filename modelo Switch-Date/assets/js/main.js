const h1 = document.querySelector('.container h1');
const data = new Date();

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

h1.innerHTML = getDiaSemanaTexto(data.getDay());