//Rretorne a soma do dobro de todos pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

/*
 const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros.filter(function (valor) {
    return valor%2 == 0;
}).map(function (valor) {
    console.log(`Numeros pares: ${valor}`);
    return valor*2;
}).reduce(function (acumulador, valor) {
    console.log(`Numeros dobrados: ${valor}`);
    acumulador += valor;
    return acumulador;
}); 
console.log(numerosPares); 
*/

//VERSAO EM ARROW FUNCTION

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
    .filter(valor => valor%2 == 0)
    .map(valor => valor*2)
    .reduce((acumulador, valor) => (acumulador += valor)); 
console.log(numerosPares);