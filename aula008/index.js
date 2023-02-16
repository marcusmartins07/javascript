/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.92592592924
*/
const nome = 'Marcus Vinícius';
const sobrenome = 'Martins';
const idade = 21;
const peso = 75;
const altura = 1.84;
let imc, anoNacimento;

imc = peso/(altura*altura);
anoNacimento = (2022-idade);

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg');
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(nome, sobrenome,'nasceu em' ,anoNacimento);