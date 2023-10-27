const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto (diaSemana) {
    //  let diaSemanaTexto;

    //  switch(diaSemana) {
    //  case 0:
    //      diaSemanaTexto = 'Domingo';
    //      return diaSemanaTexto;
    //  case 1:
    //      diaSemanaTexto = 'Segunda-feira';
    //      return diaSemanaTexto;
    //  case 2:
    //      diaSemanaTexto = 'Terça-feira';
    //      return diaSemanaTexto;
    //  case 3:
    //      diaSemanaTexto = 'Quarta-feira';
    //      return diaSemanaTexto;
    //  case 4:
    //      diaSemanaTexto = 'Quinta-feira';
    //      return diaSemanaTexto;
    //  case 5:
    //      diaSemanaTexto = 'Sexta-feira';
    //      return diaSemanaTexto;
    //  case 6:
    //      diaSemanaTexto = 'Sábado';
    //      return diaSemanaTexto;
    //  default: // else do switch
    //      diaSemanaTexto = 'Não é um dia da semana no JS'
    //  }
    // FORMA SEM SWITCH
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return diasSemana[diaSemana]
}

function getNomeMes (numeroMes) {
    //  let numeroMesTexto;

    //  switch(numeroMes) {
    //  case 0:
    //      numeroMesTexto = 'Janeiro';
    //      return numeroMesTexto;
    //  case 1:
    //      numeroMesTexto = 'Fevereiro';
    //      return numeroMesTexto;
    //  case 2:
    //      numeroMesTexto = 'Março';
    //      return numeroMesTexto;
    //  case 3:
    //      numeroMesTexto = 'Abril';
    //      return numeroMesTexto;
    //  case 4:
    //      numeroMesTexto = 'Maio';
    //      return numeroMesTexto;
    //  case 5:
    //      numeroMesTexto = 'Junho';
    //      return numeroMesTexto;
    //  case 6:
    //      numeroMesTexto = 'Julho';
    //      return numeroMesTexto;
    //  case 7:
    //      numeroMesTexto = 'Agosto';
    //      return numeroMesTexto;
    //  case 8:
    //      numeroMesTexto = 'Setembro';
    //      return numeroMesTexto;
    //  case 9:
    //      numeroMesTexto = 'Outubro';
    //      return numeroMesTexto;
    //  case 10:
    //      numeroMesTexto = 'Novembro';
    //      return numeroMesTexto;
    //  case 11:
    //      numeroMesTexto = 'Dezembro';
    //      return numeroMesTexto;
    //  default: // else do switch
    //  numeroMesTexto = 'Não é um mês no JS'
    //  }
    // FORMA SEM SWITCH
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[numeroMes]
}

function zeroAEsquerda(num) {
     return num >= 10 ? num : `0${num}`;
}

function criaData (data) {
     const diaSemana = data.getDay();
     const numeroMes = data.getMonth();
     const nomeDia = getDiaSemanaTexto(diaSemana);
     const nomeMes = getNomeMes(numeroMes);
     return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
         `de ${data.getFullYear()} ` +
         `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
     );
}
h1.innerHTML = criaData(data);

//                           FORMA MAIS SIMPLES DE FAZER A MESMA COISA

// const h1 = document.querySelector('.container h1');
// const data = new Date();

// h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', hourStyle: 'short'});
// NÃO TÁ FUNCIONANDO PRA MIM aaaaaaa