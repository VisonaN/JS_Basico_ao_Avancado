/*
Paulo Visoná Neto tem 27 anos, pesa 69kg
tem 1.6 de altura e seu IMC é de
Paulo Visoná nasceu em 1996
*/

const nome = 'Paulo Visoná';
const sobrenome = 'Neto';
const idade = 27;
const peso = 69;
const alturaEmM = 1.67;
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM) // peso / (altura * altura);
const ano = 2023;
let anoNascimento = ano - idade;
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);