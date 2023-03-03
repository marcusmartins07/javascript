//Retorne um array com os pares (filter)
//Retorne um array com o dobro de valores (map)

// Some todos os números
/* 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor, indice, array) {
    console.log(acumulador);
    acumulador += valor;
    return acumulador;
}, 0);
console.log(total);
 */

//Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 65 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]; 
const maisVelha = pessoas.reduce(function (acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
}, 0);
console.log(maisVelha);


