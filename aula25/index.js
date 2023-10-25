//                                     ESTRUTURAS CONDICIONAIS
/*

* IF => Pode ser usado sozinho
* ELSE IF => Não pode ser executado sozinho, tem que ter um if antes (Pode ser criado quantas vezes forem necessárias na checagem)
* ELSE => Sempre que utilizar else, tem que ter um if antes (Só pode ter um else na checagem) Só vai ser utilizado se nenhuma das condições da checagem for verdadeira.
* Podemos utilizar condições sem else if, utilizando apenas if e else

*/

/*
Entre 0 e 11 => Bom dia
Entre 12 e 17 => Boa tarde
Entre 18 e 23 => Boa noite

const hora = 123;

if (hora >= 0 && hora <= 11.59) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17.59) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23.59) {
    console.log('Boa noite!');
} else {
    console.log('Tenha um bom dia!');
}

const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa!');
} else {
    console.log('Não vou sair de casa!')
}

*/
