//                                         OBJETO DATE 
// É uma função construtora, sempre que se usar uma função construtora tem que usar new.
// Funções construtoras sempre começam com a letra maiúscula. O resto é em CamelCase
// const tresHoras = 60 * 60 * 3 * 1000; // tres horas em milésimos de segundo
// const umDia = 60 * 60 * 24 * 1000; // 02/01/1970 às 00:00:00
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 => Timestamp unix ou Época unix / Mas como o horário de Brasilia diminui 3h e fica 31/12/1969 21:00:00
//const data = new Date(2023, 8, 2, 15, 14, 23);
//                      ano-mes-dia-hora-minuto-segundo-milésimo de segundo (tudo em number) => Os meses em JS começam a contar a partir do 0, então janeiro seria o mês 0 e dezembro o mês 11
// const data = new Date('2023-09-02 20:20:59'); // Formato mais utilizado dataString
// console.log('Dia', data.getDate())
// console.log('Mês', data.getMonth() + 1) // Mês começa do 0
// console.log('Ano', data.getFullYear())
// console.log('Hora', data.getHours()) // Vai ser sempre usado no plural
// console.log('Minuto', data.getMinutes()) // Vai ser sempre usado no plural
// console.log('Segundo', data.getSeconds()) // Vai ser sempre usado no plural
// console.log('Dia da Semana', data.getDay()) // Número do dia na Semana / 0 - Domingo, 6 - Sábado
// console.log(data.toString());
// console.log(Date.now()); // Data atual com os milésimos de segundo => 1698338679552 (do marco zero - 01/01/1970 - até o dia de hoje - 26/10/2023)

// const data = new Date(1698338679552);
// console.log(data.toString());

const data = new Date();
const dataBrasil = formataData(data);
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}
function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} - ${hora}:${min}:${seg}`
}

console.log(dataBrasil);